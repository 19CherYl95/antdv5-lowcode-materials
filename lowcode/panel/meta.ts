import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PanelMeta: IPublicTypeComponentMetadata = {
  componentName: 'Panel',
  title: 'Panel',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'hgj-antd-v5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Collapse',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: 'Panel',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'key',
            'zh-CN': 'key',
          },
        },
        name: 'key',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                isRequired: false,
                initialValue: '',
              },
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'header',
            'zh-CN': 'header',
          },
        },
        name: 'header',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: true,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'disabled',
            'zh-CN': '@deprecate',
          },
          tip: 'disabled | @deprecated Use `collapsible="disabled"` instead',
        },
        name: 'disabled',
        description: '@deprecated Use `collapsible="disabled"` instead',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'showArrow',
            'zh-CN': 'showArrow',
          },
        },
        name: 'showArrow',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': 'prefixCls',
          },
        },
        name: 'prefixCls',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'forceRender',
            'zh-CN': 'forceRender',
          },
        },
        name: 'forceRender',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'id',
            'zh-CN': 'id',
          },
        },
        name: 'id',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'extra',
            'zh-CN': 'extra',
          },
        },
        name: 'extra',
        setter: {
          componentName: 'SlotSetter',
          props: {
            mode: 'node',
          },
          isRequired: false,
          initialValue: {
            type: 'JSSlot',
            value: [],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'collapsible',
            'zh-CN': 'collapsible',
          },
        },
        name: 'collapsible',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'icon',
                value: 'icon',
              },
              {
                label: 'disabled',
                value: 'disabled',
              },
              {
                label: 'header',
                value: 'header',
              },
            ],
            options: [
              {
                label: 'icon',
                value: 'icon',
              },
              {
                label: 'disabled',
                value: 'disabled',
              },
              {
                label: 'header',
                value: 'header',
              },
            ],
          },
          initialValue: 'icon',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'ref',
            'zh-CN': 'ref',
          },
        },
        name: 'ref',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter',
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
            ],
          },
        },
      },
    ],
    supports: {
      className: true,
      style: true,
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: 'Panel',
    screenshot: '',
    schema: {
      componentName: 'Panel',
      props: {},
    },
  },
];

export default {
  ...PanelMeta,
  snippets,
};
