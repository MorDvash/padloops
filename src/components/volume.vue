<template>
  <div class="q-mt-xl">
    <q-item>
      <q-item-section side>
        <q-icon name="volume_down"/>
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
    ...mapState('padLoops', ['audioPlay' , 'padsButton','record']),
  },
  watch: {
    volume(){
      this.audioPlay.forEach(pad =>{
       pad.volume = this.volume / 100
      })
    }
  }
}
</script>

<style scoped>

</style>
