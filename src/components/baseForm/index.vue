<template>
  <Form :model="form" v-bind="$attrs" v-on="$listeners">
    <template v-for="(item, index) in _formItems">
      <FormItem
        :key="index + item.attrs.key"
        :prop="item.attrs.key"
        :label="item.itemAttrs.label"
        v-bind="item.itemAttrs || {}"
      >
        <component
          :is="item.component"
          v-bind="item.attrs || {}"
          v-if="!item.render"
          v-model="form[item.attrs.key]"
          v-on="item.listeners || {}"
        />
        <Rander
          v-else
          :form="form"
          :row="item"
          :index="index"
          :render="item.render.bind(1)"
        />
      </FormItem>
    </template>
    <FormItem>
      <Button type="success" long @click="handleSubmit">SUBMIT</Button>
    </FormItem>
  </Form>
</template>

<script>
import { Form, FormItem, DatePicker, Input, Cascader, Button } from 'view-design'
import { basic } from './basic'
import BaseSelect from '../baseSelect'
import BaseCheckboxGroup from '../baseCheckboxGroup'
import BaseRadioGroup from '../baseRadioGroup'
import BaseCheckbox from '../baseCheckbox'
import Rander from './render'
export default {
  name: 'BaseForm',
  components: {
    Form,
    FormItem,
    DatePicker,
    Input,
    Cascader,
    Rander,
    BaseSelect,
    BaseCheckbox,
    BaseCheckboxGroup,
    BaseRadioGroup,
    Button
  },
  props: {
    formItems: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      form: {}
    }
  },
  computed: {
    _formItems () {
      const _formItems = this.formItems.map(formItem => {
        const item = { ...formItem }
        const tag = formItem.tag || 'input'
        item.component = basic[tag].component
        // 合并属性
        item.attrs = Object.assign({}, basic[tag].attrs, formItem.attrs)
        // 获取动态 Attributes
        if (item.getAttrs) {
          item.attrs = Object.assign(item.attrs, item.getAttrs(this.form))
          if (item.getAttrs(this.form) && item.getAttrs(this.form).value !== undefined && item.getAttrs(this.form).value !== null) {
            this.form[item.attrs.key] = item.getAttrs(this.form).value
          }
        }
        // 条件渲染
        item._ifRender = item.ifRender ? item.ifRender(this.form) : true
        return item
      })
      // console.log('_formItems', _formItems)
      return _formItems
    }
  },
  watch: {
    formItems: {
      handler () {
        this.handlerForm()
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    handlerForm () {
      this.formItems.forEach(item => {
        if (!item.attrs || !item.attrs.key) return // 跳过没有key的属性(插槽)
        this.$set(
          this.form,
          item.attrs.key,
          item.attrs.value ? item.attrs.value : ''
        )
      })
    },
    handleSubmit () {
      console.log(this.form)
    }
  }
}
</script>
