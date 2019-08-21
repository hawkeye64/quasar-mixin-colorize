<template>
  <hero>
    <q-markdown :src="markdown" toc @data="onToc" />
    <component-api
      title="Colorize API"
      :json="colorizeJson"
      type="Vue Mixin"
    />
    <component-api
      title="Theme API"
      :json="themeJson"
      type="Vue Mixin"
    />
    <q-markdown>
# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

---
This page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.
    </q-markdown>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import markdown from '../markdown/colorize.md'
import colorizeJson from 'quasar-mixin-colorize/src/Colorize.json'
import themeJson from 'quasar-mixin-colorize/src/Theme.json'

export default {
  name: 'PageIndex',

  components: {
    Hero
  },

  data () {
    return {
      markdown: markdown,
      colorizeJson: colorizeJson,
      themeJson: themeJson
    }
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        // console.log('toc:', toc)
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    onToc (toc) {
      // add the manual ones
      toc.push({ id: 'Colorize-API', label: 'Colorize API', level: 1, children: Array(0) })
      toc.push({ id: 'Theme-API', label: 'Theme API', level: 1, children: Array(0) })
      toc.push({ id: 'Donate', label: 'Donate', level: 1, children: Array(0) })

      this.toc = toc
    }
  }
}
</script>
