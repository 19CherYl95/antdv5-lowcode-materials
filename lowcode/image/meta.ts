import snippets from './snippets';

export default {
  snippets,
  componentName: 'Image',
  title: '图片',
  category: '数据展示',
  devMode: 'proCode',
  npm: {
    package: 'antdv5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Image',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'src',
      title: { label: '图片地址', tip: '图片地址' },
      propType: { type: 'string', isRequired: true },
    },
    {
      name: 'alt',
      title: { label: '替换文本', tip: '替换文本' },
      propType: 'string',
    },
    {
      name: 'preview',
      title: { label: '支持预览', tip: '支持预览' },
      defaultValue: true,
      propType: 'bool',
    },
    {
      name: 'fallback',
      title: { label: '失败地址', tip: '加载失败容错地址' },
      propType: 'string',
    },
    {
      name: 'width',
      title: { label: '宽度', tip: '宽度' },
      propType: 'number',
    },
    {
      name: 'height',
      title: { label: '高度', tip: '高度' },
      propType: 'number',
    },
  ],
  configure: { supports: { style: true } },
};
