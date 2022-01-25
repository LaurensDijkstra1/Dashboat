<template>
  <header
    class="
      border border-gray-200
      rounded
      bg-white
      dark:bg-gray-600 dark:border-none
      px-3
      py-4
      mb-6
      flex
      justify-between
    "
  >
    <section class="flex flex-row items-center space-x-4">
      <p>
        <nuxt-link to="/">
          Scheepshaven
        </nuxt-link>
      </p>

      <t-select :options="['Eemshaven']" />

      <div class="flex divide-x divide-gray">
        <div class="flex">
          <label class="flex items-center mr-4">
            <t-radio name="options" value="a" checked />
            <span class="ml-2 text-sm whitespace-nowrap">All</span>
          </label>

          <label class="flex items-center mr-4">
            <t-radio name="options" value="b" />
            <span class="ml-2 text-sm whitespace-nowrap">Inland</span>
          </label>

          <label class="flex items-center mr-4">
            <t-radio name="options" value="b" />
            <span class="ml-2 text-sm whitespace-nowrap">Seagoing</span>
          </label>
        </div>

        <div class="flex pl-4">
          <label class="flex items-center mr-4">
            <t-radio name="options2" value="a" checked />
            <span class="ml-2 text-sm whitespace-nowrap">All</span>
          </label>

          <label class="flex items-center mr-4">
            <t-radio name="options2" value="b" />
            <span class="ml-2 text-sm whitespace-nowrap">Waiting</span>
          </label>

          <label class="flex items-center mr-4">
            <t-radio name="options2" value="b" />
            <span class="ml-2 text-sm whitespace-nowrap">Declaration</span>
          </label>
        </div>

        <div class="flex pl-4">
          <label class="flex items-center mr-4">
            <t-radio name="options3" value="a" checked />
            <span class="ml-2 text-sm whitespace-nowrap">All</span>
          </label>

          <label class="flex items-center">
            <t-radio name="options3" value="b" />
            <span class="ml-2 text-sm whitespace-nowrap">Finishing</span>
          </label>
        </div>
      </div>

      <t-button class="text-sm" value="primary"> Reset </t-button>

      <t-button class="text-sm" value="primary" @click="setColorMethod">
        {{ getColorMethod ===  ICON_COLORED ? 'Icon' : 'Row' }}
      </t-button>
    </section>

    <div class="flex">
      <t-button
        class="font-bold mr-2 no-enter"
        variant="primary"
        @click="
          $colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'
        "
      >
        {{ $colorMode.value === "light" ? "Night Mode" : "Day Mode" }}
      </t-button>
      <t-button
        class="font-bold no-enter"
        variant="primary"
        @click="$router.push('/logout')"
      >
        Logout
      </t-button>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import { ICON_COLORED, ROW_COLORED } from '~/store/filter'

export default {
  data: () => ({
    ICON_COLORED,
    ROW_COLORED,
  }),
  computed: {
    ...mapGetters({
      getColorMethod: 'filter/getColorMethod'
    })
  },
  methods: {
    ...mapMutations({
      setColorMethod: 'filter/toggleColorMethod',
    }),
  }
}
</script>

<style>
.no-enter {
  overflow: hidden;
  white-space: nowrap;
}
</style>
