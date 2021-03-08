<template>
  <div class="q-mt-xl">
    <q-item :class="item">
      <q-item-section side>
        <q-icon v-if="volume > 0" name="fas fa-volume-up"/>
        <q-icon v-else name="fas fa-volume-mute"/>
      </q-item-section>
      <q-item-section>
        <q-slider
          v-model="volume"
          :min="0"
          :max="100"
          label
        />
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "volume",
  data() {
    return {
      volume: 100
    }
  },
  computed: {
    ...mapState('padLoops', ['audioPlay' , 'record' , 'audioRecord']),
    item(){
        if (!this.$q.platform.is.desktop) {
          return ''
        } else
          return 'itemWidth'
      },
  },
  watch: {
    volume(){
      if (this.record){
        this.audioRecord.forEach(pad =>{
          pad.volume = this.volume / 100
        })
      }
      this.audioPlay.forEach(pad =>{
       pad.volume = this.volume / 100
      })
    }
  }
}
</script>

<style scoped>
.itemWidth{
  width: 40%;
}
</style>
