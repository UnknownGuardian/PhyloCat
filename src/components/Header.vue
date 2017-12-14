<template>
<div>
  <nav class="navbar navbar-expand-md fixed-top">
        <router-link to="/"><a class="navbar-brand" href="#">PhyloCat</a></router-link>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings"><a class="nav-link" href="#">Settings</a></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/UnknownGuardian/PhyloCat">GitHub</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
</div>
</template>

<script>
export default {
  components: {
  },
  methods: {
  },
  data () {
    return {
      open: false
    }
  },
}
</script>

<style scoped>

</style>
<style>

</style>
