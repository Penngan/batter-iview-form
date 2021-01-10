<template>
  <Select v-bind="$attrs" :value="$attrs.value" v-on="$listeners">
    <Option
      v-for="item in $attrs.options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >{{ item. label }}</Option>
  </Select>
</template>

<script>
import { Select, Option } from 'view-design'
export default {
  components: {
    Select,
    Option
  }
}
</script>

<style>

</style>
