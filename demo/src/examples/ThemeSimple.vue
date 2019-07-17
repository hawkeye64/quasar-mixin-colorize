<template>
  <div class="q-pa-md row justify-around">
    <my-component
      :enable-theme="enableTheme"
      :theme="theme"
      class="text-center"
    >
      <div class="text-h4">Some Text</div>
    </my-component>
  </div>
</template>

<script>
import Vue from 'vue'
import { Colorize, Theme } from 'quasar-mixin-colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize, Theme],

  render (h) {
    let colors = new Map(), color, bgColor
    let updateColors = this.useDefaultTheme
    if (this.enableTheme === true) {
      color = 'color'
      bgColor = 'bgColor'
      colors = this.getThemeColors([color, bgColor])
      updateColors = this.setBothColors
    }

    return h('div', updateColors(colors.get(color), colors.get(bgColor), {
      style: {
        width: '200px',
        height: '200px'
      }
    }), [
      this.$slots.default
    ])
  }
})

export default {
  components: {
    MyComponent
  },

  data () {
    return {
      enableTheme: true,
      theme: {
        color: 'grey-2',
        bgColor: 'blue-grey-8'
      }
    }
  }
}
</script>
