<template>
  <div>
    <div :class="position">
      <div class="col-md-4 col-12">
        <div v-for="button in padsButton.slice(0,3)">
          <button-g :button="button" />
        </div>
      </div>
      <div class="col-md-4 col-12">
        <div v-for="button in padsButton.slice(3,6)">
          <button-g :button="button"/>
        </div>
      </div>
      <div class="col-md-4 col-12">
        <div v-for="button in padsButton.slice(6,9)">
          <button-g :button="button"/>
        </div>
      </div>
    </div>
    <q-btn v-if="this.$q.platform.is.desktop" color="deep-orange" glossy label="play"
           @click="musicStatus({status : 1, musicPlay: audioPlay})"/>
    <q-btn v-if="this.$q.platform.is.desktop" color="deep-orange" glossy label="stop"
           @click="musicStatus({status : 0, musicPlay: audioPlay})"/>
    <q-btn v-if="this.$q.platform.is.desktop" color="deep-orange" glossy
           :label="record ? 'stop recording' : 'start recording'" @click="record = !record"/>
    <q-btn  v-if="audioRecord.length > 0 && !record && this.$q.platform.is.desktop" color="deep-orange" glossy label="play record"
            @click="musicStatus({status : 0, musicPlay: audioRecord})"/>
  </div>
</template>

<script>

import firebaseApi from "src/middleware/firebaseApi";
import ButtonG from "components/buttonG";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "pads",
  components: {ButtonG},
  data() {
    return {
      audioRecord: []
    }
  },
  computed: {
    position(){
      if (!this.$q.platform.is.desktop){
        return 'absolute-center row'
      }else
        return 'row mt'
    },
    ...mapState('padLoops', ['audioPlay' , 'padsButton','record']),
  },
  created() {
    firebaseApi.getLoops().then(res => {
      this.addPads(res)
    })
  },
  methods: {
    ...mapMutations('padLoops' , ['addPads']),
    ...mapActions('padLoops',['musicStatus']),
  },
  watch: {
    audioPlay() {
      if (this.record) {
        this.audioRecord = [...this.audioPlay]
      }
    }
  }
}
</script>

<style scoped>
.mt{
padding-left: 10%;
  padding-top: 20%;
}
</style>
