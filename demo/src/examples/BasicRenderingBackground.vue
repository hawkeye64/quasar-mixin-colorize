<template>
  <div class="row justify-around">
    <my-component
      :bg-color="bgColor"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Colorize from 'quasar-mixin-colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize],

  props: {
    // color prop is added by colorize mix-in
    // background-color is optional and needs to be added if needed
    bgColor: String
  },

  data () {
    return {
    }
  },

  render (h) {
    return h('div', this.setBackgroundColor(this.bgColor, {
      style: {
        width: '200px',
        height: '200px'
      }
    }))
  }
})

export default {
  components: {
    MyComponent
  },

  data () {
    return {
      bgColor: '#FF0000'
    }
  }
}
</script>
