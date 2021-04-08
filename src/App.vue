<template>
  <q-layout view="lHh Lpr lFf" style="padding: 16px; background-color: #c5e1a5; font-family: app-font;">
    <q-header class="flat">
      <q-toolbar>
        <q-toolbar-title>
          <strong>Sisu's Blog</strong>
        </q-toolbar-title>

        <div>
          <q-btn flat to="/" label="Home" />
          <q-btn flat to="/about" label="About" />
          <q-btn flat to="/archive" label="Archive" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {},
  data () {}
}
</script>
