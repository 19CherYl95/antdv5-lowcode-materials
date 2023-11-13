
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const GroupMeta: IPublicTypeComponentMetadata = {
  "componentName": "Group",
  "title": "Group",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "lowcode-antd-materials",
    "version": "0.1.0",
    "exportName": "Avatar",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": "Group"
  },
  "configure": {
    "props": [
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
            "en-US": "maxCount",
            "zh-CN": "maxCount"
          }
        },
        "name": "maxCount",
        "setter": {
          "componentName": "NumberSetter",
          "isRequired": false,
          "initialValue": 0
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "maxStyle",
            "zh-CN": "maxStyle"
          }
        },
        "name": "maxStyle",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "maxPopoverPlacement",
            "zh-CN": "maxPopoverPlacement"
          }
        },
        "name": "maxPopoverPlacement",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "bottom",
                "value": "bottom"
              }
            ],
            "options": [
              {
                "label": "top",
                "value": "top"
              },
              {
                "label": "bottom",
                "value": "bottom"
              }
            ]
          },
          "initialValue": "top"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "maxPopoverTrigger",
            "zh-CN": "maxPopoverTrigger"
          }
        },
        "name": "maxPopoverTrigger",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              },
              {
                "label": "focus",
                "value": "focus"
              }
            ],
            "options": [
              {
                "label": "click",
                "value": "click"
              },
              {
                "label": "hover",
                "value": "hover"
              },
              {
                "label": "focus",
                "value": "focus"
              }
            ]
          },
          "initialValue": "click"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "size"
          }
        },
        "name": "size",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "NumberSetter",
                "isRequired": false,
                "initialValue": 0
              },
              {
                "componentName": "ObjectSetter",
                "props": {
                  "config": {
                    "extraSetter": {
                      "componentName": "MixedSetter",
                      "isRequired": false,
                      "props": {}
                    }
                  }
                },
                "isRequired": false,
                "initialValue": {}
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "default",
                      "value": "default"
                    }
                  ],
                  "options": [
                    {
                      "label": "large",
                      "value": "large"
                    },
                    {
                      "label": "small",
                      "value": "small"
                    },
                    {
                      "label": "default",
                      "value": "default"
                    }
                  ]
                },
                "initialValue": "large"
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "shape",
            "zh-CN": "shape"
          }
        },
        "name": "shape",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "square",
                "value": "square"
              }
            ],
            "options": [
              {
                "label": "circle",
                "value": "circle"
              },
              {
                "label": "square",
                "value": "square"
              }
            ]
          },
          "initialValue": "circle"
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
    "title": "Group",
    "screenshot": "",
    "schema": {
      "componentName": "Group",
      "props": {}
    }
  }
];

export default {
  ...GroupMeta,
  snippets
};
