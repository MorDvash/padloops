<template>
  <div>
    <q-fab color="primary" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="secondary" icon="fab fa-github"
                    @click="onClickGit"/>
      <q-fab-action color="secondary" icon="fas fa-record-vinyl"
                    @click="recording()"/>
      <q-fab-action v-if="audioRecord.length > 0 && !record" color="secondary" icon="far fa-file-audio"
                    @click="playRecord()"/>
      <q-fab-action v-if="audioRecord.length > 0 && !record" color="secondary" icon="fas fa-trash"
                    @click="stopRecord()"/>
    </q-fab>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "recording",
  computed: {
    ...mapState('padLoops', ['audioPlay', 'record', 'audioRecord']),
  },
  methods: {
    ...mapMutations('padLoops', ['onRecord','deleteRecord']),
    ...mapActions('padLoops', ['musicStatus']),
    onClickGit() {
      window.open('https://github.com/MorDvash/padloops')
    },
    recording() {
      if (this.record) {
        this.$q.notify({
          message: 'Recording stopped',
          color: 'secondary',
          timeout: '1000'
        })
      } else {
        this.$q.notify({
          message: 'Recording',
          color: 'secondary',
          timeout: '1000'
        })
      }
      this.onRecord()
    },
    playRecord() {
      this.audioRecord.forEach((loop, i) => {
        setTimeout(() => {
          loop.play();
        }, i * 8000);
      })
    },
    stopRecord(){
      this.musicStatus({status : 1, musicPlay: this.audioRecord})
      this.deleteRecord()
    }
  }
}
</script>

<style scoped>

</style>
