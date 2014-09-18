define({ api: [
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
            "description": "<p>The chart config (see Chart Config docs)</p>"
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
            "description": "<p>Config (see Chart Config docs)</p>"
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
    "type": "post",
    "url": "/chart",
    "title": "Create",
    "version": "1.0.0",
    "name": "CreateChart",
    "group": "Chart",
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
            "description": "<p>The chart config (see Chart Config docs)</p>"
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
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          }
        ]
      }
    },
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
            "description": "<p>Config (see Chart Config docs)</p>"
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
      }
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
            "description": "<p>The chart config (see Chart Config docs)</p>"
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
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
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
            "description": "<p>The chart config (see Chart Config docs)</p>"
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
            "field": "chart",
            "optional": false,
            "description": "<p>The chart object.</p>"
          }
        ]
      }
    },
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  }
] });