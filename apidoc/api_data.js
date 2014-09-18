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
    "type": "post",
    "url": "/chart",
    "title": "Create a new chart",
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
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "get",
    "url": "/chart/:id",
    "title": "Get a chart",
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
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "get",
    "url": "/chart",
    "title": "List charts",
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
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "patch",
    "url": "/chart/:id",
    "title": "Patch an existing chart",
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
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  },
  {
    "type": "put",
    "url": "/chart/:id",
    "title": "Update an existing chart",
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
    "filename": "vendor/chartblocks/data-server/module/DataServerModule/src/DataServerModule/Controller/ChartController.php"
  }
] });