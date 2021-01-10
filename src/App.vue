<template>
  <div id="app">
    <BaseForm :form-items="formItems" :label-width="100" />
  </div>
</template>

<script>
import BaseForm from './components/baseForm'
import { formItems } from './formItems'
export default {
  name: 'App',
  components: {
    BaseForm
  },
  data () {
    return {
      formItems
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
