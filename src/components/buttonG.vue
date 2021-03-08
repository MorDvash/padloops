<template>
  <div class="marginB btn">
    <div>
      <q-btn
        color="primary"
        :label="button.name"
        size="lg"
        no-caps
        @click="addPad"
      />
      <q-spinner-bars v-if="active"
                      color="primary"
                      size="2em"></q-spinner-bars>
    </div>

    <audio :id="button.name" class="none" autoplay loop muted controls>
      <source :src="button.url">
      Your browser does not support the audio tag.
    </audio>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "buttonG",
  props: ['button'],
  data() {
    return {
      autoplay: 'false',
      index: 0,
      audio1 : document.getElementById(this.button.name),
      active:false
    }
  },
  computed: {
    ...mapState('padLoops', ['audioPlay', 'padsButton']),
  },
  methods: {
    ...mapMutations('padLoops', ['addPadToAudio', 'removePad', 'activeUnActivePad']),
    toggleAudio(audio) {
      audio.play();
       this.index = this.padsButton.findIndex(p => p.name === this.button.name)
       this.activeUnActivePad({status: true, index: this.index});
       this.active = true
      this.addPadToAudio(audio)
    },
    addPad() {
      const audio = document.getElementById(this.button.name);
      if (audio.paused) {
        let time;
        if (this.audioPlay.length > 0) {
          const last = this.audioPlay.slice(-1)
          time = last[0].currentTime
        }
        let waitTime = 0
        if (time) {
          waitTime = (8 - time) * 1000
        }
        setTimeout(() => {
          this.toggleAudio(audio)
        }, waitTime)
      } else {
        audio.pause();
        audio.currentTime = 0
        this.index = this.padsButton.findIndex(p => p.name === this.button.name)
        this.activeUnActivePad({status: false, index: this.index});
        this.active = false
        this.removePad(audio)
      }
    }
  },
  watch:{
   active(){
     return !!this.padsButton[this.index].active
    }
  }

}
</script>

<style scoped>
.none {
  display: none
}

.marginB {
  margin-bottom: 2%;
}

.btn {
  width: 30%;
}
</style>
