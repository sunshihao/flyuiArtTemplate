exports.tableColumns = (fields) => {
  return [
    {
      type: "operation",
      title: "操作",
      buttons: [
        {
          type: "button",
          label: "查看",
          level: "link",
          behavior: "View",
          onEvent: {
            click: {
              actions: [],
            },
          },
        },
        {
          type: "button",
          label: "编辑",
          level: "link",
          behavior: "Edit",
          onEvent: {
            click: {
              actions: [
                {
                  actionType: "drawer",
                  drawer: {
                    $ref: "modal-ref-2",
                  },
                },
              ],
            },
          },
        },
        {
          label: "设置",
          level: "link",
        },
        {
          label: "翻译",
          level: "link",
          onEvent: {
            click: {
              weight: 0,
              actions: [
                {
                  ignoreError: false,
                  actionType: "drawer",
                  drawer: {
                    $ref: "modal-ref-1",
                  },
                },
              ],
            },
          },
        },
        {
          type: "button",
          label: "删除",
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
        },
      ],
    },
  ];
};

const page = (template) => {
  return {
    type: "page",
    regions: ["body"],
    body: [
      {
        type: "service",
        body: [
          {
            type: "container",
            body: [
              {
                type: "crud2",
                mode: "table2",
                dsType: "api",
                syncLocation: true,
                primaryField: "id",
                loadType: "pagination",
                api: {
                  url: "http://111.231.7.32:40001/mock/11/amis/lov_page",
                  method: "get",
                  dataType: "json",
                  replaceData: false,
                },
                filter: {
                  type: "form",
                  title: "{{label}}",
                  mode: "inline",
                  labelAlign: "top",
                  dsType: "api",
                  feat: "Insert",
                  body: [
                    {
                      type: "collapse-group",
                      activeKey: ["1"],
                      body: [
                        {
                          type: "collapse",
                          key: "1",
                          active: true,
                          body: [
                            {
                              type: "grid",
                              columns: [
                                {
                                  body: [
                                    {
                                      name: "lovCode",
                                      label: "编码",
                                      row: 0,
                                      type: "input-text",
                                      colSize: "1/4",
                                      body: [
                                        {
                                          type: "input-text",
                                          label: "编码",
                                          name: "lovCode",
                                        },
                                      ],
                                      size: "full",
                                      mode: "normal",
                                      labelAlign: "top",
                                    },
                                  ],
                                },
                                {
                                  body: [
                                    {
                                      type: "input-text",
                                      label: "名称",
                                      name: "text",
                                      size: "full",
                                      mode: "normal",
                                      labelAlign: "top",
                                    },
                                  ],
                                },
                                {
                                  body: [
                                    {
                                      type: "select",
                                      label: "状态",
                                      name: "enableFlag",
                                      multiple: false,
                                      source: "${LOV_LOC_type}",
                                      size: "full",
                                      mode: "normal",
                                      labelAlign: "top",
                                    },
                                  ],
                                },
                                {
                                  body: [
                                    {
                                      type: "select",
                                      label: "分类",
                                      name: "lovCategoryId",
                                      multiple: false,
                                      source: "${lovType.lineDTOS}",
                                      labelField: "lovName",
                                      valueField: "lovLineId",
                                      size: "full",
                                      mode: "normal",
                                      labelAlign: "top",
                                    },
                                  ],
                                },
                              ],
                              gap: "base",
                            },
                          ],
                          header: {
                            type: "container",
                            body: [
                              {
                                type: "tpl",
                                tpl: "{{label}}",
                                inline: true,
                                className: "page_title",
                                wrapperCustomStyle: {
                                  root: {
                                    "padding-left": '"6px"',
                                  },
                                },
                              },
                              {
                                type: "button-toolbar",
                                buttons: [
                                  {
                                    type: "submit",
                                    label: "查询",
                                    level: "primary",
                                    size: "sm",
                                  },
                                  {
                                    type: "button",
                                    label: "新建",
                                    level: "success",
                                    size: "sm",
                                    onEvent: {
                                      click: {
                                        weight: 0,
                                        actions: [
                                          {
                                            ignoreError: false,
                                            actionType: "drawer",
                                            drawer: {
                                              $ref: "modal-ref-2",
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                  {
                                    type: "reset",
                                    label: "重置",
                                    size: "sm",
                                  },
                                ],
                                mode: "inline",
                              },
                            ],
                            style: {
                              position: "relative",
                              display: "flex",
                              inset: "auto",
                              flexWrap: "nowrap",
                              flexDirection: "row",
                              alignItems: "center",
                            },
                            size: "none",
                            wrapperBody: false,
                            isFixedHeight: false,
                            isFixedWidth: false,
                            wrapperCustomStyle: {
                              root: {
                                flex: "1",
                                display: "flex",
                                "flex-direction": "row",
                                "align-items": "center",
                                "justify-content": "space-between",
                              },
                            },
                          },
                          headingClassName: "page_collapse_head",
                          className: "page_collapse page_collapse_body",
                          bodyClassName: "page_collapse_content",
                        },
                      ],
                      expandIconPosition: "right",
                      className: "page_collapse",
                    },
                  ],
                  resetAfterSubmit: false,
                  columnCount: 4,
                  clearValueOnHidden: true,
                  wrapWithPanel: false,
                  behavior: ["SimpleQuery"],
                  actions: [
                    {
                      type: "submit",
                      label: "查询",
                      level: "primary",
                    },
                    {
                      type: "button",
                      label: "新建",
                      onEvent: {
                        click: {
                          actions: [
                            {
                              ignoreError: false,
                              actionType: "drawer",
                              drawer: {
                                $ref: "modal-ref-2",
                              },
                            },
                          ],
                        },
                      },
                      level: "success",
                    },
                    {
                      type: "button",
                      label: "重置",
                      onEvent: {
                        click: {
                          weight: 0,
                          actions: [
                            {
                              componentId: "u:1556dcd479ab",
                              ignoreError: false,
                              actionType: "reset",
                            },
                          ],
                        },
                      },
                      level: "default",
                    },
                  ],
                },
                headerToolbar: [
                  {
                    type: "flex",
                    direction: "row",
                    justify: "flex-start",
                    alignItems: "stretch",
                    style: {
                      position: "static",
                    },
                    items: [
                      {
                        type: "container",
                        align: "left",
                        behavior: ["Insert", "BulkEdit", "BulkDelete"],
                        body: [
                          {
                            type: "container",
                            body: [
                              {
                                type: "tpl",
                                tpl: "明细",
                                inline: true,
                                className: "page_title",
                              },
                            ],
                            style: {
                              position: "relative",
                              display: "flex",
                              inset: "auto",
                              flexWrap: "nowrap",
                              flexDirection: "column",
                              alignItems: "flex-start",
                            },
                            size: "none",
                            wrapperBody: false,
                          },
                          {
                            type: "container",
                            body: [
                              {
                                type: "select",
                                label: "模块前缀",
                                name: "select",
                                options: [
                                  {
                                    label: "LOV",
                                    value: "A",
                                  },
                                ],
                                multiple: false,
                                mode: "horizontal",
                                labelAlign: "right",
                                wrapperCustomStyle: {
                                  width: "250px",
                                  "margin-right": "10px",
                                  "margin-bottom": "0",
                                },
                              },
                              {
                                type: "button",
                                label: "刷新Redis缓存",
                                onEvent: {
                                  click: {
                                    actions: [],
                                  },
                                },
                                level: "success",
                              },
                            ],
                            style: {
                              position: "relative",
                              display: "flex",
                              flex: "0 0 auto",
                              inset: "auto",
                              flexWrap: "nowrap",
                              alignItems: "baseline",
                            },
                            size: "none",
                            wrapperBody: false,
                            isFixedHeight: false,
                          },
                        ],
                        wrapperBody: false,
                        style: {
                          flex: "1 1 auto",
                          position: "static",
                          display: "flex",
                          flexWrap: "nowrap",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          flexGrow: 1,
                        },
                        isFixedHeight: false,
                        wrapperCustomStyle: {
                          height: "auto",
                        },
                      },
                    ],
                  },
                ],
                footerToolbar: [
                  {
                    type: "flex",
                    direction: "row",
                    justify: "flex-start",
                    alignItems: "stretch",
                    style: {
                      position: "static",
                    },
                    items: [
                      {
                        type: "container",
                        align: "right",
                        body: [
                          {
                            type: "pagination",
                            behavior: "Pagination",
                            layout: ["total", "perPage", "pager"],
                            perPage: 10,
                            perPageAvailable: [10, 20, 50, 100],
                            align: "right",
                          },
                        ],
                        wrapperBody: false,
                        style: {
                          flexGrow: 1,
                          flex: "1 1 auto",
                          position: "static",
                          display: "flex",
                          flexBasis: "auto",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          alignItems: "stretch",
                          justifyContent: "flex-end",
                        },
                      },
                    ],
                  },
                ],
                columns: table_columns(template.fields),
                showHeader: true,
                title: null,
                resizable: true,
              },
            ],
            style: {
              position: "relative",
              display: "block",
              inset: "auto",
            },
            size: "none",
            wrapperBody: false,
            isFixedHeight: false,
            isFixedWidth: false,
          },
        ],
        dsType: "api",
        api: {
          url: "http://111.231.7.32:40001/mock/11/amis/lov_category",
          method: "get",
          adaptor:
            "return {\r\n  status: 0,\r\n  msg: '请求成功',\r\n  data: {\r\n    lovType: payload\r\n  }\r\n}",
          silent: false,
        },
      },
    ],
    pullRefresh: {
      disabled: true,
    },
    definitions: {
      "modal-ref-1": {
        type: "drawer",
        body: [
          {
            type: "crud2",
            mode: "table2",
            dsType: "api",
            syncLocation: true,
            primaryField: "id",
            loadType: "pagination",
            headerToolbar: [],
            footerToolbar: [],
            columns: [
              {
                type: "tpl",
                title: "列名",
                name: "lovField",
              },
              {
                type: "tpl",
                title: "对照值",
                name: "name",
              },
              {
                type: "tpl",
                title: "中文",
                name: "name",
              },
              {
                type: "tpl",
                title: "English",
                name: "name",
              },
              {
                type: "tpl",
                title: "日本语",
                name: "name",
              },
            ],
            editorSetting: {
              mock: {
                enable: false,
                maxDisplayRows: 2,
              },
            },
            api: {
              url: "http://111.231.7.32:40001/mock/11/amis/translate",
              method: "get",
            },
          },
        ],
        title: "翻译",
        actions: [
          {
            type: "button",
            actionType: "cancel",
            label: "取消",
          },
          {
            type: "button",
            actionType: "confirm",
            label: "确定",
            primary: true,
          },
        ],
        showCloseButton: true,
        closeOnOutside: false,
        closeOnEsc: false,
        showErrorMsg: true,
        showLoading: true,
        draggable: false,
        actionType: "drawer",
      },
      "modal-ref-2": {
        type: "drawer",
        body: [
          {
            type: "form",
            title: "表单",
            mode: "flex",
            labelAlign: "top",
            dsType: "api",
            feat: "Insert",
            body: [
              {
                name: "lovCode",
                label: "编码",
                row: 0,
                type: "input-text",
                colSize: "1/2",
                required: true,
              },
              {
                name: "lovName",
                label: "名称",
                row: 0,
                type: "input-text",
                colSize: "1/2",
                required: true,
              },
              {
                name: "lovDesc",
                label: "描述",
                row: 1,
                type: "input-text",
                colSize: "1",
              },
              {
                type: "select",
                label: "分类",
                name: "lovCategoryId",
                row: 2,
                multiple: false,
                source: "${lovType.lineDTOS}",
                labelField: "lovName",
                valueField: "lovLineId",
                required: true,
              },
              {
                type: "select",
                label: "类型",
                name: "lovTypeId",
                multiple: false,
                required: true,
                source: "${LOV_LOC_type}",
              },
              {
                name: "6",
                label: "脚本",
                row: 3,
                type: "input-text",
                colSize: "1/2",
                disabled: true,
              },
              {
                name: "7",
                label: "来源系统",
                row: 4,
                type: "input-text",
                colSize: "1/2",
              },
              {
                name: "enableFlag",
                label: "有效标识",
                row: 4,
                type: "switch",
                colSize: "1/2",
                trueValue: "Y",
                falseValue: "N",
              },
              {
                name: "9",
                label: "使用Value",
                row: 5,
                type: "switch",
                colSize: "1/2",
              },
            ],
            actions: [
              {
                type: "button",
                label: "取消",
                onEvent: {
                  click: {
                    actions: [
                      {
                        actionType: "cancel",
                        componentId: "u:1939b4056ada",
                      },
                    ],
                  },
                },
                level: "default",
              },
              {
                type: "button",
                label: "提交",
                onEvent: {
                  click: {
                    actions: [
                      {
                        actionType: "submit",
                        componentId: "u:1939b4056ada",
                      },
                    ],
                  },
                },
                level: "primary",
              },
            ],
            resetAfterSubmit: true,
          },
        ],
        title: "",
        actions: [
          {
            type: "button",
            actionType: "cancel",
            label: "取消",
          },
          {
            type: "button",
            actionType: "confirm",
            label: "确定",
            primary: true,
          },
        ],
        actionType: "drawer",
        showCloseButton: true,
        closeOnOutside: false,
        closeOnEsc: false,
        showErrorMsg: true,
        showLoading: true,
        draggable: false,
        resizable: false,
        editorSetting: {
          displayName: "Dialog_edit",
        },
      },
    },
    data: {
      LOV_LOC_type: [
        {
          label: "默认",
          value: "1",
        },
        {
          label: "SQL",
          value: "2",
        },
      ],
    },
    wrapperCustomStyle: {
      ".page_title": {
        "font-weight": "550",
        "font-size": "18px",
      },
      ".page_collapse_head": {
        width: "100%",
        "border-bottom": "2px solid #f7f7f9",
      },
      ".page_collapse_content": {
        padding: "20px",
      },
      ".page_collapse_body": {
        "border-bottom": "10px solid #F4F5F7",
      },
      ".page_collapse": {
        width: "100%",
      },
    },
  };
};
