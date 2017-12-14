<template>
  <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <router-link to="/"><a class="nav-link" v-bind:class="{active: $route.path == '/' }" href="#">Overview <span class="sr-only">(current)</span></a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/import"><a class="nav-link" v-bind:class="{active: $route.path.includes('/import') }" href="#">Import</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/export"><a class="nav-link" v-bind:class="{active: $route.path.includes('/export') }" href="#">Export</a></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'phylocat-sidebar',
}
</script>

<style scoped>

</style>
