import Vue from 'vue'

// Mixins
import { Colorize } from 'quasar-mixin-colorize'

// Utils
import slot from 'quasar/src/utils/slot.js'

// Styles
import 'quasar-mixin-colorize/src/qColors.styl'

export default Vue.extend({
  data () {
    return {
      userColor: ''
    }
  },

  props: {
    bgColor: String
  },

  mixins: [
    Colorize
  ],

  render (h) {
    return h('div', this.setBothColors(this.color, this.bgColor, {
      staticClass: 'my-static-class-1',
      class: {
        'droppable': this.dragOver
      },
      style: {
        width: '100px',
        height: '100px'
      }
    }), [
      slot(this, 'default')
    ])
  }
})
