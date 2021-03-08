<template>
  <q-page>
    <div class="row">
      <div class="col-md-5 col-12">
        <volume/>
      </div>
      <div class="col-6">
        <desktop-button/>
      </div>
    </div>
    <pads/>
    <div class="row">
      <div class="col-5">
      </div>
      <div class="col-6 mt">
        <recording/>
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
  components: {DesktopButton, Recording, Volume, Pads}
}
</script>
<style scoped>
.mt{
  margin-top: 10rem;
}
</style>
