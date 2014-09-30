define({ api: [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          }
        ]
      }
    },
    "group": "ChartController_php",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "isPublic",
            "defaultValue": "true",
            "optional": true,
            "description": "<p>Whether the chart can be viewed in the public gallery</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "config",
            "optional": false,
            "description": "<p>The chart config (see <a href=\"/chart-config\">Chart Config</a> docs)</p>"
          }
        ]
      }
    },
    "group": "ChartController_php",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.id",
            "optional": false,
            "description": "<p>Unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.name",
            "optional": false,
            "description": "<p>The chart reference</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "chart.tags",
            "optional": false,
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart.config",
            "optional": false,
            "description": "<p>Config (see <a href=\"/chart-config\">Chart Config</a> docs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "chart.isPublic",
            "optional": false,
            "description": "<p>Is chart in public gallery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "chart.totalViews",
            "optional": false,
            "description": "<p>Running total number of views</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "chart.createdAt",
            "optional": false,
            "description": "<p>Created date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "chart.updatedAt",
            "optional": false,
            "description": "<p>Updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.publicUrl",
            "optional": false,
            "description": "<p>URL to a publicly visible version of the chart</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.versionHash",
            "optional": false,
            "description": "<p>A hash to check for changes, compares updated data of related sets</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart.images",
            "optional": false,
            "description": "<p>A list of URLs to the chart in various image formats</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart.creator",
            "optional": false,
            "description": "<p>The User object that created the chart</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "chart.editable",
            "optional": false,
            "description": "<p>Whether the chart is editable by the requestor</p>"
          }
        ]
      }
    },
    "group": "ChartController_php",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "post",
    "url": "/chart",
    "title": "Create",
    "version": "1.0.0",
    "name": "CreateChart",
    "group": "Chart",
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"chart\": {\n   .. chart object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "isPublic",
            "defaultValue": "true",
            "optional": true,
            "description": "<p>Whether the chart can be viewed in the public gallery</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "config",
            "optional": false,
            "description": "<p>The chart config (see <a href=\"/chart-config\">Chart Config</a> docs)</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "delete",
    "url": "/chart/:id",
    "title": "Delete",
    "version": "1.0.0",
    "name": "DeleteChart",
    "group": "Chart",
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "get",
    "url": "/chart/:id",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetChart",
    "group": "Chart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "t",
            "optional": true,
            "description": "<p>Token to view chart if isn&#39;t public</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"chart\": {\n   \"id\": \"541fdd38c9a61d68707f9d86\",\n   \"name\": \"My chart\",\n   \"tags: [ \"example\", \"bar\" ],\n   \"config\": {\n     .. config object ..\n   },\n   \"isPublic\": true,\n   \"totalViews\": 153,\n   \"createdAt\": \"2014-09-22T09:26:32+00:00\",\n   \"updatedAt\": \"2014-09-22T09:29:57+00:00\",\n   \"publicUrl\": \"http://public.chartblocks.com/c/541fdd38c9a61d68707f9d86\",\n   \"versionHash\": \"4ee3b408\",\n   \"images\": {\n     \"png\": { \"name\": \"PNG\", \"extension\": \"png\", \"url\": \"https://img.chartblocks.com/541fdd38c9a61d68707f9d86.png\"},\n     \"pdf\": { \"name\":\"PDF\", \"extension\": \"pdf\", \"url\": \"https://img.chartblocks.com/541fdd38c9a61d68707f9d86.pdf\"},\n     \"svg\": { \"name\":\"SVG\", \"extension\": \"svg\", \"url\": \"https://img.chartblocks.com/541fdd38c9a61d68707f9d86.svg\"},\n     \"eps\": { \"name\":\"EPS\", \"extension\": \"eps\", \"url\": \"https://img.chartblocks.com/541fdd38c9a61d68707f9d86.eps\"},\n     \"ps\": { \"name\":\"PS\", \"extension\": \"ps\", \"url\": \"https://img.chartblocks.com/541fdd38c9a61d68707f9d86.ps\"}\n   },\n   \"creator\": {\n     .. user object ..\n   },\n   \"editable\": false\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.id",
            "optional": false,
            "description": "<p>Unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.name",
            "optional": false,
            "description": "<p>The chart reference</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "chart.tags",
            "optional": false,
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart.config",
            "optional": false,
            "description": "<p>Config (see <a href=\"/chart-config\">Chart Config</a> docs)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "chart.isPublic",
            "optional": false,
            "description": "<p>Is chart in public gallery</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "chart.totalViews",
            "optional": false,
            "description": "<p>Running total number of views</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "chart.createdAt",
            "optional": false,
            "description": "<p>Created date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "chart.updatedAt",
            "optional": false,
            "description": "<p>Updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.publicUrl",
            "optional": false,
            "description": "<p>URL to a publicly visible version of the chart</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "chart.versionHash",
            "optional": false,
            "description": "<p>A hash to check for changes, compares updated data of related sets</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart.images",
            "optional": false,
            "description": "<p>A list of URLs to the chart in various image formats</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart.creator",
            "optional": false,
            "description": "<p>The User object that created the chart</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "chart.editable",
            "optional": false,
            "description": "<p>Whether the chart is editable by the requestor</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "get",
    "url": "/chart",
    "title": "List",
    "version": "1.0.0",
    "name": "ListChart",
    "group": "Chart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "public",
            "defaultValue": "false",
            "optional": true,
            "description": "<p>Show all public charts (defaults to own charts).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort_by",
            "defaultValue": "updatedAt",
            "optional": true,
            "description": "<p>Sort results by given field. <p class=\"valid values\">Valid values: <code>updatedAt</code> <code>createdAt</code> <code>name</code> <code>totalViews</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "order",
            "defaultValue": "asc",
            "optional": true,
            "description": "<p>Order of results <p class=\"valid values\">Valid values: <code>asc</code> <code>desc</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "limit",
            "defaultValue": "50",
            "optional": true,
            "description": "<p>Maximum number of results to return per request</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "page",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Which page of results to return (coupled with limit for pagination)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "term",
            "optional": true,
            "description": "<p>Search query</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "creator",
            "optional": true,
            "description": "<p>Filter results to a particular user (used with &#39;public&#39; to get a users public charts)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "charts",
            "optional": false,
            "description": "<p>A list of matching charts</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "state",
            "optional": false,
            "description": "<p>List state</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "state.totalRecords",
            "optional": false,
            "description": "<p>The total number matching charts for pagination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"charts\": [\n   { .. chart object .. },\n   { .. chart object .. }\n ],\n \"state\": {\n   \"totalRecords\": 2\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "patch",
    "url": "/chart/:id",
    "title": "Patch",
    "version": "1.0.0",
    "name": "PatchChart",
    "group": "Chart",
    "description": "<p>All paramters are optional and get merged against existing values server side</p>",
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"chart\": {\n   .. chart object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "isPublic",
            "defaultValue": "true",
            "optional": true,
            "description": "<p>Whether the chart can be viewed in the public gallery</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "config",
            "optional": false,
            "description": "<p>The chart config (see <a href=\"/chart-config\">Chart Config</a> docs)</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "put",
    "url": "/chart/:id",
    "title": "Update",
    "version": "1.0.0",
    "name": "UpdateChart",
    "group": "Chart",
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"chart\": {\n   .. chart object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the chart</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "field": "isPublic",
            "defaultValue": "true",
            "optional": true,
            "description": "<p>Whether the chart can be viewed in the public gallery</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "config",
            "optional": false,
            "description": "<p>The chart config (see <a href=\"/chart-config\">Chart Config</a> docs)</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "put",
    "url": "/data/alter/:set-id",
    "title": "Alter data structure",
    "version": "1.0.0",
    "name": "DataAlter",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "<p>The type of change <p class=\"valid values\">Valid values: <code>shiftRow</code> <code>shiftCol</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "index",
            "optional": false,
            "description": "<p>Row/column to shift from</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "Number",
            "optional": false,
            "description": "<p>of row/columns to shift by</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true\n}\n",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Add one row to top of set",
        "content": "{\n \"method\": \"shiftRow\",\n \"index\": 0,\n \"amount\": 1\n}\n",
        "type": "json"
      },
      {
        "title": "Shift column 2 (B) along 2",
        "content": "{\n \"method\": \"shiftCol\",\n \"index\": 2,\n \"amount\": 2\n}\n",
        "type": "json"
      }
    ],
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/DataAlterController.php"
  },
  {
    "type": "put",
    "url": "/data/append/:set-id",
    "title": "Append data",
    "version": "1.0.0",
    "name": "DataAppend",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "data",
            "optional": false,
            "description": "<p>The data array to append to the bottom of the set, consists of an array of objects keyed by column ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true\n}\n",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Append one row",
        "content": "{\n \"data\": [\n   {\n     \"1\": \"2015\",\n     \"2\": 11.5\n   }\n ]\n}\n",
        "type": "json"
      },
      {
        "title": "Append multiple rows",
        "content": "{\n \"data\": [\n   {\n     \"1\": \"2015\",\n     \"2\": 11.5\n   },\n   {\n     \"1\": \"2016\",\n     \"2\": 18\n   }\n ]\n}\n",
        "type": "json"
      }
    ],
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/DataAppendController.php"
  },
  {
    "type": "get",
    "url": "/data/:set-id",
    "title": "Get data",
    "version": "1.0.0",
    "name": "DataGet",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "version",
            "defaultValue": "live",
            "optional": true,
            "description": "<p>Which version of the data would you like?</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "limit",
            "defaultValue": "100",
            "optional": true,
            "description": "<p>How many rows to return?</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "offset",
            "defaultValue": "0",
            "optional": true,
            "description": "<p>Returns from starting at offset</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "fromRow",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>As missing rows are ommitted from results, allows you to select a range of rows specifically</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "toRow",
            "optional": true,
            "description": "<p>As missing rows are omitted from results, allows you to select a range of rows specifically</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "data",
            "optional": false,
            "description": "<p>The data, keyed by row number and column number</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "meta",
            "optional": false,
            "description": "<p>See &quot;Set meta&quot; for object definition</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "query",
            "optional": false,
            "description": "<p>The query performed to get the data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "query.setId",
            "optional": false,
            "description": "<p>The set ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "query.version",
            "optional": false,
            "description": "<p>Version of data returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "query.offset",
            "optional": false,
            "description": "<p>Return results start at offset x</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "query.limit",
            "optional": false,
            "description": "<p>Results are limited to x</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "query.fromRow",
            "optional": false,
            "description": "<p>Row filter</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "query.toRow",
            "optional": false,
            "description": "<p>Row filter</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "query.onlyRows",
            "optional": false,
            "description": "<p>Row filter</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "query.columns",
            "optional": false,
            "description": "<p>Column filter</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "query.groupBy",
            "optional": false,
            "description": "<p>Group data by column(s)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "query.sortBy",
            "optional": false,
            "description": "<p>Sort data by column(s)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "query.order",
            "optional": false,
            "description": "<p>ASC(1)/DESC(-1) order</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "query.transpose",
            "optional": false,
            "description": "<p>Flip rows/columns</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"data\": {\n       \"1\": {\n           \"cells\": {\n               \"1\": {\n                   \"t\": \"s\",\n                   \"o\": null,\n                   \"c\": 1,\n                   \"v\": \"Year\"\n               },\n               \"2\": {\n                   \"t\": \"s\",\n                   \"o\": null,\n                   \"c\": 2,\n                   \"v\": \"Facebook\"\n               },\n               \"3\": {\n                   \"t\": \"s\",\n                   \"o\": null,\n                   \"c\": 3,\n                   \"v\": \"Twitter\"\n               },\n               \"4\": {\n                   \"t\": \"s\",\n                   \"o\": null,\n                   \"c\": 4,\n                   \"v\": \"Pinterest\"\n               }\n           }\n       },\n       \"2\": {\n           \"cells\": {\n               \"1\": {\n                   \"t\": \"i\",\n                   \"o\": \"2011\",\n                   \"c\": 1,\n                   \"v\": 2011\n               },\n               \"2\": {\n                   \"t\": \"i\",\n                   \"o\": \"845000000\",\n                   \"c\": 2,\n                   \"v\": 845000000\n               },\n               \"3\": {\n                   \"t\": \"i\",\n                   \"o\": \"300000000\",\n                   \"c\": 3,\n                   \"v\": 300000000\n               }\n           }\n       }\n   },\n   \"meta\": {\n       .. meta object ..\n   },\n   \"query\": {\n       \"setId\": \"53edd85d279871ba098b4587\",\n       \"version\": 1,\n       \"fromRow\": 1,\n       \"toRow\": 50,\n       \"onlyRows\": [],\n       \"offset\": 0,\n       \"limit\": 51,\n       \"columns\": [],\n       \"groupBy\": [],\n       \"sortBy\": [],\n       \"order\": 1,\n       \"transpose\": false\n   },\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/DataController.php"
  },
  {
    "type": "get",
    "url": "/meta/:set-id",
    "title": "Meta",
    "version": "1.0.0",
    "name": "DataMeta",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "version",
            "defaultValue": "latest",
            "optional": true,
            "description": "<p>Which version of the data would you like meta for?</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "meta",
            "optional": false,
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "meta.version",
            "optional": false,
            "description": "<p>The data version</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "meta.type",
            "optional": false,
            "description": "<p>Version type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "meta.rows",
            "optional": false,
            "description": "<p>Total rows in set</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "meta.columns",
            "optional": false,
            "description": "<p>Total columns in set</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "meta.createdAt",
            "optional": false,
            "description": "<p>Created date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "meta.updatedAt",
            "optional": false,
            "description": "<p>Updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "meta.isImporting",
            "optional": false,
            "description": "<p>Is data being imported to this version?</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"meta\": {\n   \"version\": 1,\n   \"type\": 1,\n   \"rows\": 0,\n   \"columns\": 0,\n   \"createdAt\": \"2014-09-22T15:57:54+01:00\",\n   \"updatedAt\": \"2014-09-22T15:57:54+01:00\",\n   \"isImporting\": true\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/MetaController.php"
  },
  {
    "type": "put",
    "url": "/data/:set-id",
    "title": "Save data",
    "version": "1.0.0",
    "name": "DataSave",
    "group": "Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "field": "data",
            "optional": false,
            "description": "<p>The data object to update, can be a complete set or partial, keyed by row ID and column ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "success",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true\n}\n",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Update single column (row 11, column 4)",
        "content": "{\n \"data\": {\n   \"11\": {\n     \"4\": \"70000002\"\n   }\n }\n}\n",
        "type": "json"
      },
      {
        "title": "Update multiple rows and columns",
        "content": "{\n \"data\": {\n   \"1\": {\n     \"1\": \"a\",\n     \"2\": \"b\",\n     \"3\": \"c\"\n   },\n   \"2\": {\n     \"1\": \"d\",\n     \"2\": \"e\",\n     \"3\": \"f\"\n  }\n}\n",
        "type": "json"
      }
    ],
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/DataController.php"
  },
  {
    "type": "delete",
    "url": "/data/:set-id",
    "title": "Truncate data",
    "version": "1.0.0",
    "name": "DataTruncate",
    "group": "Data",
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n   \"success\": true\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/DataController.php"
  },
  {
    "type": "post",
    "url": "/set/import",
    "title": "Import data (to new set)",
    "version": "1.0.0",
    "name": "ImportNew",
    "group": "Import",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the set</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sourceName",
            "optional": false,
            "description": "<p>The type of import <p class=\"valid values\">Valid values: <code>blank</code> <code>csv</code> <code>excel</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "ObjCreateect",
            "field": "sourceOptions",
            "optional": true,
            "description": "<p>Some sources have options (see Import docs) to configure the import process</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"set\": {\n   .. set object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetImportController.php"
  },
  {
    "type": "put",
    "url": "/set/import/:set-id",
    "title": "Import data (to existing set)",
    "version": "1.0.0",
    "name": "ImportOverwrite",
    "group": "Import",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "sourceName",
            "optional": false,
            "description": "<p>The type of import <p class=\"valid values\">Valid values: <code>blank</code> <code>csv</code> <code>excel</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "ObjCreateect",
            "field": "sourceOptions",
            "optional": true,
            "description": "<p>Some sources have options (see Import docs) to configure the import process</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": true,
            "description": "<p>A reference for the set</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"set\": {\n   .. set object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetImportController.php"
  },
  {
    "type": "get",
    "url": "/set/preview",
    "title": "Preview start",
    "version": "1.0.0",
    "name": "ImportPreviewStart",
    "group": "Import",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "sourceName",
            "optional": false,
            "description": "<p>The type of import <p class=\"valid values\">Valid values: <code>blank</code> <code>csv</code> <code>excel</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "sourceOptions",
            "optional": true,
            "description": "<p>Some sources have options (see Import docs) to configure the import process</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "preview",
            "optional": false,
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "preview.status",
            "optional": false,
            "description": "<p>Status of import <p class=\"valid values\">Valid values: <code>pending</code> <code>running</code> <code>complete</code> <code>error</code></p></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "preview.importTaskId",
            "optional": false,
            "description": "<p>Task ID for tracking status of preview</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "preview.setId",
            "optional": false,
            "description": "<p>Temporary set ID for preview data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"preview\": {\n   \"status\": \"pending\",\n   \"importTaskId\": \"53f22fe0c9a61d1a55942613\",\n   \"setId\": \"53f3a6eec9a61de66c942613\"\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetPreviewController.php"
  },
  {
    "type": "get",
    "url": "/set/preview/:task-id",
    "title": "Preview status",
    "version": "1.0.0",
    "name": "ImportPreviewStatus",
    "group": "Import",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "preview",
            "optional": false,
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "preview.status",
            "optional": false,
            "description": "<p>Status of import <p class=\"valid values\">Valid values: <code>pending</code> <code>running</code> <code>complete</code> <code>error</code></p></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "preview.importTaskId",
            "optional": false,
            "description": "<p>Task ID for tracking status of preview</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "preview.setId",
            "optional": false,
            "description": "<p>Temporary set ID for preview data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "preview.formOptions",
            "optional": false,
            "description": "<p>Values to populate a form to manipulate the import (i.e. excel sheet names)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"preview\": {\n   \"status\": \"pending\",\n   \"importTaskId\": \"53f22fe0c9a61d1a55942613\",\n   \"setId\": \"53f3a6eec9a61de66c942613\",\n   \"formOptions\": { .. options .. }\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetPreviewController.php"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.id",
            "optional": false,
            "description": "<p>Unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.name",
            "optional": false,
            "description": "<p>The set reference</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "set.tags",
            "optional": false,
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.sourceName",
            "optional": false,
            "description": "<p>The import type of this set</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set.sourceOptions",
            "optional": false,
            "description": "<p>The import options for this set</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.storeName",
            "optional": false,
            "description": "<p>The store for this set&#39;s data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set.storeOptions",
            "optional": false,
            "description": "<p>The store options for this set</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isRemoteStore",
            "optional": false,
            "description": "<p>Is this a remote store?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isPreview",
            "optional": false,
            "description": "<p>Is this a preview set (used for import)?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isPublic",
            "optional": false,
            "description": "<p>Is this a public set?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isSample",
            "optional": false,
            "description": "<p>Is this a sample set?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.latestVersionNumber",
            "optional": false,
            "description": "<p>What version is this set up to?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.liveVersionNumber",
            "optional": false,
            "description": "<p>What version of this set is the default?</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "set.versions",
            "optional": false,
            "description": "<p>A list of set versions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.version",
            "optional": false,
            "description": "<p>Version number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.type",
            "optional": false,
            "description": "<p>Version type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.rows",
            "optional": false,
            "description": "<p>Total rows</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.columns",
            "optional": false,
            "description": "<p>Total columns</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.versions.createdAt",
            "optional": false,
            "description": "<p>Date version created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.versions.updatedAt",
            "optional": false,
            "description": "<p>Date version updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.versions.isImporting",
            "optional": false,
            "description": "<p>Is this version importing now?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set.creator",
            "optional": false,
            "description": "<p>The User object that created the set</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.createdAt",
            "optional": false,
            "description": "<p>Created date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.updatedAt",
            "optional": false,
            "description": "<p>Updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.editable",
            "optional": false,
            "description": "<p>Whether the set is editable by the requestor</p>"
          }
        ]
      }
    },
    "group": "SetController_php",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          }
        ]
      }
    },
    "group": "SetController_php",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "type": "post",
    "url": "/set",
    "title": "Create",
    "version": "1.0.0",
    "name": "CreateSet",
    "group": "Set",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the set</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sourceName",
            "optional": false,
            "description": "<p>The type of import <p class=\"valid values\">Valid values: <code>blank</code> <code>csv</code> <code>excel</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "field": "sourceOptions",
            "optional": true,
            "description": "<p>Some sources have options (see Import docs) to configure the import process</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"set\": {\n   .. set object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "type": "delete",
    "url": "/set/:id",
    "title": "Delete",
    "version": "1.0.0",
    "name": "DeleteSet",
    "group": "Set",
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "type": "get",
    "url": "/set/:id",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetSet",
    "group": "Set",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "t",
            "optional": true,
            "description": "<p>Token to view set if isn&#39;t public</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"set\": {\n   \"id\": \"542038f2279871600e8b4567\",\n   \"name\": \"My test set\",\n   \"tags\": [],\n   \"sourceName\": \"blank\",\n   \"sourceOptions\": null,\n   \"storeName\": \"mongo\",\n   \"storeOptions\": null,\n   \"isRemoteStore\": false,\n   \"isPreview\": false,\n   \"isPublic\": false,\n   \"isSample\": false,\n   \"latestVersionNumber\": 1,\n   \"liveVersionNumber\": 1,\n   \"createdAt\": \"2014-09-22T15:57:54+01:00\",\n   \"updatedAt\": \"2014-09-22T15:57:54+01:00\",\n   \"editable\": true,\n   \"versions\": [\n     {\n       \"version\": 1,\n       \"type\": 1,\n       \"rows\": 0,\n       \"columns\": 0,\n       \"createdAt\": \"2014-09-22T15:57:54+01:00\",\n       \"updatedAt\": \"2014-09-22T15:57:54+01:00\",\n       \"isImporting\": true\n     }\n   ]\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.id",
            "optional": false,
            "description": "<p>Unique ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.name",
            "optional": false,
            "description": "<p>The set reference</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "set.tags",
            "optional": false,
            "description": "<p>Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.sourceName",
            "optional": false,
            "description": "<p>The import type of this set</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set.sourceOptions",
            "optional": false,
            "description": "<p>The import options for this set</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "set.storeName",
            "optional": false,
            "description": "<p>The store for this set&#39;s data</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set.storeOptions",
            "optional": false,
            "description": "<p>The store options for this set</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isRemoteStore",
            "optional": false,
            "description": "<p>Is this a remote store?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isPreview",
            "optional": false,
            "description": "<p>Is this a preview set (used for import)?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isPublic",
            "optional": false,
            "description": "<p>Is this a public set?</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.isSample",
            "optional": false,
            "description": "<p>Is this a sample set?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.latestVersionNumber",
            "optional": false,
            "description": "<p>What version is this set up to?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.liveVersionNumber",
            "optional": false,
            "description": "<p>What version of this set is the default?</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "field": "set.versions",
            "optional": false,
            "description": "<p>A list of set versions</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.version",
            "optional": false,
            "description": "<p>Version number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.type",
            "optional": false,
            "description": "<p>Version type</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.rows",
            "optional": false,
            "description": "<p>Total rows</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "set.versions.columns",
            "optional": false,
            "description": "<p>Total columns</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.versions.createdAt",
            "optional": false,
            "description": "<p>Date version created</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.versions.updatedAt",
            "optional": false,
            "description": "<p>Date version updated</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.versions.isImporting",
            "optional": false,
            "description": "<p>Is this version importing now?</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set.creator",
            "optional": false,
            "description": "<p>The User object that created the set</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.createdAt",
            "optional": false,
            "description": "<p>Created date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "set.updatedAt",
            "optional": false,
            "description": "<p>Updated date</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "field": "set.editable",
            "optional": false,
            "description": "<p>Whether the set is editable by the requestor</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "type": "get",
    "url": "/set",
    "title": "List",
    "version": "1.0.0",
    "name": "ListSet",
    "group": "Set",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort_by",
            "defaultValue": "updatedAt",
            "optional": true,
            "description": "<p>Sort results by given field. <p class=\"valid values\">Valid values: <code>updatedAt</code> <code>createdAt</code> <code>name</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "order",
            "defaultValue": "asc",
            "optional": true,
            "description": "<p>Order of results <p class=\"valid values\">Valid values: <code>asc</code> <code>desc</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "limit",
            "defaultValue": "50",
            "optional": true,
            "description": "<p>Maximum number of results to return per request</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "page",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Which page of results to return (coupled with limit for pagination)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "term",
            "optional": true,
            "description": "<p>Search query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "sets",
            "optional": false,
            "description": "<p>A list of matching sets</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "state",
            "optional": false,
            "description": "<p>List state</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "state.totalRecords",
            "optional": false,
            "description": "<p>The total number of matching sets for pagination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"sets\": [\n   { .. set object .. },\n   { .. set object .. }\n ],\n \"state\": {\n   \"totalRecords\": 2\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "type": "patch",
    "url": "/set/:id",
    "title": "Patch",
    "version": "1.0.0",
    "name": "PatchSet",
    "group": "Set",
    "description": "<p>All paramters are optional and get merged against existing values server side</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the set</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"set\": {\n   .. set object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "type": "put",
    "url": "/set/:id",
    "title": "Update",
    "version": "1.0.0",
    "name": "UpdateSet",
    "group": "Set",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "<p>A reference for the set</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"set\": {\n   .. set object ..\n }\n}\n",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "set",
            "optional": false,
            "description": "<p>The set object.</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/SetController.php"
  },
  {
    "type": "get",
    "url": "/chart/template/:id",
    "title": "Get",
    "version": "1.0.0",
    "name": "GetChartTemplate",
    "group": "Template",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "field": "chartTemplate",
            "optional": false,
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"chartTemplate\": {\n   \"id\": \"542038f2279871600e8b4567\",\n   \"name\": \"My template\",\n   \"templateKey\": \"my-template\",\n   \"type\": \"bar\",\n   \"listOrder\": 50,\n   \"isPublic\": true,\n   \"config\": { .. template config .. }\n   \"createdAt\": \"2014-09-22T15:57:54+01:00\",\n   \"updatedAt\": \"2014-09-22T15:57:54+01:00\"\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartTemplateController.php"
  },
  {
    "type": "get",
    "url": "/chart/template",
    "title": "List",
    "version": "1.0.0",
    "name": "ListChartTemplate",
    "group": "Template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "type",
            "defaultValue": "all",
            "optional": true,
            "description": "<p>Return templates for particular type. <p class=\"valid values\">Valid values: <code>bar</code> <code>line</code> <code>pie</code> <code>area</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "sort_by",
            "defaultValue": "name",
            "optional": true,
            "description": "<p>Sort results by given field. <p class=\"valid values\">Valid values: <code>updatedAt</code> <code>createdAt</code> <code>name</code> <code>order</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "order",
            "defaultValue": "asc",
            "optional": true,
            "description": "<p>Order of results <p class=\"valid values\">Valid values: <code>asc</code> <code>desc</code></p></p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "limit",
            "defaultValue": "50",
            "optional": true,
            "description": "<p>Maximum number of results to return per request</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "field": "page",
            "defaultValue": "1",
            "optional": true,
            "description": "<p>Which page of results to return (coupled with limit for pagination)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "term",
            "optional": true,
            "description": "<p>Search query</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "field": "chartTemplates",
            "optional": false,
            "description": "<p>A list of matching templates</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "state",
            "optional": false,
            "description": "<p>List state</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "state.totalRecords",
            "optional": false,
            "description": "<p>The total number of matching templates for pagination</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success example:",
          "content": "HTTP/1.1 200 OK\n{\n \"chartTemplates\": [\n   { .. template object .. },\n   { .. template object .. }\n ],\n \"state\": {\n   \"totalRecords\": 2\n }\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartTemplateController.php"
  }
] });