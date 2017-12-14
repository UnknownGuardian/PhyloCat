<template>
  <section>
    <h2>Import Your Data</h2>
    <p class="lead">Supported Formats: Newick</p>
    <textarea style="width:100%" v-model="dataToImport" ></textarea>

    <h2>Export Your Data</h2>
    <p class="lead">Supported Formats: JSON</p>
    <textarea style="width:100%" v-model="jsonConverted"></textarea>
  </section>
</template>

<script>
import newick from '@/newick.js'
import nexus from '@/nexus.js'

export default {
  name: 'phylocat-import',
  methods: {
    getParser (str) {
      console.log('Guessing Format')
      if (newick.isNewick(str)) {
        return newick
      } else if (nexus.isNexus(str)) {
        return nexus
      }
      return null
    },
  },
  watch: {
    'dataToImport': function (newVal, oldVal) {
      let parser = this.getParser(newVal)
      if (parser) {
        this.tree = parser.parse(newVal)
        this.jsonConverted = JSON.stringify(this.tree)
        this.$store.commit('setTree', this.tree)
      }
    }
  },
  data () {
    return {
      dataToImport: '',
      jsonConverted: '',
      tree: {},
      width: 500,
      height: 500,
    }
  }
}
</script>

<style scoped>

</style>
