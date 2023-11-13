export default {
  componentName: 'Descriptions.Item',
  title: '描述列表项',
  devMode: 'proCode',
  npm: {
    package: 'antdv5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Descriptions.Item',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'key',
      title: {
        label: 'key',
        tip: 'key',
      },
      propType: 'string',
    },
    {
      name: 'tab',
      title: {
        label: '标题',
        tip: '标题',
      },
      propType: 'string',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: { style: true },
  },
};
