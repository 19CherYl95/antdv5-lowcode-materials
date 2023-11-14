import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Link',
  title: '链接',
  category: '基础',
  devMode: 'proCode',
  npm: {
    package: 'hgj-antd-v5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Typography',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: 'Link',
  },
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      defaultValue: '',
      supportVariable: true,
    },
    {
      name: 'href',
      title: { label: '跳转链接', tip: '跳转链接' },
      propType: 'string',
      defaultValue: '',
    },
    {
      name: 'target',
      title: { label: '跳转位置', tip: '在何处显示链接的资源' },
      propType: {
        type: 'oneOf',
        value: ['_self', '_blank', '_parent', '_top'],
      },
      defaultValue: '_self',
    },
  ],
  configure: { supports: { style: true } },
};
