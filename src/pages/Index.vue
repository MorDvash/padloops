<template>
  <q-page>
    <volume/>
    <pads/>
    <recording/>
  </q-page>
</template>

<script>
import Pads from "components/pads";
import Volume from "components/volume";
import Recording from "components/recording";

export default {
  name: 'PageIndex',
  components: {Recording, Volume, Pads}
}
</script>
