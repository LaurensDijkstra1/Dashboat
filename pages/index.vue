<template>
  <div>
    <div class="fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 w-4/12">
      <t-alert
        v-if="snackbarState"
        class=""
        variant="success"
        timeout="4000"
        show
      >
        Positie toegevoegd
      </t-alert>
    </div>
    <div class="w-full">
      <div class="flex">
        <div class="w-6/12 pr-3">
          <in-port-list />
        </div>

        <div class="w-6/12 pl-3">
          <nuxt-child />
        </div>
      </div>
    </div>
    <!--    <div class="absolute right-0 top-17 w-6/12 px-4">-->
    <!--      <nuxt-child />-->
    <!--    </div>-->
  </div>
</template>

<script>
import InPortList from '~/components/InPortList'
import { mapGetters, mapMutations } from 'vuex'
import dummyData from '~/mixins/dummyData'

export default {
  components: { InPortList },
  data() {
    return {
      snackbarState: false,
    };
  },
  mixins: [dummyData],
  methods: {
    showAlert() {
      // console.log("werkt het?");
      this.snackbarState = true;
    },
  },
  computed: {
    ...mapGetters({
      getIdLists: 'vessels/getIdLists',
    })
  }
}
</script>
