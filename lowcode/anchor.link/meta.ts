import snippets from './snippets';

export default {
  snippets,
  componentName: 'Anchor.Link',
  title: '锚点链接',
  category: '其他',
  devMode: 'proCode',
  npm: {
    package: 'hgj-antd-v5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Anchor',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: 'Link',
  },
  props: [
    {
      name: 'href',
      title: { label: '锚点链接', tip: '锚点链接' },
      propType: 'string',
    },
    {
      name: 'target',
      title: {
        label: 'target',
        tip: '该属性指定在何处显示链接的资源',
      },
      propType: 'string',
    },
    {
      name: 'title',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
    },
  ],
  configure: { supports: { style: true } },
};
