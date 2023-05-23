<template lang="pug">
  .progress-bar-component
    .progress-bar__icons
      iconStar(
        v-for="(_, index) in 5"
        :key="index"
        :ref="`starIcon${index}`")
      .progress-bar__icon-union
        iconUnion
    .progress-bar__wrapper
      ul.progress-bar__inner(ref="progressBar")
        li.progress-bar__separator(
          v-for="(_, index) in 5"
          :key="index")
      .progress-bar__fill(ref="progressBarFill")
    ul.progress-bar__score
      li.progress-bar__score-item(
        v-for="(item, index) in scores"
        :key="index") {{ getValue(item) }}
</template>

<script>
import iconStar from '@components/icons/star'
import iconUnion from '@components/icons/union'

export default {
  name: 'progress-bar-component',
  components: {
    iconStar,
    iconUnion
  },
  data() {
    return {
      score: 12,
      scores: [
        {
          currentValue: 0,
          defaultValue: 0
        },
        {
          currentValue: 0,
          defaultValue: 25
        },
        {
          currentValue: 0,
          defaultValue: 50
        },
        {
          currentValue: 0,
          defaultValue: 100
        },
        {
          currentValue: 0,
          defaultValue: 200
        },
        {
          currentValue: 0,
          defaultValue: 500
        },
        {
          currentValue: 0,
          defaultValue: 1000
        }
      ]
    }
  },
  computed: {
    progress() {
      if (this.score >= 0 && this.score <= 25) {
        return this.getProgress({ min: 0, max: 25 })
      }
      if (this.score > 25 && this.score <= 50) {
        return this.getProgress({ min: 25, max: 50, offset: 1 })
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
      for (let i = 0; i < offset; i++) {
        this.$refs[`starIcon${i}`][0].$el.style.fill = '#3300ff'
      }
      this.scores = this.scores.map(el => {
        if (el.defaultValue > min && el.defaultValue <= max) {
          el.currentValue = this.score
        } else {
          el.currentValue = 0
        }
        return el
      })
      return ((this.score - min) / residual) * step + step * offset
    },
    getValue(item) {
      return item.currentValue
        ? `${item.currentValue}/${item.defaultValue}`
        : item.defaultValue
    }
  },
  mounted() {
    this.$refs.progressBarFill.style.width = `${this.progress}%`
  }
}
</script>

<style lang="scss" scoped>
.progress-bar-component {
  .progress-bar__icons {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, calc(20% - 1.25px));
    padding-left: calc(16.67% - 12px);
    height: 25px;
    svg {
      color: $color-primary;
      fill: $color-secondary;
    }
  }
  .progress-bar__icon-union {
    position: absolute;
    top: 0;
    right: 0;
  }
  .progress-bar__wrapper {
    margin-top: 10px;
    position: relative;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
  }
  .progress-bar__inner {
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
  .progress-bar__score {
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
    color: $color-black;
    opacity: 0.5;
  }
}
</style>
