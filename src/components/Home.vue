<template>
  <section ref="display">
    <display-tree :phylotree="tree" :width="width" :height="height"></display-tree>
  </section>
</template>

<script>
import DisplayTree from '@/components/DisplayTree'

export default {
  name: 'home',
  components: {
    'display-tree': DisplayTree,
  },
  methods: {
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
    window.addEventListener('resize', this.handleResize)
    this.handleResize(null)
  },
  computed: {
    tree () {
      return this.$store.state.tree
    },
  },
  data () {
    return {
      dataToImport: '',
      jsonConverted: '',
      width: 500,
      height: 500,
    }
  }
}

</script>

<style scoped>

</style>
