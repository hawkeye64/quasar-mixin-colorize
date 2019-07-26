Colorize & Theme
===

Colorize and Theme are Vue Mix-ins for components created for Quasar Framework. They are only for components that use a `render` function. They do not work with template formats.

# Features

Allows you to "skin" your component with customized text and background colors. You can use any color from the [Quasar Color Palette](https://quasar.dev/style/color-palette#Color-List), any # color (ex: `#c0c0c0`), rgb/rgba/hsl/hsla color (ex: `rgb(255,0,0)`), any css named colors (ex: `ghostwhite`) or any Quasar colors from css var (ex: `--q-color-red-10`). This is a lot of choices!

# Install
To add this mix-in to your Quasar application, run the following (in your Quasar app folder):

```bash
yarn add quasar-mixin-colorize

# or

npm install -S quasar-mixin-colorize
```

# Uninstall
To remove this mix-in from your Quasar application, run the following (in your Quasar app folder):

```bash
yarn remove quasar-mixin-colorize

# or

npm remove -S quasar-mixin-colorize
```

# Examples
Examples with code can be found [here](https://hawkeye64.github.io/quasar-mixin-colorize/examples).

# Demo Project (source)
Source for this application can be found [here](https://github.com/hawkeye64/quasar-mixin-colorize/tree/master/demo).

# Simple Examples

## Colorize

### Use Any Color Definition

```js
import Vue from 'vue'
import { Colorize } from 'quasar-mixin-colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize],

  props: {
    // color prop is added by colorize mix-in
    // background-color is optional and needs to be added if needed
    bgColor: String
  },

  render (h) {
    return h('div', this.setBothColors(this.color, this.bgColor, {
      style: {
        width: '200px',
        height: '200px'
      }
    }), [
      this.$slots.default
    ])
  }
})
```

### Use CSS Vars

```js
// Import all Quasar's colors as CSS vars so we can use e.g --q-color-red-5
import 'quasar-mixin-colorize/src/qColors.styl'

import { Colorize, calculateColor } from 'quasar-mixin-colorize'

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

## Theme

When using the Theme mix-in, two properties are added to your component: `theme` (Object) and `enableTheme` (Boolean). It also has two functions: `useDefaultTheme` and `getThemeColors` (see Theme API below for more details).

A `theme` object contains a definition of a theme. There are many ways you can handle a theme. You can keep your pre-defined themes in an array of objects or in a JavaScript file that loads at run-time, or in individual theme files that are loaded on demand when the theme needs to be changed. This is entirely up to you, the developer. In the examples, we will be storing the themes in a javascript var so when you look at code, you can see them. It is recommended to store them in a file or files.

### Theme Object

A `theme` object, in it's simplist form, looks like this:

```js
  {
    name: 'default'
  }
```

The rest of what a theme looks like is entirely up to the developer and how they would like to "skin" their application.

For instance, this is the one used by QCalendar in `theme.js`:

```js
export default [
  {
    name: 'default'
  },
  {
    name: 'dark',
    // body
    colorBody: 'grey-2',
    backgroundBody: 'blue-grey-8',
    colorBodyOutside: 'grey-6',
    backgroundBodyOutside: 'blue-grey-8',
    colorBodyPast: 'grey-11',
    backgroundBodyPast: 'blue-grey-6',
    colorBodyCurrent: 'blue-grey-2',
    backgroundBodyCurrent: 'blue-grey-10',
    colorBodyFuture: 'blue-grey-2',
    backgroundBodyFuture: 'blue-grey-10',
    // header - weekly only
    colorHeader: 'blue-grey-2',
    backgroundHeader: 'blue-grey-10',
    colorHeaderOutside: 'blue-grey-2',
    backgroundHeaderOutside: 'blue-grey-10',
    // header - for daily only
    colorHeaderPast: 'grey-11',
    backgroundHeaderPast: 'blue-grey-6',
    colorHeaderCurrent: 'blue-grey-2',
    backgroundHeaderCurrent: 'blue-grey-10',
    colorHeaderFuture: 'blue-grey-2',
    backgroundHeaderFuture: 'blue-grey-10',
    // work week - monthly only
    colorWorkWeekPast: 'blue-grey-8',
    backgroundWorkWeekPast: 'blue-grey-6',
    colorWorkWeekCurrent: 'orange-4',
    backgroundWorkWeekCurrent: 'blue-grey-10',
    colorWorkWeekFuture: 'yellow-4',
    backgroundWorkWeekFuture: 'blue-grey-10',
    // label
    colorDayLabelOutside: 'blue-grey-2',
    backgroundDayLabelOutside: 'blue-grey-8',
    colorDayLabelPast: 'grey-11',
    backgroundDayLabelPast: 'blue-grey-6',
    colorDayLabelCurrent: 'orange-4',
    backgroundDayLabelCurrent: 'blue-grey-10',
    colorDayLabelFuture: 'yellow-4',
    backgroundDayLabelFuture: 'blue-grey-10',
    // interval body
    colorIntervalHeader: 'grey-2',
    backgroundIntervalHeader: 'blue-grey-8',
    colorIntervalBody: 'grey-2',
    backgroundIntervalBody: 'blue-grey-8',
    colorIntervalText: 'grey-2',
    backgroundIntervalText: 'blue-grey-8',
    // scheduler body
    colorSchedulerHeader: 'grey-2',
    backgroundSchedulerHeader: 'blue-grey-8',
    colorSchedulerBody: 'grey-2',
    backgroundSchedulerBody: 'blue-grey-8',
    colorSchedulerText: 'grey-2',
    backgroundSchedulerText: 'blue-grey-8'
  },
  {
    name: 'teal',
    // body
    colorBody: 'grey-2',
    backgroundBody: 'teal-8',
    colorBodyOutside: 'grey-6',
    backgroundBodyOutside: 'teal-8',
    colorBodyPast: 'grey-11',
    backgroundBodyPast: 'teal-6',
    colorBodyCurrent: 'teal-2',
    backgroundBodyCurrent: 'teal-10',
    colorBodyFuture: 'teal-2',
    backgroundBodyFuture: 'teal-10',
    // header - weekly only
    colorHeader: 'teal-2',
    backgroundHeader: 'teal-10',
    colorHeaderOutside: 'teal-2',
    backgroundHeaderOutside: 'teal-10',
    // header - for daily only
    colorHeaderPast: 'grey-11',
    backgroundHeaderPast: 'teal-6',
    colorHeaderCurrent: 'teal-2',
    backgroundHeaderCurrent: 'teal-10',
    colorHeaderFuture: 'teal-2',
    backgroundHeaderFuture: 'teal-10',
    // work week - monthly only
    colorWorkWeekPast: 'teal-8',
    backgroundWorkWeekPast: 'teal-6',
    colorWorkWeekCurrent: 'orange-4',
    backgroundWorkWeekCurrent: 'teal-10',
    colorWorkWeekFuture: 'yellow-4',
    backgroundWorkWeekFuture: 'teal-10',
    // label
    colorDayLabelOutside: 'teal-2',
    backgroundDayLabelOutside: 'teal-8',
    colorDayLabelPast: 'grey-11',
    backgroundDayLabelPast: 'teal-6',
    colorDayLabelCurrent: 'orange-4',
    backgroundDayLabelCurrent: 'teal-10',
    colorDayLabelFuture: 'yellow-4',
    backgroundDayLabelFuture: 'teal-10',
    // interval body
    colorIntervalHeader: 'grey-2',
    backgroundIntervalHeader: 'teal-8',
    colorIntervalBody: 'grey-2',
    backgroundIntervalBody: 'teal-8',
    colorIntervalText: 'grey-2',
    backgroundIntervalText: 'teal-8',
    // scheduler body
    colorSchedulerHeader: 'grey-2',
    backgroundSchedulerHeader: 'teal-8',
    colorSchedulerBody: 'grey-2',
    backgroundSchedulerBody: 'teal-8',
    colorSchedulerText: 'grey-2',
    backgroundSchedulerText: 'teal-8'
  },
  {
    name: 'brown',
    // body
    colorBody: 'brown-2',
    backgroundBody: 'brown-8',
    colorBodyOutside: 'grey-6',
    backgroundBodyOutside: 'brown-8',
    colorBodyPast: 'grey-11',
    backgroundBodyPast: 'brown-6',
    colorBodyCurrent: 'brown-2',
    backgroundBodyCurrent: 'brown-10',
    colorBodyFuture: 'brown-2',
    backgroundBodyFuture: 'brown-10',
    // header - weekly only
    colorHeader: 'brown-2',
    backgroundHeader: 'brown-10',
    colorHeaderOutside: 'brown-2',
    backgroundHeaderOutside: 'brown-10',
    // header - for daily only
    colorHeaderPast: 'grey-11',
    backgroundHeaderPast: 'brown-6',
    colorHeaderCurrent: 'brown-2',
    backgroundHeaderCurrent: 'brown-10',
    colorHeaderFuture: 'brown-2',
    backgroundHeaderFuture: 'brown-10',
    // work week - monthly only
    colorWorkWeekPast: 'brown-8',
    backgroundWorkWeekPast: 'brown-6',
    colorWorkWeekCurrent: 'orange-4',
    backgroundWorkWeekCurrent: 'brown-10',
    colorWorkWeekFuture: 'yellow-4',
    backgroundWorkWeekFuture: 'brown-10',
    // label
    colorDayLabelOutside: 'brown-2',
    backgroundDayLabelOutside: 'brown-8',
    colorDayLabelPast: 'grey-11',
    backgroundDayLabelPast: 'brown-6',
    colorDayLabelCurrent: 'orange-4',
    backgroundDayLabelCurrent: 'brown-10',
    colorDayLabelFuture: 'yellow-4',
    backgroundDayLabelFuture: 'brown-10',
    // interval body
    colorIntervalHeader: 'grey-2',
    backgroundIntervalHeader: 'brown-8',
    colorIntervalBody: 'grey-2',
    backgroundIntervalBody: 'brown-8',
    colorIntervalText: 'grey-2',
    backgroundIntervalText: 'brown-8',
    // scheduler body
    colorSchedulerHeader: 'grey-2',
    backgroundSchedulerHeader: 'brown-8',
    colorSchedulerBody: 'grey-2',
    backgroundSchedulerBody: 'brown-8',
    colorSchedulerText: 'grey-2',
    backgroundSchedulerText: 'brown-8'
  },
  {
    name: 'deep purple',
    // body
    colorBody: 'grey-2',
    backgroundBody: 'deep-purple-8',
    colorBodyOutside: 'grey-6',
    backgroundBodyOutside: 'deep-purple-8',
    colorBodyPast: 'grey-11',
    backgroundBodyPast: 'deep-purple-6',
    colorBodyCurrent: 'deep-purple-2',
    backgroundBodyCurrent: 'deep-purple-10',
    colorBodyFuture: 'deep-purple-2',
    backgroundBodyFuture: 'deep-purple-10',
    // header - weekly only
    colorHeader: 'deep-purple-2',
    backgroundHeader: 'deep-purple-10',
    colorHeaderOutside: 'deep-purple-2',
    backgroundHeaderOutside: 'deep-purple-10',
    // header - for daily only
    colorHeaderPast: 'grey-11',
    backgroundHeaderPast: 'deep-purple-6',
    colorHeaderCurrent: 'deep-purple-2',
    backgroundHeaderCurrent: 'deep-purple-10',
    colorHeaderFuture: 'deep-purple-2',
    backgroundHeaderFuture: 'deep-purple-10',
    // work week - monthly only
    colorWorkWeekPast: 'deep-purple-8',
    backgroundWorkWeekPast: 'deep-purple-6',
    colorWorkWeekCurrent: 'orange-4',
    backgroundWorkWeekCurrent: 'deep-purple-10',
    colorWorkWeekFuture: 'yellow-4',
    backgroundWorkWeekFuture: 'deep-purple-10',
    // label
    colorDayLabelOutside: 'deep-purple-2',
    backgroundDayLabelOutside: 'deep-purple-8',
    colorDayLabelPast: 'grey-11',
    backgroundDayLabelPast: 'deep-purple-6',
    colorDayLabelCurrent: 'orange-4',
    backgroundDayLabelCurrent: 'deep-purple-10',
    colorDayLabelFuture: 'yellow-4',
    backgroundDayLabelFuture: 'deep-purple-10',
    // interval body
    colorIntervalHeader: 'grey-2',
    backgroundIntervalHeader: 'deep-purple-8',
    colorIntervalBody: 'grey-2',
    backgroundIntervalBody: 'deep-purple-8',
    colorIntervalText: 'grey-2',
    backgroundIntervalText: 'deep-purple-8',
    // scheduler body
    colorSchedulerHeader: 'grey-2',
    backgroundSchedulerHeader: 'deep-purple-8',
    colorSchedulerBody: 'grey-2',
    backgroundSchedulerBody: 'deep-purple-8',
    colorSchedulerText: 'grey-2',
    backgroundSchedulerText: 'deep-purple-8'
  },
  {
    name: 'indigo',
    // body
    colorBody: 'grey-2',
    backgroundBody: 'indigo-8',
    colorBodyOutside: 'grey-6',
    backgroundBodyOutside: 'indigo-8',
    colorBodyPast: 'grey-11',
    backgroundBodyPast: 'indigo-6',
    colorBodyCurrent: 'indigo-2',
    backgroundBodyCurrent: 'indigo-10',
    colorBodyFuture: 'indigo-2',
    backgroundBodyFuture: 'indigo-10',
    // header - weekly only
    colorHeader: 'indigo-2',
    backgroundHeader: 'indigo-10',
    colorHeaderOutside: 'indigo-2',
    backgroundHeaderOutside: 'indigo-10',
    // header - for daily only
    colorHeaderPast: 'grey-11',
    backgroundHeaderPast: 'indigo-6',
    colorHeaderCurrent: 'indigo-2',
    backgroundHeaderCurrent: 'indigo-10',
    colorHeaderFuture: 'indigo-2',
    backgroundHeaderFuture: 'indigo-10',
    // work week - monthly only
    colorWorkWeekPast: 'indigo-8',
    backgroundWorkWeekPast: 'indigo-6',
    colorWorkWeekCurrent: 'orange-4',
    backgroundWorkWeekCurrent: 'indigo-10',
    colorWorkWeekFuture: 'yellow-4',
    backgroundWorkWeekFuture: 'indigo-10',
    // label
    colorDayLabelOutside: 'indigo-2',
    backgroundDayLabelOutside: 'indigo-8',
    colorDayLabelPast: 'grey-11',
    backgroundDayLabelPast: 'indigo-6',
    colorDayLabelCurrent: 'orange-4',
    backgroundDayLabelCurrent: 'indigo-10',
    colorDayLabelFuture: 'yellow-4',
    backgroundDayLabelFuture: 'indigo-10',
    // interval body
    colorIntervalHeader: 'grey-2',
    backgroundIntervalHeader: 'indigo-8',
    colorIntervalBody: 'grey-2',
    backgroundIntervalBody: 'indigo-8',
    colorIntervalText: 'grey-2',
    backgroundIntervalText: 'indigo-8',
    // scheduler body
    colorSchedulerHeader: 'grey-2',
    backgroundSchedulerHeader: 'indigo-8',
    colorSchedulerBody: 'grey-2',
    backgroundSchedulerBody: 'indigo-8',
    colorSchedulerText: 'grey-2',
    backgroundSchedulerText: 'indigo-8'
  },
  {
    name: 'blue',
    // body
    colorBody: 'grey-2',
    backgroundBody: 'blue-8',
    colorBodyOutside: 'grey-6',
    backgroundBodyOutside: 'blue-8',
    colorBodyPast: 'grey-11',
    backgroundBodyPast: 'blue-6',
    colorBodyCurrent: 'blue-2',
    backgroundBodyCurrent: 'blue-10',
    colorBodyFuture: 'blue-2',
    backgroundBodyFuture: 'blue-10',
    // header - weekly only
    colorHeader: 'blue-2',
    backgroundHeader: 'blue-10',
    colorHeaderOutside: 'blue-2',
    backgroundHeaderOutside: 'blue-10',
    // header - for daily only
    colorHeaderPast: 'grey-11',
    backgroundHeaderPast: 'blue-6',
    colorHeaderCurrent: 'blue-2',
    backgroundHeaderCurrent: 'blue-10',
    colorHeaderFuture: 'blue-2',
    backgroundHeaderFuture: 'blue-10',
    // work week - monthly only
    colorWorkWeekPast: 'blue-8',
    backgroundWorkWeekPast: 'blue-6',
    colorWorkWeekCurrent: 'orange-4',
    backgroundWorkWeekCurrent: 'blue-10',
    colorWorkWeekFuture: 'yellow-4',
    backgroundWorkWeekFuture: 'blue-10',
    // label
    colorDayLabelOutside: 'blue-2',
    backgroundDayLabelOutside: 'blue-8',
    colorDayLabelPast: 'grey-11',
    backgroundDayLabelPast: 'blue-6',
    colorDayLabelCurrent: 'orange-4',
    backgroundDayLabelCurrent: 'blue-10',
    colorDayLabelFuture: 'yellow-4',
    backgroundDayLabelFuture: 'blue-10',
    // interval body
    colorIntervalHeader: 'grey-2',
    backgroundIntervalHeader: 'blue-8',
    colorIntervalBody: 'grey-2',
    backgroundIntervalBody: 'blue-8',
    colorIntervalText: 'grey-2',
    backgroundIntervalText: 'blue-8',
    // scheduler body
    colorSchedulerHeader: 'grey-2',
    backgroundSchedulerHeader: 'blue-8',
    colorSchedulerBody: 'grey-2',
    backgroundSchedulerBody: 'blue-8',
    colorSchedulerText: 'grey-2',
    backgroundSchedulerText: 'blue-8'
  }
]
```

### Theme Example

The usage, in QCalendar, goes like this (as an example):

At the top of your component do the imports.

```js
import Vue from 'vue'
import { Colorize, Theme } from 'quasar-mixin-colorize'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [Colorize, Theme],

  props: {
    // color prop is added by colorize mix-in
    // background-color is optional and needs to be added if needed
    bgColor: String
  },

  render (h) {
    return this.__renderWorkWeekHead(h)
  }
```

then, when rendering:

```js
  __renderWorkWeekHead (h) {
    let colors = new Map(), color, backgroundColor
    // this function returns passed in "data", as-is
    let updateColors = this.useDefaultTheme
    if (this.enableTheme === true) {
      color = 'colorHeader'
      backgroundColor = 'backgroundHeader'
      // get specified theme colors
      colors = this.getThemeColors([color, backgroundColor])
      // Colorize function to use, modifies "style"
      updateColors = this.setBothColors
    }

    return h('div', updateColors(colors.get(color), colors.get(backgroundColor), {
      staticClass: 'q-calendar-weekly__head-workweek'
    }), '#')
  }
```
You can see the QCalendar theming in action [here](https://quasarframework.github.io/app-extension-qcalendar/demo). Scroll down the bottom left, turn on themes and then select one.

# Colorize API

## Vue Properties
| Vue&nbsp;Property | Type	| Description |
|---|---|---|
| color | String | Any css color or from the Quasar Color Palette |

## Vue Methods
| Vue&nbsp;method | Args	| Description |
|---|---|---|---|
| setTextColor | color, {} | Object | The color and object containing `style` |
| setBackgroundColor | background-color, {} | Object | The background-color and object containing `style` |
| setBothColors | color, bgColor, {} | Object | The color, background-color and object containing `style` |

## Exported Functions
| Vue&nbsp;method | Args	| Returns | Description |
|---|---|---|---|
| isNamedCssColor | color | Boolean | Returns true if passed in color is a css named color |
| isCssColor | color | Boolean | Returns true if passed in color is a named color, hex color or rgb/rgba/hsl/hsla color |
| isCssVar | color | Boolean | Returns true if passed in color is a CSS variable starting with '--' |
| calculateColor | color, defaultColor = 'black' | String | Check if a color is a standard CSS color or a quasar color |
| makeQuasarColorVar | color, defaultColor | String | Generate a CSS variable definition based on the quasar color or existing variable passed in i.e `var(--q-color-red-5, 'default')` |

# Theme API

## Vue Properties
| Vue&nbsp;Property | Type	| Description |
|---|---|---|
| theme-enabled | Boolean | Turn theming on or off |
| theme | Object | A theme object |

## Vue Methods
| Vue&nbsp;method | Args	| Returns | Description |
|---|---|---|---|
| useDefaultTheme | color, bgColor, data = {} | The passed in `data` object | |
| getThemeColors | keys = [] | Map | Returns a Map of theme items based on keys |

# Donate
If you appreciate the work that went into this mix-in, please consider [donating to Quasar](https://donate.quasar.dev).

---
This page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.
