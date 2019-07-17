<template>
  <div class="q-pa-md">
    <div class="q-pb-md q-gutter-md row justify-around">
      <q-toggle
        class="col-12"
        v-model="enableTheme"
        label="Enable themes"
      />
      <q-select
        outlined
        dense
        emit-value
        map-options
        label="Change theme"
        v-model="theme"
        :options="themesList"
        :disable="enableTheme !== true"
        class="col-12"
      />
    </div>
    <q-separator />
    <div class="q-pa-md row justify-around">
      <my-component
        :enable-theme="enableTheme"
        :theme="theme"
        class="text-center"
      >
        <div class="text-h4">Quasar Components</div>
      </my-component>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Colorize, Theme } from 'quasar-mixin-colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize, Theme],

  data () {
    return {
      radio: 'line',
      checkbox: true,
      knob: 70
    }
  },

  methods: {
    __renderRadio (h, type, label) {
      let colors = new Map(), color, bgColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'color'
        bgColor = 'bgColor'
        colors = this.getThemeColors([color, bgColor])
        updateColors = this.setBothColors
      }

      return h('q-radio', updateColors(colors.get(color), colors.get(bgColor), {
        props: {
          value: this.radio,
          val: type,
          label: label,
          dark: (this.enableTheme === true && this.theme && 'color' in this.theme),
          color: this.enableTheme === true && this.theme && 'color' in this.theme ? this.theme.color : void 0
        },
        on: {
          'input': (v) => { this.radio = v }
        }
      }))
    },

    __renderCheckbox (h) {
      let colors = new Map(), color, bgColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'color'
        bgColor = 'bgColor'
        colors = this.getThemeColors([color, bgColor])
        updateColors = this.setBothColors
      }

      return h('q-checkbox', updateColors(colors.get(color), colors.get(bgColor), {
        props: {
          value: this.checkbox,
          dark: (this.enableTheme === true && this.theme && 'color' in this.theme),
          color: this.enableTheme === true && this.theme && 'color' in this.theme ? this.theme.color : void 0
        },
        on: {
          'input': (v) => { this.checkbox = v }
        }
      }))
    },

    __renderKnob (h) {
      let colors = new Map(), color, bgColor
      let updateColors = this.useDefaultTheme
      if (this.enableTheme === true) {
        color = 'color'
        bgColor = 'bgColor'
        colors = this.getThemeColors([color, bgColor])
        updateColors = this.setBothColors
      }

      return h('q-knob', updateColors(colors.get(color), colors.get(bgColor), {
        props: {
          value: this.knob
        },
        on: {
          'input': (v) => { this.knob = v }
        }
      }))
    }
  },

  render (h) {
    const slot = this.$slots.default

    let colors = new Map(), color, bgColor
    let updateColors = this.useDefaultTheme
    if (this.enableTheme === true) {
      color = 'color'
      bgColor = 'bgColor'
      colors = this.getThemeColors([color, bgColor])
      updateColors = this.setBothColors
    }

    return h('div', updateColors(colors.get(color), colors.get(bgColor), {
      staticClass: 'q-pa-md',
      style: {
        width: '100%'
      }
    }), [
      slot || '',
      this.__renderRadio(h, 'line', 'Line'),
      this.__renderRadio(h, 'rect', 'Rect'),
      this.__renderCheckbox(h),
      this.__renderKnob(h)
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
      theme: void 0,
      themes: [
        {
          name: 'Default'
        },
        {
          name: 'Dark',
          color: 'blue-grey-2',
          bgColor: 'blue-grey-8'
        },
        {
          name: 'Teal',
          color: 'teal-2',
          bgColor: 'teal-8'
        },
        {
          name: 'Brown',
          color: 'brown-2',
          bgColor: 'brown-8'
        },
        {
          name: 'Deep Purple',
          color: 'deep-purple-2',
          bgColor: 'deep-purple-8'
        },
        {
          name: 'Indigo',
          color: 'grey-2',
          bgColor: 'indigo-8'
        },
        {
          name: 'Blue',
          color: 'blue-2',
          bgColor: 'blue-8'
        }
      ]
    }
  },

  computed: {
    themesList () {
      const list = []
      this.themes.forEach((theme) => {
        list.push({
          label: theme.name,
          value: { ...theme }
        })
      })
      return list
    }
  }
}
</script>
