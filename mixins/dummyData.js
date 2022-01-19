import {mapGetters, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations({
      generateVessels: 'vessels/generate',
      setInPortVessels: 'vessels/setInPortVesselIds',
      setExpectedVessels: 'vessels/setExportedVesselIds',
    })
  },
  computed: {
    ...mapGetters({
      getIdLists: 'vessels/getIdLists',
    }),
  },
  mounted() {
    this.generateVessels()
    const vesselLists = this.getIdLists
    this.setInPortVessels(vesselLists[0])
    this.setExpectedVessels(vesselLists[1])
  },
}
