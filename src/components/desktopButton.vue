<template>
  <div class="q-mt-xl">
    <q-card dark bordered flat class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Setting</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section
                      @click="onClickGit">GitHub
                    </q-item-section>
                  </q-item>
                  <q-item :clickable="!isPlayingRecord">
                    <q-item-section
                      @click="recording">{{ record ? 'Stop Recording' : 'Start Recording' }}
                    </q-item-section>
                  </q-item>
                  <q-item :clickable="audioRecord.length > 0 && !record">
                    <q-item-section
                      @click="playRecord">{{ isPlayingRecord ? 'Delete Record' : 'Play Session' }}
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-card-section>
        <volume/>
      </q-card-section>

      <q-separator/>

      <q-card-actions>
        <q-btn class="q-mr-xs"
               padding="xs lg"
               rounded v-if="this.$q.platform.is.desktop"
               color="warning"
               glossy
               label="play"
               @click="musicStatus({status : 0, musicPlay: audioPlay})"/>
        <q-btn padding="xs lg"
               rounded
               v-if="this.$q.platform.is.desktop"
               color="warning"
               glossy
               label="stop"
               @click="musicStatus({status : 1, musicPlay: audioPlay})"/>
      </q-card-actions>
    </q-card>
    <div class="q-mt-xl">

    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import Volume from "components/volume";

export default {
  name: "desktopButton",
  components: {Volume},
  computed: {
    ...mapState('padLoops', ['audioPlay', 'record','isPlayingRecord','audioRecord']),
  },
  methods: {
    ...mapMutations('padLoops', ['addPads']),
    ...mapActions('padLoops', ['musicStatus','recording','playRecord']),
    onClickGit() {
      window.open('https://github.com/MorDvash/padloops')
    },
  },
}
</script>

<style scoped>

</style>
