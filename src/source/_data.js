// 页面配置元
exports.tableSetting = {
  code: 0,
  data: {
    id: 1,
    scene: 1,
    tableName: "system_users",
    tableComment: "用户信息表",
    remark: null,
    moduleName: "system",
    businessName: "users",
    className: "Users",
    classComment: "用户信息",
    author: "admin",
    templateType: 1,
    frontType: 20,
    parentMenuId: null,
    masterTableId: null,
    subJoinColumnId: null,
    subJoinMany: null,
    treeParentColumnId: null,
    treeNameColumnId: null,
    dataSourceConfigId: 0,
    createTime: 1710593860000,
    updateTime: 1712900473000,
    name: "",
    enable_api: true,
    enable_audit: true,
    enable_chatter: false,
    enable_events: false,
    enable_files: true,
    enable_inline_edit: true,
    enable_instances: false,
    enable_notes: false,
    enable_search: true,
    enable_tasks: false,
    enable_trash: true,
    enable_workflow: true,
    enable_enhanced_lookup: true,
    icon: "",
    is_enable: true,
    enable_add: true, // 新增
    enable_edit: true, // 编辑
    enable_del: true, // 删除
    enable_query: true, // 行-查看
    enable_import: true, // 导入
    enable_export: true, // 导出
    columns: [
      {
        id: 2248,
        tableId: 1,
        columnName: "id",
        dataType: "BIGINT",
        columnComment: "用户ID",
        nullable: false,
        primaryKey: true,
        autoIncrement: true,
        ordinalPosition: 1,
        javaType: "Long",
        javaField: "id",
        dictType: "",
        example: "706",
        createOperation: false,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        // --- fly-ui 原始数据
        // --- 华炎魔方填充
        required: false, // 必填
        searchable: false, // 可搜索
        hidden: true // 忽略此字段
      },
      {
        id: 2265,
        tableId: 1,
        columnName: "update_time",
        dataType: "TIMESTAMP",
        columnComment: "更新时间",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 18,
        javaType: "LocalDateTime",
        javaField: "updateTime",
        dictType: "",
        example: null,
        createOperation: false,
        updateOperation: false,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "datetime",
        createTime: 1710593860000,
        searchable: true
      },
      {
        id: 2249,
        tableId: 1,
        columnName: "username",
        dataType: "VARCHAR",
        columnComment: "用户账号",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 2,
        javaType: "String",
        javaField: "username",
        dictType: "",
        example: "张三",
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        required: true,
        searchable: true
      },
      {
        id: 2250,
        tableId: 1,
        columnName: "password",
        dataType: "VARCHAR",
        columnComment: "密码",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 3,
        javaType: "String",
        javaField: "password",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        required: true,
        searchable: false
      },
      {
        id: 2251,
        tableId: 1,
        columnName: "nickname",
        dataType: "VARCHAR",
        columnComment: "用户昵称",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 4,
        javaType: "String",
        javaField: "nickname",
        dictType: "",
        example: "张三",
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        required: true,
        searchable: true
      },
      {
        id: 2252,
        tableId: 1,
        columnName: "remark",
        dataType: "VARCHAR",
        columnComment: "备注",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 5,
        javaType: "String",
        javaField: "remark",
        dictType: "",
        example: "随便",
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "textarea",
        createTime: 1710593860000,
        searchable: true,
        maxLength: 5,
        defaultValue: '默认备注' // 默认数据
      },
      {
        id: 2253,
        tableId: 1,
        columnName: "dept_id",
        dataType: "BIGINT",
        columnComment: "部门ID",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 6,
        javaType: "Long",
        javaField: "deptId",
        dictType: "",
        example: "7791",
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        required: true,
        searchable: false
      },
      {
        id: 2254,
        tableId: 1,
        columnName: "post_ids",
        dataType: "VARCHAR",
        columnComment: "岗位编号数组",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 7,
        javaType: "String",
        javaField: "postIds",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        searchable: false
      },
      {
        id: 2255,
        tableId: 1,
        columnName: "email",
        dataType: "VARCHAR",
        columnComment: "用户邮箱",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 8,
        javaType: "String",
        javaField: "email",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        required: true,
        searchable: false
      },
      {
        id: 2256,
        tableId: 1,
        columnName: "mobile",
        dataType: "VARCHAR",
        columnComment: "手机号码",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 9,
        javaType: "String",
        javaField: "mobile",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        required: true,
        searchable: true
      },
      {
        id: 2257,
        tableId: 1,
        columnName: "sex",
        dataType: "TINYINT",
        columnComment: "用户性别",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 10,
        javaType: "Integer",
        javaField: "sex",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "radio",
        required: true,
        createTime: 1710593860000,
        searchable: true,
        options: "LOV_SEX"
      },
      {
        id: 2258,
        tableId: 1,
        columnName: "avatar",
        dataType: "VARCHAR",
        columnComment: "头像地址",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 11,
        javaType: "String",
        javaField: "avatar",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        searchable: false
      },
      {
        id: 2259,
        tableId: 1,
        columnName: "status",
        dataType: "TINYINT",
        columnComment: "帐号状态",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 12,
        javaType: "Integer",
        javaField: "status",
        dictType: "",
        example: "1",
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "checkbox",
        createTime: 1710593860000,
        searchable: true,
        required: true,
        options: "LOV_status"
      },
      {
        id: 2259,
        tableId: 1,
        columnName: "status1",
        dataType: "TINYINT",
        columnComment: "帐号状态(下拉)",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 12,
        javaType: "Integer",
        javaField: "status1",
        dictType: "",
        example: "1",
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "select",
        createTime: 1710593860000,
        searchable: true,
        options: "LOV_status"
      },
      {
        id: 2260,
        tableId: 1,
        columnName: "login_ip",
        dataType: "VARCHAR",
        columnComment: "最后登录IP",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 13,
        javaType: "String",
        javaField: "loginIp",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        readOnly: true,
        createTime: 1710593860000,
        searchable: false
      },
      {
        id: 2261,
        tableId: 1,
        columnName: "login_date",
        dataType: "TIMESTAMP",
        columnComment: "最后登录时间",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 14,
        javaType: "LocalDateTime",
        javaField: "loginDate",
        dictType: "",
        example: null,
        createOperation: true,
        updateOperation: true,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "datetime",
        readOnly: true,
        createTime: 1710593860000,
        searchable: false
      },
      {
        id: 2262,
        tableId: 1,
        columnName: "creator",
        dataType: "VARCHAR",
        columnComment: "创建者",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 15,
        javaType: "String",
        javaField: "creator",
        dictType: "",
        example: null,
        createOperation: false,
        updateOperation: false,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        readOnly: true,
        createTime: 1710593860000,
        searchable: false
      },
      {
        id: 2263,
        tableId: 1,
        columnName: "create_time",
        dataType: "TIMESTAMP",
        columnComment: "创建时间",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 16,
        javaType: "LocalDateTime",
        javaField: "createTime",
        dictType: "",
        example: null,
        createOperation: false,
        updateOperation: false,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "datetime",
        createTime: 1710593860000,
        searchable: false,
        hidden: true // 忽略此字段
      },
      {
        id: 2264,
        tableId: 1,
        columnName: "updater",
        dataType: "VARCHAR",
        columnComment: "更新者",
        nullable: true,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 17,
        javaType: "String",
        javaField: "updater",
        dictType: "",
        example: null,
        createOperation: false,
        updateOperation: false,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        searchable: false,
        readOnly: true,
        hidden: true // 忽略此字段
      },
   
      {
        id: 2266,
        tableId: 1,
        columnName: "deleted",
        dataType: "BIT",
        columnComment: "是否删除",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 19,
        javaType: "Boolean",
        javaField: "deleted",
        dictType: "",
        example: null,
        createOperation: false,
        updateOperation: false,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "radio",
        createTime: 1710593860000,
        searchable: false,
        hidden: true // 忽略此字段
      },
      {
        id: 2267,
        tableId: 1,
        columnName: "tenant_id",
        dataType: "BIGINT",
        columnComment: "租户编号",
        nullable: false,
        primaryKey: false,
        autoIncrement: false,
        ordinalPosition: 20,
        javaType: "Long",
        javaField: "tenantId",
        dictType: "",
        example: "13563",
        createOperation: false,
        updateOperation: false,
        listOperation: null,
        listOperationCondition: null,
        listOperationResult: null,
        htmlType: "input",
        createTime: 1710593860000,
        searchable: false,
        hidden: true // 忽略此字段
      },
    ],
  },
  msg: "",
};
