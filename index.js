// 引入 express 模块
const fs = require("fs");
const express = require("express");
const template = require("art-template");
const yaml = require("js-yaml");
const schema = yaml.DEFAULT_SCHEMA.extend(require("js-yaml-js-types").all);
const _ = require("lodash");
const { holidays } = require("./src/yaml/holiday");
const { tableSetting } = require("./src/source/_data");
const { tagsT, formTagsT } = require("./src/gramTrans/tag");

// 初始化 express 应用
const app = express();

const yamlString = fs.readFileSync(__dirname + "/src/yaml/holiday.yml", "utf8");
const jsonData = yaml.load(yamlString, {
  schema,
});

const initFlyUIData = () => {
  // 数据拼接
  const { columns: _columns, table } = tableSetting.data;

  const items = [];

  const tableItems = [];

  const split = 3;

  const tableSplit = 2;

  const columns = _columns.map((item) => {
    if (item.createOperation) {
      items.push({
        md: split,
        body: [
          {
            name: item.columnName,
            label: item.columnComment,
            type: formTagsT[item.htmlType] || item.htmlType, //
            mode: "normal", // 固定参数
            labelAlign: "top",
          },
        ],
      });

      tableItems.push({
        name: item.columnName,
        label: item.columnComment,
        type: formTagsT[item.htmlType] || item.htmlType, //
        colSize: `1/${tableSplit}`,
        required: true,
      });
    }

    return {
      type: tagsT[item.htmlType] || "tpl", // 类型转换
      title: item.columnComment,
      name: item.columnName,
    };
  });

  const obj = {
    title: "值列表查询(模板)",
    query: true,
    formConfig: {
      split, // 12 等分
      items,
    },
    tableConfig: {
      title: "明细(模板)",
      options: {
        form: {
          split: tableSplit,
          items: tableItems,
        },
      },
      actions: [],
      columns, //
      data: {},
    },
  };

  // 整合
  const html = template(__dirname + "/src/templates/home.art", obj);

  return html;
};

// 设置一个简单的路由 template/home
app.get("/", (req, res) => {
  res.send(initFlyUIData());
});

app.get("/yaml/holiday", (req, res) => {
  res.send(jsonData);
});

// fetch

// 设置端口号
const port = 3000;

const initT = (uiSchema) => {
  _.each(uiSchema.fields, (field) => {
    try {
      if (
        field.type === "lookup" &&
        field._reference_to &&
        _.isString(field._reference_to)
      ) {
        field.reference_to = eval(`(${field._reference_to})`)();
      }
    } catch (exception) {
      field.reference_to = undefined;
      console.error(exception);
    }
  });
  _.each(uiSchema.list_views, (v, k) => {
    v.name = k;
    if (!_.has(v, "columns")) {
      v.columns = uiSchema.list_views.all.columns;
    }
  });

  return uiSchema;
};

app.get("/demo", (req, res) => {
  res.send(initT(holidays));
});

// 启动服务器并监听端口
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
