define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./hehe/main.js",
    "group": "E__nodejs_apidoc_hehe_main_js",
    "groupTitle": "E__nodejs_apidoc_hehe_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/food/add",
    "title": "添加菜品",
    "name": "add",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>随机数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "food"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "删除菜品",
    "name": "del",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>随机数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "food"
  },
  {
    "type": "post",
    "url": "/food/find",
    "title": "查询菜品",
    "name": "find",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>随机数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "food"
  },
  {
    "type": "post",
    "url": "/food/update",
    "title": "修改菜品",
    "name": "update",
    "group": "food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>随机数</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./server.js",
    "groupTitle": "food"
  }
] });
