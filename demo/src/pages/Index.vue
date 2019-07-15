<template>
  <q-page class="flex flex-center">
    <div class="row justify-around q-mt-lg">
      <q-input
        v-model="userTextColor"
        class="col-12 q-mt-md"
        label="Text Color"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="userTextColor" no-header no-footer />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        v-model="userBgColor"
        class="col-12"
        label="Background Color"
      >
        <template v-slot:append>
          <q-icon name="colorize" class="cursor-pointer">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-color v-model="userBgColor" no-header no-footer />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <demo
        :color="userTextColor"
        :bg-color="userBgColor"
        class="full-width flex flex-center q-mt-xl"
      >Just a demo!</demo>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Demo from 'src/components/demo'

export default {
  name: 'PageIndex',

  data () {
    return {
      userTextColor: '--some-bob-var',
      userBgColor: 'purple-3'
    }
  },

  components: {
    Demo
  }
}
</script>

<style lang="stylus">
  // @import 'quasar-mixin-colorize/qColors.styl'
  @import '../../../src/qColors.styl'
  // $ // Here to trigger Quasar import of variables.
</style>
