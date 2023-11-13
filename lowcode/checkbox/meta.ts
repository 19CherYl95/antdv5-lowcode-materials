import snippets from './snippets';

export default {
  snippets,
  componentName: 'Checkbox',
  title: '多选框',
  category: '表单',
  devMode: 'proCode',
  npm: {
    package: 'antdv5-lowcode-materials',
    version: '0.1.0',
    exportName: 'Checkbox',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true,
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'checked',
      title: { label: '当前值', tip: '指定当前是否选中' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'defaultChecked',
      title: { label: '默认值', tip: '初始是否选中' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'indeterminate',
      title: { label: '不确定状态', tip: 'indeterminate状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'onChange',
      title: { label: '变化时回调函数', tip: '变化时回调函数' },
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
            "onChange(event,${extParams}){\n// 变化时回调函数\nconsole.log('onChange', event);}",
        },
      ],
    },
  },
};
