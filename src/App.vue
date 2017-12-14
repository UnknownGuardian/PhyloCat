<template>
  <div id="app">
    <phylocat-header></phylocat-header>
    <div class="container-fluid">
      <div class="row">
        <phylocat-sidebar></phylocat-sidebar>
        <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
          <router-view></router-view>
        </main>
      </div>
    </div>
    <phylocat-footer v-if="!$route.path.includes('/')"></phylocat-footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'app',
  components: {
    'phylocat-header': Header,
    'phylocat-sidebar': Sidebar,
    'phylocat-footer': Footer
  }
}
</script>

<style>
</style>
