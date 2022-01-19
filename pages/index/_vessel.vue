<template>
  <div>
    <div class="w-full">
      <div class="py-4 px-8 bg-white shadow-lg rounded-t-lg dark:bg-gray-700 dark:border-none">
        <h1>Inland Vessel Visit - Van der Veen shipping - Expected</h1>
      </div>

      <div class="space-x-4 py-4 px-8 bg-gray-100 flex border dark:border-gray-300 dark:bg-gray-700">
        <t-button to="/" variant="primary">Save & Quit </t-button>
        <t-button to="/" class="bg-white">Save & New </t-button>
        <t-button to="/" class="bg-white">Use Defaults </t-button>
        <t-button to="/" class="bg-white">Reset </t-button>
        <t-button to="/" class="bg-white">Quit </t-button>
      </div>
    </div>

    <vessel-information v-if="vessel !== null" :vessel="vessel" />

    <autonomous-vessel-property v-if="isAutonomousVessel && vessel !== null" :vessel="vessel" />

    <position />

    <t-button class="m-auto mt-4" variant="primary">
      Add new position
    </t-button>
  </div>
</template>

<script>
import Position from '~/components/propertyWindow/Position'
import AutonomousVesselProperty from '~/components/propertyWindow/AutonomousVesselProperty'
import VesselInformation from '~/components/propertyWindow/VesselInformation'
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      vessel: null
    };
  },
  computed: {
    ...mapGetters({
      getVesselById: 'vessels/getVesselById',
    }),
  },
  created() {
    const vessel = this.getVesselById(parseInt(this.$route.params.vessel))

    if (vessel === undefined || vessel === null) {
      this.$router.push({ name: 'index' })
    } else {
      this.vessel = vessel
    }
  },
  components: {
    VesselInformation,
    Position,
    AutonomousVesselProperty
  },
  methods: {
    isAutonomousVessel() {
      const V   = 'vessel'
      const AV  = 'autonomous vessel'
      const SAV  = 'semi autonomous vessel'

      return this.vessel.type === AV || this.vessel.type === SAV
    },
  },
}
</script>

<style scoped>

</style>
