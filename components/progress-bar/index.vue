<template lang="pug">
  .progress-bar-component
    ul.progress-bar(ref="progressBar")
      li.progress-bar__separator
      li.progress-bar__separator
      li.progress-bar__separator
      li.progress-bar__separator
      li.progress-bar__separator
    .progress-bar__fill(ref="progressBarFill")
</template>

<script>
export default {
  name: 'progress-bar-component',
  data() {
    return {
      score: 1
    }
  },
  computed: {
    progress() {
      if (this.score >= 0 && this.score <= 25) {
        return this.getProgress({ min: 0, max: 25 })
      }
      if (this.score > 25 && this.score <= 50) {
        return this.getProgress({ min: 0, max: 25, offset: 1 })
      }
      if (this.score > 50 && this.score <= 100) {
        return this.getProgress({ min: 50, max: 100, offset: 2 })
      }
      if (this.score > 100 && this.score <= 200) {
        return this.getProgress({ min: 100, max: 200, offset: 3 })
      }
      if (this.score > 200 && this.score <= 500) {
        return this.getProgress({ min: 200, max: 500, offset: 4 })
      }
      if (this.score > 500 && this.score <= 1000) {
        return this.getProgress({ min: 500, max: 1000, offset: 5 })
      }
      return 0
    }
  },
  methods: {
    getProgress({ min, max, offset = 0 }) {
      const step = 100 / 6
      const residual = max - min
      return ((this.score - min) / residual) * step + step * offset
    }
  },
  mounted() {
    this.$refs.progressBarFill.style.width = `${this.progress}%`
  }
}
</script>

<style lang="scss" scoped>
.progress-bar-component {
  position: relative;
  width: 100%;
  border-radius: 30px;
  overflow: hidden;
  .progress-bar {
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    background: $color-secondary;
  }
  .progress-bar__separator {
    z-index: 1001;
    height: 100%;
    width: 1px;
    background: $color-black;
    opacity: 0.2;
  }
  .progress-bar__fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: $color-primary;
  }
}
</style>
