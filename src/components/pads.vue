<template>
  <div class="q-mt-xl">
      <q-card class="my-card">
        <div :class="position">
        <q-card-actions >
          <div :class="mr">
            <div class="q-mt-lg" v-for="pad in padsButton.slice(0,3)">
              <button-g :button="pad"/>
            </div>
          </div>
          <div class="col-md-4 justify-center">
            <div class="q-mt-lg" v-for="pad in padsButton.slice(3,6)">
              <button-g :button="pad"/>
            </div>
          </div>
          <div :class="ml">
            <div class="q-mt-lg" v-for="pad in padsButton.slice(6,9)">
              <button-g :button="pad"/>
            </div>
          </div>
        </q-card-actions>
        </div>
      </q-card>
  </div>
</template>

<script>
'record'
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
    position() {
      if (!this.$q.platform.is.desktop) {
        return 'row mt'
      } else
        return 'row mt'
    },
    ml() {
      if (!this.$q.platform.is.desktop) {
        return 'col-md-4 q-ml-lg '
      } else
        return 'col-md-4'
    },
    mr() {
      if (!this.$q.platform.is.desktop) {
        return 'col-md-4 q-mr-lg'
      } else
        return 'col-md-4'
    },
    ...mapState('padLoops', ['padsButton']),
  },
  created() {
    this.$q.loading.show()
    firebaseApi.getLoops().then(res => {
      this.addPads(res)
      this.$q.loading.hide()

    })
  },
  methods: {
    ...mapMutations('padLoops', ['addPads']),
  },
}
</script>

<style scoped>
.mt {
justify-content: center;
}
</style>
