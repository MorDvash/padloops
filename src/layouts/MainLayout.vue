<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #ffb400">

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
            <q-btn class="col" color="warning" glossy icon="fas fa-play"
                   @click="musicStatus({status : 0, musicPlay: audioPlay})" />
            <q-btn class="col" color="warning" glossy icon="fas fa-pause"
                   @click="musicStatus({status : 1, musicPlay: audioPlay})" />
          </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import {mapActions, mapMutations, mapState} from "vuex";
import Recording from "components/recording";

export default {
  name: 'MainLayout',
  components: {Recording},
  data() {
    return {
      audioRecord: []
    }
  },
  computed: {
    ...mapState('padLoops', ['audioPlay']),
  },
  methods:{
    ...mapActions('padLoops',['musicStatus']),
    ...mapMutations("padLoops" , ['onRecord']),
  },
}
</script>
