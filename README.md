# quasar-colorize
A Vue mix-in specifically for Quasar Framework to handle color and background-color rendering

# Install
```bash
yarn add quasar-mixin-colorize

# or

npm install quasar-mixin-colorize
```

# Usage
```js
import Colorize from 'quasar-mixin-colorize'

export default Vue.extend({
  name: 'my-component',

  mixins: [Colorize],

  ...

  render (h) {
    return h('div', this.setBothColors(this.color, this.backgroundColor, {
        staticClass: 'my-static-class-1',
        class: {
          'droppable': this.dragOver
        },
        style: {
          marginRight: this.scrollWidth + 'px'
        }
    }))
  }
})
```

The above example is an example. Basically, if color and backgroundColor are not set, then nothing will happen. The third parameter, takes and object and the function returns the same object, with style modifications.

Another use case might be where you want to use the values provided by colorize to set your own variables. See this example of how [QRibbon](https://github.com/quasarframework/app-extension-qribbon) handles it (simplified version for illustrative purposes).

```js
// Import all Quasar's colors as CSS vars so we can use e.g --q-color-red-5
import 'quasar-mixin-colorize/src/qColors.styl'

import Colorize, { calculateColor } from 'quasar-mixin-colorize'

export default Vue.extend({
  name: 'my-component',

  mixins: [Colorize],
  
  props: {
    backgroundColor: {
      type: String,
      default: 'primary' // any color
    }
  },
                    
  computed: {
    styles () {
      let style = {}
      style['--qribbon-text-color'] = calculateColor(this.color, 'white')
      style['--qribbon-background-color'] = calculateColor(this.backgroundColor) // Notice default is against the prop in this instance
      return style
    }
  },

  ...

  render (h) {
    return h('div', {
      style: this.styles
    }, [
      slot(this, 'default')
    ])
  }
})
```

# Info

This mix-in only adds a `color` property to your component. Not all components need a background-color property. If all you need is `color`, then instead of calling `this.setBothColors`, then just call `this.setTextColor`.


So, what can be in a color? Any CSS color or one from the [Quasar Color Palette](https://quasar.dev/style/color-palette#Color-List). And, by CSS color, it can be a named css color, like ghostwhite, a hex value (#c0c0c0), or rgb/rgba/hsl/hsla (rgb(120, 12, 152)). Pretty much whatever you can throw at it as long as it is valid. **Even** CSS vars will work!

# Vue Properties
| Vue&nbsp;Property | Type	| Description |
|---|---|---|
| color | String | Any css color or from the Quasar Color Palette |

# Vue Methods
| Vue&nbsp;method | Args	| Description |
|---|---|---|
| setTextColor | color, {} | The color and object containing `style` |
| setBackgroundColor | background-color, {} | The background-color and object containing `style` |
| setBothColors | color, bgColor, {} | The color, background-color and object containing `style` |

# Exported Functions
| Vue&nbsp;method | Args	| Description |
|---|---|---|
| isNamedCssColor | color | Returns true if passed in color is a css named color |
| isCssColor | color | Returns true if passed in color is a named color, hex color or rgb/rgba/hsl/hsla color |
| isCssVar | color | Returns true if passed in color is a CSS variable starting with '--' |
| calculateColor | color, defaultColor = 'black' | Check if a color is a standard CSS color or a quasar color |
| makeQuasarColorVar | color, defaultColor | Generate a CSS variable definition based on the quasar color or existing variable passed in i.e `var(--q-color-red-5, 'default')` |

# Donate
If you appreciate the work that went into this mix-in, please consider [donating to Quasar](https://donate.quasar.dev).
