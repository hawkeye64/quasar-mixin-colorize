<template>
  <hero>
    <div class="q-markdown">
      <example-title title="Colorize Basic" />
      <example-card title="Text" name="ColorizeColor" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeColor.vue').default)" />
      <example-card title="Background" name="ColorizeBackground" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeBackground.vue').default)" />
      <example-card title="Border" name="ColorizeBorder" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeBorder.vue').default)" />
      <example-card title="Text, Background and Border" name="ColorizeBoth" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeBoth.vue').default)" />

      <example-title title="Colorize Advanced" />
      <q-markdown>
For all examples below that take an input, you can manually enter any valid color as well. Here are some ideas you can try:

| Color | Type |
| --- | --- |
| purple-7 | Quasar color palette |
| --q-color-green-5 | Quasar css var color |
| rgb(255, 128, 27) | rgb color |
| hsl(120, 100%, 50%) | hsl color |
| coral | CSS named color |

      </q-markdown>
      <example-card title="Text with Input" name="ColorizeColorSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeColorSelection.vue').default)" />
      <example-card title="Background with Input" name="ColorizeBackgroundSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeBackgroundSelection.vue').default)" />
      <example-card title="Border with Input" name="ColorizeBorderSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeBackgroundSelection.vue').default)" />
      <example-card title="Text, Background and Border with Input" name="ColorizeBothSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/ColorizeBothSelection.vue').default)" />

      <example-title title="Theme Basic" />
      <example-card title="Simple Theme" name="ThemeSimple" :tag-parts="getTagParts(require('!!raw-loader!../examples/ThemeSimple.vue').default)" />

      <example-title title="Theme Advanced" />
      <example-card title="Theme Selection" name="ThemeSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/ThemeSelection.vue').default)" />
      <example-card title="Theme Quasar Components" name="ThemeQuasarComponents" :tag-parts="getTagParts(require('!!raw-loader!../examples/ThemeQuasarComponents.vue').default)" />
    </div>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import ExampleCard from '../components/ExampleCard'
import { slugify } from '../utils/page-utils'
import getTagParts from '@quasar/quasar-app-extension-qmarkdown/src/lib/getTagParts'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle,
    ExampleCard
  },

  data () {
    return {
      tempToc: []
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Colorize Basic')
    this.addToToc('Text', 2)
    this.addToToc('Background', 2)
    this.addToToc('Border', 2)
    this.addToToc('Text, Background and Border', 2)
    this.addToToc('Colorize Advanced')
    this.addToToc('Text with Input', 2)
    this.addToToc('Background with Input', 2)
    this.addToToc('Border with Input', 2)
    this.addToToc('Text, Background and Border with Input', 2)
    this.addToToc('Theme Basic')
    this.addToToc('Simple Theme', 2)
    this.addToToc('Theme Advanced')
    this.addToToc('Theme Selection', 2)
    this.addToToc('Theme Quasar Components', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    getTagParts,
    addToToc (name, level = 1) {
      const slug = slugify(name)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>

<style lang="stylus">
.example-page
  padding: 16px 46px;
  font-weight: 300;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
</style>
