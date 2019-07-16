<template>
  <q-layout view="HHh Lpr lFf">

    <q-header elevated>
      <q-resize-observer @resize="onTitlebarResized"></q-resize-observer>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"></q-icon>
        </q-btn>

        <q-icon name="far fa-calendar-alt" class="q-ml-md" size="1.5rem"></q-icon>

        <q-toolbar-title v-if="$q.screen.width > 500">
          Colorize
          <q-tooltip v-if="$q.screen.width < 1077">
            Colorize
          </q-tooltip>
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="white"
      :width="350"
    >
      <div class="row justify-around col-12">
        <q-date
          v-model="selectedDateForQDate"
          minimal
          class="fit"
          :first-day-of-week="firstDayMonday === true ? 1 : 0"
          :options="options"
        ></q-date>
      </div>
      <div class="col-12">

        <q-expansion-item
          expand-separator
          default-opened
          dark
          group="somegroup"
          icon="fas fa-cogs"
          label="Playground"
          caption="Play with properties"
          header-class="text-white bg-primary"
        >
          <playground></playground>
        </q-expansion-item>

        <q-expansion-item
          expand-separator
          group="somegroup"
          icon="fas fa-link"
          label="Essential Links"
        >
          <essential-links />
        </q-expansion-item>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'ColorizeLayout',

  components: {
    'playground': () => import('../components/Playground'),
    'essential-links': () => import('../components/EssentialLinks')
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
