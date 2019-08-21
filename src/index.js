import Vue from 'vue'

// 'transparent' at beginning of array as it's not really a color, but needs to be recognized
// as well, it's used more often than others (likely)
const CSS_COLOR_NAMES = ['transparent', 'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']

export function isNamedCssColor (color) {
  return !!color && CSS_COLOR_NAMES.includes(color.toLowerCase())
}

export function isCssColor (color) {
  return !!color && (!!color.match(/^(#|(rgb|hsl)a?\()/) || isNamedCssColor(color))
}

export function isCssVar (color) {
  return !!color && color.startsWith('--')
}

export function calculateColor (color, defaultColor = 'black') {
  return color === void 0 && defaultColor !== void 0 // safety net
    ? calculateColor(defaultColor)
    : isCssColor(color)
      ? color
      : makeQuasarColorVar(color, defaultColor)
}

export function makeQuasarColorVar (color, defaultColor) {
  const varStr = isCssVar(color)
    ? color
    : `--q-color-${color}`

  // return as a css string, ex: "var(--my-color, 'defaultColor')"
  return `var(${varStr}, '${defaultColor}')`
}

export const Colorize = Vue.extend({
  name: 'colorize',

  props: {
    color: String
  },

  methods: {
    __isValidCssColor (color) {
      return isCssColor(color) || isCssVar(color)
    },

    setBothColors (color, bgColor, data = {}) {
      return this.setTextColor(color, this.setBackgroundColor(bgColor, data))
    },

    setBackgroundColor (color, data = {}) {
      if (this.__isValidCssColor(color)) {
        const calcColor = calculateColor(color)
        if (data.style === void 0) data.style = {}
        data.style = {
          ...data.style,
          'background-color': `${calcColor}`
        }
      } else if (color) {
        const colorName = color.toString().trim()
        if (data.class === void 0) data.class = {}
        data.class = {
          ...data.class,
          ['bg-' + colorName]: true
        }
      }

      return data
    },

    setTextColor (color, data = {}) {
      if (this.__isValidCssColor(color)) {
        const calcColor = calculateColor(color)
        if (data.style === void 0) data.style = {}
        data.style = {
          ...data.style,
          'color': `${calcColor}`,
          'caret-color': `${calcColor}`
        }
      } else if (color) {
        const colorName = color.toString().trim()
        if (data.class === void 0) data.class = {}
        data.class = {
          ...data.class,
          ['text-' + colorName]: true
        }
      }
      return data
    },

    setBorderColor (color, data = {}) {
      if (this.__isValidCssColor(color)) {
        const calcColor = calculateColor(color)
        if (data.style === void 0) data.style = {}
        data.style = {
          ...data.style,
          'border-color': `${calcColor}`
        }
      } else if (color) {
        const colorName = color.toString().trim()
        if (data.class === void 0) data.class = {}
        data.class = {
          ...data.class,
          ['border-' + colorName]: true
        }
      }
      return data
    }
  }
})

export const Theme = Vue.extend({
  name: 'theme',

  props: {
    theme: {
      type: Object,
      default: () => {}
    },
    enableTheme: Boolean
  },

  methods: {
    // this function exists for performance reasons. If you do not
    // desire the performance hit of theming, be sure to set
    // the property 'enable-themes' to false (default).
    useDefaultTheme (color, bgColor, data = {}) {
      return data
    },

    getThemeColors (keys = []) {
      const colors = new Map()
      if (this.enableTheme === true && this.theme !== void 0) {
        keys.forEach((key) => {
          colors.set(key, this.theme[key])
        })
      }
      return colors
    }
  }
})
