import snippets from './snippets';

export default {
  snippets,
  componentName: 'Empty',
  title: '空状态',
  category: '数据展示',
  devMode: 'proCode',
  npm: {
    package: 'hgj-antd-v5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Empty',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'description',
      title: { label: '内容描述', tip: '自定义描述内容' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    // {
    //   name: 'imageStyle',
    //   title: { label: '图片样式', tip: '图片样式' },
    //   propType: 'object',
    // },
    {
      name: 'image',
      title: {
        label: '图片地址',
        tip: '设置显示图片，为string时表示自定义图片地址。',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
  ],
  configure: { supports: { style: true } },
};
