import snippets from './snippets';

export default {
  snippets,
  componentName: 'Affix',
  title: '固钉',
  category: '导航',
  devMode: 'proCode',
  npm: {
    package: 'hgj-antd-v5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Affix',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'offsetBottom',
      title: { label: '底部触发距离', tip: '距离窗口底部达到指定偏移量后触发' },
      propType: 'number',
    },
    {
      name: 'offsetTop',
      title: { label: '顶部触发距离', tip: '距离窗口顶部达到指定偏移量后触发' },
      propType: 'number',
    },
    {
      name: 'target',
      title: {
        label: '获取触发元素',
        tip: '设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      },
      propType: 'func',
    },
    {
      name: 'onChange',
      title: { label: '监听状态改变', tip: '固定状态改变时触发的回调函数' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(affixed,${extParams}){\n// 固定状态变更回调函数\nconsole.log('onChange', affixed);}",
        },
      ],
    },
  },
};
