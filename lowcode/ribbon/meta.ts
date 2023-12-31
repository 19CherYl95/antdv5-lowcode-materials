import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const RibbonMeta: IPublicTypeComponentMetadata = {
  componentName: 'Ribbon',
  title: 'Ribbon',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'hgj-antd-v5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Badge',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: 'Ribbon',
  },
  configure: {
    props: [
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
            'en-US': 'text',
            'zh-CN': 'text',
          },
        },
        name: 'text',
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
            'en-US': 'color',
            'zh-CN': 'color',
          },
        },
        name: 'color',
        setter: {
          componentName: 'MixedSetter',
          isRequired: false,
          props: {},
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'placement',
            'zh-CN': 'placement',
          },
        },
        name: 'placement',
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            dataSource: [
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
            options: [
              {
                label: 'start',
                value: 'start',
              },
              {
                label: 'end',
                value: 'end',
              },
            ],
          },
          initialValue: 'start',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'rootClassName',
            'zh-CN': 'rootClassName',
          },
        },
        name: 'rootClassName',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
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
    title: 'Ribbon',
    screenshot: '',
    schema: {
      componentName: 'Ribbon',
      props: {},
    },
  },
];

export default {
  ...RibbonMeta,
  snippets,
};
