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
  mounted() {
    this.setVessel()
  },
  watch: {
    $route () {
      this.setVessel()
    }
  },
  methods: {
    setVessel() {
      const vessel = this.getVesselById(parseInt(this.$route.params.vessel))

      if (vessel === undefined || vessel === null) {
        this.$router.push({ name: 'index' })
      } else {
        this.vessel = vessel
      }
    }
  }
}
