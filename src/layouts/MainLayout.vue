<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-icon
          style="font-size: 2rem;"
          name="audiotrack"></q-icon>
        <q-toolbar-title>
          Music App
        </q-toolbar-title>

        <div>v1.0.0.0</div>
      </q-toolbar>
    </q-header>
    <q-footer v-if="this.$q.platform.is.mobile" elevated>
          <q-tabs
            no-caps
            class="bg-grey-2 text-primary"
          >
            <q-btn color="primary" glossy label="Play"
                   @click="musicStatus({status : 0, musicPlay: audioPlay})" />
            <q-btn color="primary" glossy label="Stop"
                   @click="musicStatus({status : 1, musicPlay: audioPlay})" />
            <q-btn color="primary" glossy label="Start" :label="record ? 'stop recording' : 'start recording'"
                   @click="onRecord"/>
          </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'MainLayout',
  components: {},
  data() {
    return {
      audioRecord: []
    }
  },
  computed: {
    ...mapState('padLoops', ['audioPlay' , 'padsButton' , 'record']),
  },
  methods:{
    ...mapActions('padLoops',['musicStatus']),
    ...mapMutations("padLoops" , ['onRecord']),
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
