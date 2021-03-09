<template>
  <q-page>
    <div class="row">
      <div class="col-md-3 col-12">
        <volume v-if="this.$q.platform.is.mobile"/>
      </div>
      <div class="col-6">
        <desktop-button v-if="this.$q.platform.is.desktop"/>
      </div>
    </div>
    <pads/>
    <div v-if="this.$q.platform.is.mobile" class="row">
      <div class="col-5">
      </div>
      <div class="col-6 mt">
        <recording />
      </div>
    </div>
  </q-page>
</template>

<script>
import Pads from "components/pads";
import Volume from "components/volume";
import Recording from "components/recording";
import DesktopButton from "components/desktopButton";

export default {
  name: 'PageIndex',
  components: {DesktopButton, Recording, Volume, Pads},
  created() {
    this.$q.dark.set(true)
  }
}
</script>
<style scoped>
.mt{
  margin-top: 10rem;
}
</style>
