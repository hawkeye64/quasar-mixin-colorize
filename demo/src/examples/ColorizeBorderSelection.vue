<template>
  <div class="q-pa-md">
    <div class="q-pb-md q-gutter-md row justify-around">
      <q-input
        filled
        v-model="borderColor"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="borderColor" />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>
    <q-separator />
    <div class="q-pa-md row justify-around">
      <my-component
        :border-color="borderColor"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Colorize } from 'quasar-mixin-colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize],

  props: {
    borderColor: String
  },

  render (h) {
    return h('div', this.setBorderColor(this.borderColor, {
      style: {
        width: '200px',
        height: '200px',
        borderStyle: 'solid',
        borderWidth: '10px'
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
      borderColor: 'purple-14'
    }
  }
}
</script>
