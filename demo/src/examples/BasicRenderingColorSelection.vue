<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row justify-around">
      <q-input
        filled
        v-model="color"
        class="my-input"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="color" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <q-separator />
    <div class="row justify-around">
      <my-component
        :color="color"
      >
        <div class="text-h4">Some Text</div>
      </my-component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Colorize from 'quasar-mixin-colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize],

  render (h) {
    return h('div', this.setTextColor(this.color, {
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
      color: '#FF0000'
    }
  },

  methods: {
    selectColor () {
    }
  }
}
</script>
