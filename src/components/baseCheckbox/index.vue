<template>
  <Checkbox :value="$attrs.value" :disabled="$attrs.disabled">{{ $attrs.label }}</Checkbox>
</template>

<script>
import { Checkbox } from 'view-design'
export default {
  components: { Checkbox }
}
</script>
