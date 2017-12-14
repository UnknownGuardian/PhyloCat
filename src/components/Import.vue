<template>
  <section>
    <textarea style="width:100%" v-model="dataToImport" ></textarea>
    <textarea style="width:100%" v-model="jsonConverted"></textarea>
  </section>
</template>

<script>
export default {
  name: 'phylocat-import'
}
</script>

<style scoped>

</style>
