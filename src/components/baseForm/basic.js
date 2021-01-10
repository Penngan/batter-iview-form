// 所以组件继承自BASIC，建立映射关系
export const basic = {
  input: {
    component: 'Input',
    attrs: {
      placeholder: '请输入',
      clearable: true
    }
  },
  select: {
    component: 'base-select', // 自定义组件,为了在el-select添加options能够生成el-options节点
    attrs: {
      placeholder: '请选择',
      clearable: true
    }
  },
  date: {
    component: 'DatePicker',
    attrs: {
      placeholder: '选择日期',
      clearable: true,
      type: 'date',
      format: 'yyyy/MM/dd',
      'value-format': 'yyyy/MM/dd'
    }
  },
  radio: {
    component: 'base-radio-group', // 自定义组件,为了在el-radio-group添加options能够生成el-radio节点
    value: [],
    attrs: {
      placeholder: '选择'
    }
  },
  checkbox: {
    component: 'base-checkbox'
  },
  'checkbox-group': {
    component: 'base-checkbox-group' // 同上
  },
  cascader: {
    component: 'Cascader',
    attrs: {
      placeholder: '请选择',
      clearable: true
    }
  },
  slider: {
    component: 'Slider'
  },
  switch: {
    component: 'Switch'
  }
}
