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

  // 数据源table行编辑
  let tableOptions = [
    {
      text: "查看(模板)",
    },
    {
      text: "编辑(模板)",
      type: "edit",
    },
    {
      text: "设置(模板)",
    },
    {
      text: "翻译(模板)",
    },
    {
      text: "删除(模板)",
      type: "del",
    }
  ];

  tableOptions = tableOptions.map((item) => {
    if (item.type == "edit") {
      return {
        type: "button",
        label: item.text,
        level: "link",
        behavior: "Edit",
        onEvent: {
          click: {
            actions: [
              {
                actionType: "drawer",
                drawer: {
                  $ref: "modal-ref-2", // 固定弹窗
                },
              },
            ],
          },
        },
      };
    }

    if (item.type == "del") {
      return {
        type: "button",
        label: item.text,
        behavior: "Delete",
        className: "m-r-xs text-danger",
        level: "link",
        confirmText: "确认要删除数据",
        onEvent: {
          click: {
            actions: [
              {
                actionType: "ajax",
                data: {
                  "&": "$$",
                },
              },
              {
                actionType: "search",
                groupType: "component",
                componentId: "u:e537fbdd1ad1",
              },
            ],
          },
        },
      };
    }
    return {
      type: "button",
      label: item.text,
      level: "link",
      onEvent: {
        click: {
          actions: [],
        },
      },
    };
  });

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

    // 理论仅展示
    return {
      type: "tpl", // 类型转换
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
    options: [],
    tableConfig: {
      title: "明细(模板)",
      options: {
        form: {
          items: tableItems,
        },
      },
      actions: tableOptions,
      columns, //
      data: {},
    },
  };

  // 整合
  const html = template(__dirname + "/src/templates/home.art", obj);

  return html;
};

//
app.get("/", (req, res) => {
  res.send(initFlyUIData());
});

// 设置端口号
const port = 3000;

// 启动服务器并监听端口
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
