<template>
  <div>
    <q-fab color="warning" icon="keyboard_arrow_up" direction="up">
      <q-fab-action color="dark" icon="fab fa-github"
                    @click="onClickGit"/>
      <q-fab-action v-if="!isPlayingRecord" color="dark" icon="fas fa-record-vinyl"
                    @click="recording"/>
      <q-fab-action v-if="audioRecord.length > 0 && !record && !isPlayingRecord" color="dark" icon="far fa-file-audio"
                    @click="playRecord"/>
      <q-fab-action v-if="audioRecord.length > 0 && !record" color="dark" icon="fas fa-trash"
                    @click="stopRecord"/>
    </q-fab>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "recording",
  computed: {
    ...mapState('padLoops', ['audioPlay', 'record', 'audioRecord','isPlayingRecord']),
  },
  methods: {
    ...mapMutations('padLoops', ['onRecord','deleteRecord' , 'isPlayingRecordStatus']),
    ...mapActions('padLoops', ['musicStatus' , 'recording','playRecord']),
    onClickGit() {
      window.open('https://github.com/MorDvash/padloops')
    },
    stopRecord(){
      this.musicStatus({status : 1, musicPlay: this.audioRecord})
      this.deleteRecord()
      this.isPlayingRecordStatus()
    }
  }
}
</script>

<style scoped>

</style>
