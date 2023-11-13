
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const DividerMeta: IPublicTypeComponentMetadata = {
  "componentName": "Divider",
  "title": "Divider",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-antd-materials",
    "version": "0.1.0",
    "exportName": "Divider",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "prefixCls",
            "zh-CN": "prefixCls"
          }
        },
        "name": "prefixCls",
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
            "en-US": "type",
            "zh-CN": "type"
          }
        },
        "name": "type",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              }
            ],
            "options": [
              {
                "label": "vertical",
                "value": "vertical"
              },
              {
                "label": "horizontal",
                "value": "horizontal"
              }
            ]
          },
          "initialValue": "vertical"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "orientation",
            "zh-CN": "orientation"
          }
        },
        "name": "orientation",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "center",
                "value": "center"
              }
            ],
            "options": [
              {
                "label": "left",
                "value": "left"
              },
              {
                "label": "right",
                "value": "right"
              },
              {
                "label": "center",
                "value": "center"
              }
            ]
          },
          "initialValue": "left"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "orientationMargin",
            "zh-CN": "orientationMargin"
          }
        },
        "name": "orientationMargin",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              },
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rootClassName",
            "zh-CN": "rootClassName"
          }
        },
        "name": "rootClassName",
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
            "en-US": "dashed",
            "zh-CN": "dashed"
          }
        },
        "name": "dashed",
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
            "en-US": "plain",
            "zh-CN": "plain"
          }
        },
        "name": "plain",
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
    "title": "Divider",
    "screenshot": "",
    "schema": {
      "componentName": "Divider",
      "props": {}
    }
  }
];

export default {
  ...DividerMeta,
  snippets
};
