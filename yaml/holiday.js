exports.holidays = {
  name: "holidays",
  label: "节假日",
  icon: "event",
  hidden: true,
  version: 2,
  fields: {
    name: {
      label: "名称",
      type: "text",
      defaultValue: "",
      description: "",
      inlineHelpText: "",
      required: true,
      searchable: true,
      index: true,
      filterable: true,
      sort_no: 10,
      name: "name",
      hidden: false,
      readonly: false,
      disabled: false,
    },
    type: {
      label: "类型",
      type: "select",
      index: true,
      required: true,
      options: [
        {
          label: "公众假日",
          value: "public",
        },
        {
          label: "调配休息日",
          value: "adjusted_holiday",
        },
        {
          label: "调配工作日",
          value: "adjusted_working_day",
        },
      ],
      filterable: true,
      sort_no: 20,
      name: "type",
      inlineHelpText: "",
      description: "",
      hidden: false,
      readonly: false,
      disabled: false,
    },
    date: {
      label: "日期",
      type: "date",
      index: true,
      required: true,
      filterable: true,
      sort_no: 30,
      name: "date",
      inlineHelpText: "",
      description: "",
      hidden: false,
      readonly: false,
      disabled: false,
    },
    adjusted_to: {
      label: "对应工作日",
      type: "select",
      inlineHelpText:
        "当选择了“调配工作日”类型时，需要选择对应工作日是星期几。",
      options: [
        {
          label: "星期日",
          value: "0",
        },
        {
          label: "星期一",
          value: "1",
        },
        {
          label: "星期二",
          value: "2",
        },
        {
          label: "星期三",
          value: "3",
        },
        {
          label: "星期四",
          value: "4",
        },
        {
          label: "星期五",
          value: "5",
        },
        {
          label: "星期六",
          value: "6",
        },
      ],
      sort_no: 40,
      name: "adjusted_to",
      description: "",
      hidden: false,
      readonly: false,
      disabled: false,
      required: false,
    },
    owner: {
      label: "所有者",
      type: "lookup",
      reference_to: "users",
      sortable: true,
      index: true,
      defaultValue: "{userId}",
      visible_on: "{{false}}",
      sort_no: 1000,
      name: "owner",
      inlineHelpText: "",
      description: "",
      hidden: false,
      readonly: false,
      disabled: false,
      required: false,
    },
    created: {
      type: "datetime",
      label: "创建时间",
      readonly: true,
      sortable: true,
      index: true,
      group: "系统信息",
      sort_no: 9999,
      name: "created",
      inlineHelpText: "",
      description: "",
      hidden: false,
      required: false,
      disabled: true,
    },
    created_by: {
      label: "创建人",
      type: "lookup",
      readonly: true,
      reference_to: "users",
      disabled: true,
      index: true,
      group: "系统信息",
      sort_no: 9999,
      name: "created_by",
      inlineHelpText: "",
      description: "",
      hidden: false,
      required: false,
    },
    modified: {
      label: "修改时间",
      type: "datetime",
      readonly: true,
      sortable: true,
      index: true,
      group: "系统信息",
      sort_no: 9999,
      name: "modified",
      inlineHelpText: "",
      description: "",
      hidden: false,
      required: false,
      disabled: true,
    },
    modified_by: {
      label: "修改人",
      type: "lookup",
      readonly: true,
      reference_to: "users",
      disabled: true,
      index: true,
      group: "系统信息",
      sort_no: 9999,
      name: "modified_by",
      inlineHelpText: "",
      description: "",
      hidden: false,
      required: false,
    },
    instances: {
      label: "申请单",
      type: "grid",
      visible_on: "{{false}}",
      name: "instances",
      inlineHelpText: "",
      description: "",
      hidden: false,
      readonly: false,
      disabled: false,
      required: false,
    },
    locked: {
      label: "已锁定",
      type: "boolean",
      hidden: false,
      visible_on: "{{false}}",
      sort_no: 1100,
      name: "locked",
      inlineHelpText: "",
      description: "",
      readonly: false,
      disabled: false,
      required: false,
    },
    company_id: {
      label: "主分部",
      type: "lookup",
      reference_to: "company",
      sortable: true,
      index: true,
      visible_on: "{{false}}",
      sort_no: 1200,
      _filtersFunction:
        'function anonymous(filters,values\n) {\n\n  const uiSchema = values.uiSchema;\n  const permissions = uiSchema && uiSchema.permissions;\n  const modifyAllRecords = permissions && permissions.modifyAllRecords;\n  let queryFilter = [];\n  if(!modifyAllRecords){\n    let company_ids =  [];\n    const globalUser = values.global && values.global.user;\n\n    /* 防止规则改动导致旧系统对象编辑异常，先放开此判断 */\n    if(true || permissions.modifyCompanyRecords){\n        company_ids = globalUser.company_ids;\n    }\n\n    /* 如果当前用户对当前业务对象的有修改指定分部，则允许选择指定分部。*/\n    const modifyAssignCompanysRecords = permissions.modifyAssignCompanysRecords || [];\n    company_ids = _.uniq(company_ids.concat(modifyAssignCompanysRecords));\n\n    if(!company_ids.length){\n        console.warn("当前用户不属于任何分部，无权修改该字段。");\n        queryFilter = ["_id", "=", -1];\n    }else{\n        queryFilter = ["_id", "in", company_ids];\n    }\n  }\n  if(!_.isEmpty(queryFilter) && values.company_id){\n      queryFilter = [queryFilter, \'or\', ["_id", "=", values.company_id]];\n  }\n  return queryFilter;\n\n}',
      _defaultValue:
        "function anonymous(\n) {\n\n  return Steedos.StandardObjects.Base.Fields.companyId.defaultValue.apply(this, arguments)\n\n}",
      name: "company_id",
      inlineHelpText: "",
      description: "",
      hidden: false,
      readonly: false,
      disabled: false,
      required: false,
    },
    company_ids: {
      label: "所属分部",
      type: "lookup",
      reference_to: "company",
      sortable: true,
      index: true,
      multiple: true,
      hidden: false,
      visible_on: "{{false}}",
      sort_no: 1300,
      _filtersFunction:
        'function anonymous(filters,values\n) {\n\n  const uiSchema = values.uiSchema;\n  const permissions = uiSchema && uiSchema.permissions;\n  const modifyAllRecords = permissions && permissions.modifyAllRecords;\n  let queryFilter = [];\n  if(!modifyAllRecords){\n    let company_ids =  [];\n    const globalUser = values.global && values.global.user;\n\n    /* 防止规则改动导致旧系统对象编辑异常，先放开此判断 */\n    if(true || permissions.modifyCompanyRecords){\n        company_ids = globalUser.company_ids;\n    }\n\n    /* 如果当前用户对当前业务对象的有修改指定分部，则允许选择指定分部。*/\n    const modifyAssignCompanysRecords = permissions.modifyAssignCompanysRecords || [];\n    company_ids = _.uniq(company_ids.concat(modifyAssignCompanysRecords));\n\n    if(!company_ids.length){\n        console.warn("当前用户不属于任何分部，无权修改该字段。");\n        queryFilter = ["_id", "=", -1];\n    }else{\n        queryFilter = ["_id", "in", company_ids];\n    }\n  }\n  if(!_.isEmpty(queryFilter) && values.company_id){\n      queryFilter = [queryFilter, \'or\', ["_id", "=", values.company_id]];\n  }\n  return queryFilter;\n\n}',
      _defaultValue:
        "function anonymous(\n) {\n\n  return Steedos.StandardObjects.Base.Fields.companyIds.defaultValue.apply(this, arguments)\n\n}",
      name: "company_ids",
      inlineHelpText: "",
      description: "",
      readonly: false,
      disabled: false,
      required: false,
    },
    instance_state: {
      label: "申请单审批状态",
      type: "select",
      options: [
        {
          label: "草稿",
          value: "draft",
        },
        {
          label: "进行中",
          value: "pending",
        },
        {
          label: "已完成",
          value: "completed",
        },
        {
          label: "已核准",
          value: "approved",
        },
        {
          label: "已驳回",
          value: "rejected",
        },
        {
          label: "已取消",
          value: "terminated",
        },
      ],
      visible_on: "{{false}}",
      readonly: true,
      sort_no: 1400,
      name: "instance_state",
      inlineHelpText: "",
      description: "",
      hidden: false,
      required: false,
      disabled: true,
    },
  },
  list_views: {
    all: {
      label: "全部",
      columns: ["name", "date", "type", "adjusted_to"],
      filter_scope: "all",
      name: "all",
      _id: "undefined.all",
    },
  },
  datasource: "meteor",
  isMain: true,
  actions: {
    standard_query: {
      label: "查找",
      on: "list",
      todo: "standard_query",
      _visible:
        "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_query.visible.apply(this, arguments)\n            }",
      name: "standard_query",
    },
    standard_new: {
      label: "新建",
      on: "list",
      todo: "standard_new",
      _visible:
        "function (object_name) {\n                return Steedos.StandardObjects.Base.Actions.standard_new.visible.apply(this, arguments)\n            }",
      name: "standard_new",
    },
    standard_open_view: {
      label: "查看",
      sort: -1,
      on: "list_item",
      todo: "standard_open_view",
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return true;\n            }",
      name: "standard_open_view",
    },
    standard_edit: {
      label: "编辑",
      sort: 0,
      on: "record",
      todo: "standard_edit",
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return Steedos.StandardObjects.Base.Actions.standard_edit.visible.apply(this, arguments)\n            }",
      name: "standard_edit",
    },
    standard_delete: {
      label: "删除",
      on: "record_more",
      todo: "standard_delete",
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return Steedos.StandardObjects.Base.Actions.standard_delete.visible.apply(this, arguments)\n            }",
      name: "standard_delete",
    },
    standard_delete_many: {
      label: "删除",
      on: "list",
      todo: "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_delete_many.todo.apply(this, arguments)\n            }",
      _todo:
        "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_delete_many.todo.apply(this, arguments)\n            }",
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return Steedos.StandardObjects.Base.Actions.standard_delete_many.visible.apply(this, arguments)\n            }",
      name: "standard_delete_many",
    },
    standard_approve: {
      label: "发起审批",
      on: "record_only",
      type: "amis_button",
      amis_schema: {
        type: "service",
        body: [
          {
            type: "button",
            label: "发起审批",
            id: "u:6887f3ab860a",
            editorState: "default",
            onEvent: {
              click: {
                weight: 0,
                actions: [
                  {
                    actionType: "steedos_actions_standard_approve",
                  },
                ],
              },
            },
          },
        ],
        regions: ["body"],
        data: {
          context: {},
          dataComponentId: "",
          record_id: "",
          record: {},
          permissions: {},
        },
        bodyClassName: "p-0",
        id: "u:5dd49d3a508c",
      },
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return Steedos.StandardObjects.Base.Actions.standard_approve.visible.apply(this, arguments)\n            }",
      name: "standard_approve",
    },
    standard_create_instance: {
      label: "申请",
      sort: -1,
      on: "list",
      type: "amis_button",
      amis_schema: {
        type: "service",
        body: [
          {
            type: "button",
            label: "申请",
            id: "u:standard_create_instance",
            editorState: "default",
            onEvent: {
              click: {
                weight: 0,
                actions: [
                  {
                    actionType: "custom",
                    script:
                      "// 编写判断,当前可发起的流程是单个还是多个. 并返回数据用于控制下个事件是直接新建申请单草稿还是弹出流程让选择\n\nconst flows = lodash.filter(Creator.object_workflows, (item) => { return item.object_name == event.data.object_name && (!item.sync_direction || item.sync_direction == 'both' || item.sync_direction == 'ins_to_obj') && true !== item.forbid_initiate_instance })\n\nevent.setData({ ...event.data, ...{ flows: flows, flowCount: flows.length } })\n\n",
                  },
                  {
                    actionType: "ajax",
                    outputVar: "responseResult",
                    args: {
                      options: {},
                      api: {
                        url: "${context.rootUrl}/api/workflow/v2/draft",
                        method: "post",
                        requestAdaptor:
                          "api.data = {\n    'instance': {\n        'flow': api.body.flows[0].flow_id,\n        'applicant': api.body.context.userId,\n        'space': api.body.context.tenantId\n       \n}}\n\nreturn api;",
                        adaptor:
                          "\nif (payload.error) { \n  return {\n    status: 2,\n    msg: payload.error\n  }\n}\nconst instance = payload.instance;\nSteedos.openWindow(Steedos.absoluteUrl('/app/' + FlowRouter.current().params.app_id + '/instances/view/' + instance._id + '?display=' + (Steedos.Page.getDisplay('instances') || '') + '&side_object=instances&side_listview_id=draft'))\nreturn payload;",
                        messages: {},
                        headers: {
                          Authorization:
                            "Bearer ${context.tenantId},${context.authToken}",
                        },
                        data: {
                          "&": "$$",
                          context: "${context}",
                          objectName: "${objectName}",
                          recordId: "${recordId}",
                        },
                      },
                    },
                    expression: "${event.data.flowCount == 1}",
                  },
                  {
                    actionType: "dialog",
                    expression: "${event.data.flowCount > 1}",
                    dialog: {
                      type: "dialog",
                      title: "选择流程发起审批",
                      body: [
                        {
                          type: "form",
                          id: "u:f78efaa51a4f",
                          body: [
                            {
                              type: "input-tree",
                              name: "flowId",
                              label: false,
                              clearable: true,
                              id: "u:025b991fd40b",
                              multiple: false,
                              treeContainerClassName: "no-border m-none p-none",
                              source: {
                                method: "get",
                                url: "${context.rootUrl}/api/workflow/v2/get_object_workflows",
                                requestAdaptor: "api.data = {};return api;",
                                adaptor:
                                  "return {  data: _.filter(payload, (item) => { return item.object_name == api.body.objectName && item.can_add && (!item.sync_direction || item.sync_direction == 'both' || item.sync_direction == 'ins_to_obj') && true !== item.forbid_initiate_instance })};",
                                messages: {},
                                dataType: "json",
                                headers: {
                                  Authorization:
                                    "Bearer ${context.tenantId},${context.authToken}",
                                },
                                data: {
                                  objectName: "${objectName}",
                                  spaceId: "${context.tenantId}",
                                },
                              },
                              value: "",
                              labelField: "flow_name",
                              valueField: "flow_id",
                              onEvent: {
                                change: {
                                  weight: 0,
                                  actions: [
                                    {
                                      actionType: "ajax",
                                      outputVar: "responseResult",
                                      args: {
                                        options: {},
                                        api: {
                                          url: "${context.rootUrl}/api/workflow/v2/draft",
                                          method: "post",
                                          requestAdaptor:
                                            "api.data = {\n    'instance': {\n        'flow': api.body.flowId,\n        'applicant': api.body.context.userId,\n        'space': api.body.context.tenantId\n       \n}}\n\nreturn api;",
                                          adaptor:
                                            "\nif (payload.error) { \n  return {\n    status: 2,\n    msg: payload.error\n  }\n}\nconst instance = payload.instance;\nSteedos.openWindow(Steedos.absoluteUrl('/app/' + FlowRouter.current().params.app_id + '/instances/view/' + instance._id + '?display=' + (Steedos.Page.getDisplay('instances') || '') + '&side_object=instances&side_listview_id=draft'))\nreturn payload;",
                                          messages: {},
                                          headers: {
                                            Authorization:
                                              "Bearer ${context.tenantId},${context.authToken}",
                                          },
                                          data: {
                                            "&": "$$",
                                            context: "${context}",
                                            objectName: "${objectName}",
                                            recordId: "${recordId}",
                                          },
                                        },
                                      },
                                      expression: "${event.data.value}",
                                    },
                                    {
                                      actionType: "closeDialog",
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                          wrapWithPanel: false,
                        },
                      ],
                      showCloseButton: true,
                      showErrorMsg: true,
                      showLoading: true,
                      className: "",
                      id: "u:ba79188bbf7e",
                      closeOnEsc: true,
                      actions: [],
                      size: "md",
                      data: {
                        "&": "$$",
                      },
                      dataMap: {},
                      withDefaultData: true,
                      dataMapSwitch: true,
                      bodyClassName: "overflow-hidden",
                    },
                  },
                ],
              },
            },
          },
        ],
        regions: ["body"],
        data: {
          context: {},
          dataComponentId: "",
          record_id: "",
          record: {},
          permissions: {},
        },
        bodyClassName: "p-0",
        id: "u:6ac1032391f4",
      },
      _visible:
        "function(object_name, record_id, record_permissions, data){\n                if (data._isRelated) return false;\n                return lodash.filter(Creator.object_workflows, (item)=>{return item.object_name == object_name && (!item.sync_direction || item.sync_direction == 'both' || item.sync_direction == 'ins_to_obj') && true !== item.forbid_initiate_instance}).length > 0\n            }",
      name: "standard_create_instance",
    },
    standard_view_instance: {
      label: "查看审批单",
      on: "record_only",
      todo: "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_view_instance.todo.apply(this, arguments)\n            }",
      _todo:
        "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_view_instance.todo.apply(this, arguments)\n            }",
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return Steedos.StandardObjects.Base.Actions.standard_view_instance.visible.apply(this, arguments)\n            }",
      name: "standard_view_instance",
    },
    standard_follow: {
      label: "关注",
      on: "list",
      todo: "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_follow.todo.apply(this, arguments)\n            }",
      _todo:
        "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_follow.todo.apply(this, arguments)\n            }",
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return Steedos.StandardObjects.Base.Actions.standard_follow.visible.apply(this, arguments)\n            }",
      name: "standard_follow",
    },
    standard_submit_for_approval: {
      on: "record_only",
      type: "amis_button",
      amis_schema: {
        type: "service",
        body: [
          {
            type: "button",
            label: "提请审批",
            id: "u:standard_submit_for_approval",
            onEvent: {
              click: {
                actions: [
                  {
                    actionType: "dialog",
                    dialog: {
                      type: "dialog",
                      title: "提交待审核",
                      body: [
                        {
                          type: "form",
                          id: "u:1eb06e6962d8",
                          title: "表单",
                          body: [
                            {
                              type: "steedos-field",
                              id: "u:9f4486c22f52",
                              field:
                                '{\n  "label": "意见",\n  "name": "comment",\n  "type": "textarea",\n  "rows": 3,\n  "is_wide": true\n}',
                              name: "comment",
                            },
                            {
                              type: "steedos-field",
                              id: "u:9f4486c22f52",
                              field:
                                '{\n  "label": "选择下一位批准人",\n  "name": "approver",\n  "type": "lookup",\n  "reference_to": "space_users",\n  "reference_to_field": "user",\n  "required": true,\n  "is_wide": true\n}',
                              name: "approver",
                              placeholder: "",
                              visibleOn: "${showApprover === true}",
                            },
                          ],
                          wrapWithPanel: false,
                          mode: "normal",
                          api: {
                            method: "post",
                            url: "${context.rootUrl}/api/v4/process/submit/${objectName}/${recordId}",
                            data: {
                              "&": "$$",
                            },
                            requestAdaptor:
                              "\napi.data = {\n  comment: api.body.comment\n};\n\nif (api.body.approver) {\n  api.data.approver = api.body.approver;\n}\n\nreturn api;",
                            adaptor:
                              "\npayload.data = {};\npayload.data.showApprover = payload.error === 'process_approval_error_needToChooseApprover'\n\nif (payload.state === 'FAILURE') {\n  if (payload.data.showApprover) {\n    payload.msg = \"请选择下一位批准人\";\n  } else { \n    payload.msg = window.t(payload.error)\n  }\n}\n\n\nreturn payload;",
                            responseData: {
                              "&": "$$",
                            },
                            headers: {
                              Authorization:
                                "Bearer ${context.tenantId},${context.authToken}",
                            },
                          },
                          debug: false,
                          onEvent: {
                            submitSucc: {
                              weight: 0,
                              actions: [
                                {
                                  actionType: "custom",
                                  script:
                                    '\n                                                                doAction({\n                                                                    "actionType": "broadcast",\n                                                                    "args": {\n                                                                    "eventName": `@data.changed.${event.data.objectName}`\n                                                                    },\n                                                                    "data": {\n                                                                        "objectName": `${event.data.objectName}`\n                                                                    }\n                                                                  });\n                                                              ',
                                },
                              ],
                            },
                          },
                        },
                      ],
                      id: "u:7a3f92e56805",
                      closeOnEsc: false,
                      closeOnOutside: false,
                      showCloseButton: true,
                      size: "md",
                    },
                  },
                ],
                weight: 0,
              },
            },
          },
        ],
        regions: ["body"],
        data: {},
        bodyClassName: "p-0",
        id: "u:50444554a302",
      },
      _visible:
        "function (object_name, record_id) {\n                return Steedos.StandardObjects.Base.Actions.standard_submit_for_approval.visible.apply(this, arguments)\n            }",
      label: "提请批准",
      name: "standard_submit_for_approval",
    },
    standard_export_excel: {
      label: "导出",
      on: "list",
      todo: "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_export_excel.todo.apply(this, arguments)\n            }",
      _todo:
        "function () {\n                return Steedos.StandardObjects.Base.Actions.standard_export_excel.todo.apply(this, arguments)\n            }",
      _visible:
        "function (object_name, record_id, record_permissions) {\n                return Steedos.StandardObjects.Base.Actions.standard_export_excel.visible.apply(this, arguments)\n            }",
      name: "standard_export_excel",
    },
    standard_print: {
      label: "打印",
      visible: false,
      on: "record_only",
      type: "amis_button",
      amis_schema: {
        type: "service",
        body: [
          {
            type: "service",
            body: [
              {
                type: "dropdown-button",
                label: "打印",
                buttons: "${buttonOptions}",
                id: "u:8cd2cefcaf9b",
                disabled: false,
                hidden: false,
              },
            ],
            id: "u:2b1dc4682c90",
            messages: {},
            api: {
              url: "${context.rootUrl}/graphql",
              method: "post",
              messages: {
                failed: "打印功能需要企业许可证",
              },
              requestAdaptor: "",
              adaptor:
                'const buttonOptions = [];\nfor (const row of payload.data.rows) {\n  buttonOptions.push({\n    "type": "button",\n    "label": row.label,\n    "onEvent": {\n      "click": {\n        "actions": [\n          {\n            "actionType": "url",\n            "args": {\n              "url": "${context.rootUrl}/api/page/render",\n              "blank": true,\n              "params": {\n                "schemaApi": "${context.rootUrl}/service/api/@steedos/print-template/getPrintSchema/" + row._id,\n                "data": {\n                  "filters": ["_id", "=", "${recordId}"]\n                }      \n              }\n            }\n          }\n        ]\n      }\n    }\n  })\n}\n\npayload.data = {\n  buttonOptions: buttonOptions \n}\nreturn payload',
              headers: {
                Authorization:
                  "Bearer ${context.tenantId},${context.authToken}",
              },
              data: {
                "&": "$$",
                query:
                  '{   rows: object_print(filters: [["object_name", "=", "${objectName}"]]) {     _id     name   label   object_name   } }',
              },
            },
            initFetch: true,
            onEvent: {
              init: {
                weight: 0,
                actions: [],
              },
            },
            name: "print",
          },
        ],
        regions: ["body"],
        data: {
          context: {},
          dataComponentId: "",
          record_id: "",
          record: {},
          permissions: {},
        },
        id: "u:038c6047be31",
        bodyClassName: "p-0",
      },
      name: "standard_print",
    },
    standard_import_data: {
      label: "导入数据",
      on: "list",
      todo: "function anonymous(objectName\n) {\n\n  return Steedos.StandardObjects.Base.Actions.standard_import_data.todo.apply(this, arguments)\n\n}",
      _todo:
        "function anonymous(objectName\n) {\n\n  return Steedos.StandardObjects.Base.Actions.standard_import_data.todo.apply(this, arguments)\n\n}",
      _visible:
        "function anonymous(objectName\n) {\n\n  return Steedos.StandardObjects.Base.Actions.standard_import_data.visible.apply(this, arguments)\n\n}",
      name: "standard_import_data",
    },
  },
  fields_serial_number: 9999,
  __timestamp: 1726796667200,
  originalFields: ["name", "type", "date", "adjusted_to"],
  idFieldName: "_id",
  idFieldNames: ["_id"],
  NAME_FIELD_KEY: "name",
  table_name: "holidays",
  permissions: {
    allowRead: true,
    allowCreate: true,
    allowEdit: true,
    allowDelete: true,
    viewAllRecords: true,
    modifyAllRecords: true,
    viewCompanyRecords: false,
    modifyCompanyRecords: false,
    allowCreateListViews: true,
    allowExport: false,
    allowReadFiles: true,
    viewAllFiles: true,
    allowCreateFiles: true,
    allowEditFiles: true,
    allowDeleteFiles: true,
    modifyAllFiles: true,
    disabled_list_views: [],
    disabled_actions: [],
    unreadable_fields: [],
    uneditable_fields: [],
    unrelated_objects: [],
    field_permissions: {},
    viewAssignCompanysRecords: [],
    modifyAssignCompanysRecords: [],
  },
  details: [],
  masters: [],
  lookup_details: [],
  description: "",
  hasImportTemplates: false,
};
