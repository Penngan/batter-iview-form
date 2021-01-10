<template>
  <CheckboxGroup v-bind="$attrs" :value="$attrs.value" v-on="$listeners">
    <Checkbox
      v-for="item in $attrs.options"
      :key="item.value || item.label"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </Checkbox>
  </CheckboxGroup>
</template>

<script>
import { CheckboxGroup, Checkbox } from 'view-design'
export default {
  components: {
    CheckboxGroup,
    Checkbox
  },
  data () {
    return {
    }
  },
  mounted () {
    // console.log(this.$attrs)
    // console.log(this.$listeners)
  }
}
</script>

<style>

</style>
