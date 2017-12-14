<template>
  <section ref="display">
    <display-tree :phylotree="tree" :width="width" :height="height"></display-tree>
    <textarea style="width:100%" v-model="dataToImport" ></textarea>
    <textarea style="width:100%" v-model="jsonConverted"></textarea>
  </section>
</template>

<script>
import DisplayTree from '@/components/DisplayTree'
import newick from '@/newick.js'
import nexus from '@/nexus.js'

export default {
  name: 'home',
  components: {
    'display-tree': DisplayTree,
  },
  methods: {
    getParser (str) {
      console.log('Guessing Format')
      if (newick.isNewick(str)) {
        return newick
      } else if (nexus.isNexus(str)) {
        return nexus
      }
    },
    handleResize (event) {
      if (this.$refs.display) {
        this.width = Math.max(300, Math.min(this.$refs.display.clientWidth, 2000))
        this.height = Math.max(300, Math.min(this.$refs.display.clientHeight, 2000))
      }
    }
  },
  watch: {
    'dataToImport': function (newVal, oldVal) {
      let parser = this.getParser(newVal)
      this.tree = parser.parse(newVal)
      this.jsonConverted = JSON.stringify(this.tree)
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  mounted () {
    console.log(this.$refs)
    window.addEventListener('resize', this.handleResize)
    this.handleResize(null)
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
