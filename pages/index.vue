<template lang="pug">
  .page.index.wrapper
    button.stage-button(@click="start") {{ title }}
    progressBar.progress-bar(:score="result")
</template>

<script>
import progressBar from '@components/progress-bar'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'page-index',
  components: { progressBar },
  data() {
    return {
      stageCount: 0,
      currentStages: [],
      stages: [
        {
          name: 'Этап первый',
          id: 1,
          thresholdPoints: 25,
          games: [
            {
              name: 'Игра 1.1',
              bestResult: 10,
              isPlayed: false
            }
          ]
        },
        {
          name: 'Этап второй',
          id: 2,
          thresholdPoints: 50,
          games: [
            {
              name: 'Игра 2.1',
              bestResult: 30,
              isPlayed: false
            }
          ]
        },
        {
          id: 3,
          name: 'Этап третий',
          thresholdPoints: 100,
          games: [
            {
              name: 'Игра 3.1',
              bestResult: 30,
              isPlayed: false
            }
          ]
        },
        {
          id: 4,
          name: 'Этап четвертый',
          thresholdPoints: 200,
          games: [
            {
              name: 'Игра 4.1',
              bestResult: 120,
              isPlayed: false
            }
          ]
        },
        {
          id: 5,
          name: 'Этап пятый',
          thresholdPoints: 500,
          games: [
            {
              name: 'Игра 5.1',
              bestResult: 150,
              isPlayed: false
            }
          ]
        },
        {
          id: 6,
          name: 'Этап шестой',
          thresholdPoints: 1000,
          games: [
            {
              name: 'Игра 6.1',
              bestResult: 200,
              isPlayed: false
            },
            {
              name: 'Игра 6.2',
              bestResult: 550,
              isPlayed: false
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState('stage', ['result']),
    title() {
      return this.currentStages.length
        ? `${this.currentStages[this.currentStages.length - 1].name}`
        : 'Старт'
    }
  },
  watch: {},
  methods: {
    ...mapActions({
      setResult: 'stage/setResult'
    }),
    start() {
      this.stageCount++
      this.currentStages = this.stages.slice(0, this.stageCount)
      if (this.stageCount > this.stages.length) {
        return
      }
      this.setResult(this.currentStages)
    }
  }
}
</script>

<style lang="scss">
.index {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .stage-button {
    cursor: pointer;
    text-align: center;
    color: $color-white;
    width: 226px;
    height: 46px;
    background: $color-primary;
    border-radius: 3px;
    transition: opacity 0.4s ease;
    &:hover {
      background: $color-primary;
      opacity: 0.8;
    }
    &:active {
      background: $color-primary;
      opacity: 0.9;
    }
  }
  .progress-bar {
    margin-top: 50px;
    width: 100%;
  }
}
</style>
