export default {
  props: {
    form: Object, // form
    row: Object, // 当前行数据
    index: Number, // 当前行index
    render: Function,
    this: Object
  },
  render (h) {
    const params = {
      row: this.row,
      form: this.form,
      index: this.index
    }
    // const params = {
    //   row: ctx.props.row,
    //   form: ctx.props.form,
    //   index: ctx.props.index
    // }
    return this.render(h, params)
  }
}
