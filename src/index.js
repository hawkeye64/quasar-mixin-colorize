import Vue from 'vue'

const CSS_COLOR_NAMES = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']

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

  return `var(${varStr}, '${defaultColor}')`
}

export default Vue.extend({
  name: 'colorize',

  props: {
    color: String
  },

  methods: {
    setBothColors (color, bgColor, data = {}) {
      return this.setTextColor(color, this.setBackgroundColor(bgColor, data))
    },

    setBackgroundColor (color, data = {}) {
      if (isCssColor(color) || isCssVar(color)) {
        const calcColor = calculateColor(color)
        data.style = {
          ...data.style,
          'background-color': `${calcColor}`,
          'border-color': `${calcColor}`
        }
      } else if (color) {
        const colorName = color.toString().trim()
        data.class = {
          ...data.class,
          ['bg-' + colorName]: true
        }
      }

      return data
    },

    setTextColor (color, data = {}) {
      if (isCssColor(color) || isCssVar(color)) {
        const calcColor = calculateColor(color)
        console.log('calc: ', calcColor)
        data.style = {
          ...data.style,
          'color': `${calcColor}`,
          'caret-color': `${calcColor}`
        }
      } else if (color) {
        const colorName = color.toString().trim()
        data.class = {
          ...data.class,
          ['text-' + colorName]: true
        }
      }
      return data
    }
  }
})
