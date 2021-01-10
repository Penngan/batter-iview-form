<template>
  <RadioGroup v-bind="$attrs" :value="$attrs.value" v-on="$listeners">
    <Radio
      v-for="item in $attrs.options"
      :key="item.value"
      :label="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </Radio>
  </RadioGroup>
</template>

<script>
import { RadioGroup, Radio } from 'view-design'
export default {
  components: {
    RadioGroup,
    Radio
  }
}
</script>
