export const formItems = [
  {
    tag: 'radio',
    itemAttrs: {
      label: '优惠券类别',
      rules: [{ required: true, message: '请选择优惠券类别', trigger: 'blur' }]
    },
    attrs: {
      key: 'couponType',
      value: 'manjian',
      options: [
        { value: 'manjian', label: '满减券' },
        { value: 'xianjin', label: '现金券' }
      ],
      placeholder: '请输入类别'
    }
  },
  {
    tag: 'radio',
    itemAttrs: {
      label: '优惠券类型'
    },
    attrs: {
      key: 'couponDiscountType',
      value: 'shangpin',
      options: [
        { value: 'shangpin', label: '商品券', disabled: true },
        { value: 'gongchang', label: '工厂券' }
      ],
      placeholder: '请输入优惠券类型'
    },
    getAttrs (form) {
      // form.couponDiscountType = form.couponType === 'xianjin' ? 'gongchang' : 'shangpin'
      return {
        options: [
          { value: 'shangpin', label: '商品券', disabled: form.couponType === 'xianjin' },
          { value: 'gongchang', label: '工厂券', disabled: form.couponType === 'manjian' }
        ],
        value: form.couponType === 'xianjin' ? 'gongchang' : 'shangpin'
      }
    }
  },
  {
    tag: 'checkbox',
    itemAttrs: {
      label: '促销类型'
    },
    attrs: {
      key: 'couponPromotionType',
      value: false,
      label: '促销券 (仅创建工厂特价促销可用)'
    },
    getAttrs (form) {
      return {
        disabled: form.couponType === 'manjian',
        value: form.couponType === 'xianjin'
      }
    }
  },
  {
    tag: 'input',
    itemAttrs: {
      label: '优惠券名称',
      rules: [{ required: true, type: 'string', message: '优惠券名称不能为空', trigger: 'blur' }]
    },
    attrs: {
      key: 'couponName',
      placeholder: '请输入优惠券名称'
    }
  },
  {
    tag: 'select',
    itemAttrs: {
      label: '兴趣'
    },
    attrs: {
      key: 'hobby',
      value: '2',
      placeholder: '请输入兴趣',
      options: [
        { value: '1', label: '吃饭' },
        { value: '2', label: '睡觉' },
        { value: '3', label: '打豆豆' }
      ]
    }
  },
  {
    tag: 'date',
    itemAttrs: {
      label: '日期'
    },
    attrs: {
      key: 'date',
      value: '2018/11/12'
    }
  },
  {
    tag: 'checkbox-group',
    itemAttrs: {
      label: '复选框组'
    },
    attrs: {
      value: ['1'],
      key: 'checkboxGroup',
      options: [
        { value: '1', label: '复选框1' },
        { value: '2', label: '复选框2' },
        { value: '3', label: '复选框3' }
      ]
    }
  },
  {
    tag: 'cascader',
    itemAttrs: {
      label: '级联选择器'
    },
    attrs: {
      key: 'cascader',
      value: [],
      options: []
    }
  },
  {
    tag: 'checkbox',
    itemAttrs: {
      label: '复选框'
    },
    attrs: {
      key: 'checkbox',
      value: true,
      label: '复选框'
    }
  },
  {
    itemAttrs: {
      label: '测试render'
    },
    render (h, params) {
      console.log(this)
      return <Input vModel={params.form.a} placeholder='Enter something...'></Input>
    }
  }
]
