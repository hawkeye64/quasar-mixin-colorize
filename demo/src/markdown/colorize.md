Colorize
===

Colorize is a Quasar Mix-in for components created for Quasar Framework. It is only for components that use a `render` function. It does not work with template formats.

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

# Docs
Can be found [here](https://hawkeye64.github.io/quasar-mixin-colorize).

# Examples
Can be found [here](https://hawkeye64.github.io/quasar-mixin-colorize/examples).

# Demo (source) Project
Can be found [here](https://github.com/hawkeye64/quasar-mixin-colorize/tree/master/demo).

# Colorize API

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
