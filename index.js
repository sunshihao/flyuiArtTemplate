// 引入 express 模块
const fs = require("fs");
const express = require("express");
const template = require("art-template");
const yaml = require("js-yaml");
const schema = yaml.DEFAULT_SCHEMA.extend(require("js-yaml-js-types").all);
const _ = require("lodash");
// const { holidays } = require("./src/yaml/holiday");
const { tableSetting } = require("./src/source/_data");
// const { tagsT, formTagsT } = require("./src/gramTrans/tag");

// 初始化 express 应用
const app = express();

const yamlString = fs.readFileSync(__dirname + "/src/yaml/holiday.yml", "utf8");
const jsonData = yaml.load(yamlString, {
  schema,
});

const initFlyUIData = () => {
  // 模拟码值数据源

  // 数据拼接
  const source = tableSetting.data;

  // 数据源table行编辑
  let tableOptions = [
    {
      text: "查看(模板)",
      type: "edit",
    },
    {
      text: "编辑(模板)",
      type: "edit",
    },
    {
      text: "删除(模板)",
      type: "del",
    },
  ];

  const actions = [
    // {
    //   text: "新增(模板)",
    //   size: "sm",
    //   type: "add"
    // },
    {
      text: "批量删除(模板)",
      size: "sm",
      level: "warning",
    },
    {
      text: "导入(模板)",
      size: "sm",
      level: "primary",
    },
    {
      text: "导出(模板)",
      size: "sm",
      level: "primary",
    },
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

  const lovType = ["LOV_status", "LOV_LOC_type", "LOV_SEX"];

  const obj = {
    lovType,
    source, // 数据源
    title: "值列表查询(模板)", // label
    options: actions, //
    tableConfig: {
      title: "明细(模板)",
      actions: tableOptions, // 表格操作列
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
