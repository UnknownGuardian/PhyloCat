<template>
  <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
    <ul class="nav nav-pills flex-column">
      <li class="nav-item">
        <router-link to="/"><a class="nav-link" v-bind:class="{active: $route.path == '/' }" href="#">My Tree <span class="sr-only">(current)</span></a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/settings"><a class="nav-link" v-bind:class="{active: $route.path.includes('/settings') }" href="#">Settings</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/import"><a class="nav-link" v-bind:class="{active: $route.path.includes('/import') }" href="#">Import</a></router-link>
      </li>
    </ul>
    <ul class="nav nav-pills flex-column" v-if="false/*$route.path == '/'*/">
      <h5 class="text-secondary">Export As</h5>
      <li class="nav-item">
        <a class="nav-link"><button type="button" @click="saveAsSVG()" class="btn btn-primary">SVG</button></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><button type="button" @click="saveAsSVG()" class="btn btn-success">PNG</button></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><button type="button" @click="saveAsSVG()" class="btn btn-danger">JPG</button></a>
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
