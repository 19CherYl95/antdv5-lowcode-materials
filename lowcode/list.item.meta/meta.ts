export default {
  componentName: 'List.Item.Meta',
  title: '列表项内容',
  category: '',
  devMode: 'proCode',
  npm: {
    package: 'antdv5-lowcode-materials',
    version: '0.1.0',
    exportName: 'List',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: 'Item.Meta',
  },
  props: [
    {
      name: 'avatar',
      title: {
        label: '列表元素图标',
        tip: '列表元素的图标',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'title',
      title: {
        label: '列表元素标题',
        tip: '列表元素的标题',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'avatar',
      title: {
        label: '列表元素描述内容',
        tip: '列表元素的描述内容',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
  ],
  configure: {
    component: {
      nestingRule: {
        parentWhitelist: ['List'],
      },
    },
  },
};
