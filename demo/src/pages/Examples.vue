<template>
  <hero>
    <div class="q-markdown">
      <example-title title="Basic" />
      <example-card title="Text" name="BasicRenderingColor" :tag-parts="getTagParts(require('!!raw-loader!../examples/BasicRenderingColor.vue').default)" />
      <example-card title="Background" name="BasicRenderingBackground" :tag-parts="getTagParts(require('!!raw-loader!../examples/BasicRenderingBackground.vue').default)" />
      <example-card title="Text and Background" name="BasicRenderingBoth" :tag-parts="getTagParts(require('!!raw-loader!../examples/BasicRenderingBoth.vue').default)" />
      <example-card title="Text with Input" name="BasicRenderingColorSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/BasicRenderingColorSelection.vue').default)" />
      <example-card title="Background with Input" name="BasicRenderingBackgroundSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/BasicRenderingBackgroundSelection.vue').default)" />
      <example-card title="Text and Background with Input" name="BasicRenderingBothSelection" :tag-parts="getTagParts(require('!!raw-loader!../examples/BasicRenderingBothSelection.vue').default)" />

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
    this.addToToc('Basic')
    this.addToToc('Text', 2)
    this.addToToc('Background', 2)
    this.addToToc('Text and Background', 2)
    this.addToToc('Text with Input', 2)
    this.addToToc('Background with Input', 2)
    this.addToToc('Text and Background with Input', 2)

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
