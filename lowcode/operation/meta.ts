
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const OperationMeta: IPublicTypeComponentMetadata = {
  "componentName": "Operation",
  "title": "Operation",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-antd-materials",
    "version": "0.1.0",
    "exportName": "Transfer",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": "Operation"
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "leftArrowText",
            "zh-CN": "leftArrowText"
          }
        },
        "name": "leftArrowText",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rightArrowText",
            "zh-CN": "rightArrowText"
          }
        },
        "name": "rightArrowText",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "moveToLeft",
            "zh-CN": "moveToLeft"
          }
        },
        "name": "moveToLeft",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "moveToRight",
            "zh-CN": "moveToRight"
          }
        },
        "name": "moveToRight",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "leftActive",
            "zh-CN": "leftActive"
          }
        },
        "name": "leftActive",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rightActive",
            "zh-CN": "rightActive"
          }
        },
        "name": "rightActive",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disabled",
            "zh-CN": "disabled"
          }
        },
        "name": "disabled",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "direction",
            "zh-CN": "direction"
          }
        },
        "name": "direction",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "rtl",
                "value": "rtl"
              },
              {
                "label": "ltr",
                "value": "ltr"
              }
            ],
            "options": [
              {
                "label": "rtl",
                "value": "rtl"
              },
              {
                "label": "ltr",
                "value": "ltr"
              }
            ]
          },
          "initialValue": "rtl"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "oneWay",
            "zh-CN": "oneWay"
          }
        },
        "name": "oneWay",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      }
    ],
    "supports": {
      "className": true,
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Operation",
    "screenshot": "",
    "schema": {
      "componentName": "Operation",
      "props": {}
    }
  }
];

export default {
  ...OperationMeta,
  snippets
};
