<template lang="pug">
  .page.index.wrapper
    div body
    progressBar
</template>

<script>
import progressBar from '@components/progress-bar'

export default {
  name: 'page-index',
  components: { progressBar }
}
</script>

<style lang="scss">
.index {
}
</style>
