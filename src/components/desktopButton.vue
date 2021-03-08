<template>
<div class="q-mt-xl">
  <q-btn v-if="this.$q.platform.is.desktop" color="deep-orange" glossy label="play"
         @click="musicStatus({status : 1, musicPlay: audioPlay})"/>
  <q-btn v-if="this.$q.platform.is.desktop" color="deep-orange" glossy label="stop"
         @click="musicStatus({status : 0, musicPlay: audioPlay})"/>
  <q-btn v-if="this.$q.platform.is.desktop" color="deep-orange" glossy
         :label="record ? 'stop recording' : 'start recording'" @click="record = !record"/>
  <q-btn v-if="audioRecord.length > 0 && !record && this.$q.platform.is.desktop" color="deep-orange" glossy
         label="play record"
         @click="musicStatus({status : 0, musicPlay: audioRecord})"/>
</div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "desktopButton",
  computed:{
    ...mapState('padLoops', ['audioPlay', 'record' , 'audioRecord']),
  },
  methods: {
    ...mapMutations('padLoops', ['addPads']),
    ...mapActions('padLoops', ['musicStatus']),
  },
}
</script>

<style scoped>

</style>
