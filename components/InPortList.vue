<template>
  <div>
    <p class="font-bold pl-1 py-2">In Port</p>

    <t-table
      class="dark:bg-gray-800 border-none text-xs"
      :headers="headers"
      :data="inPortVessels"
    >
      <template v-slot:thead="props">
        <thead :class="props.theadClass">
        <tr :class="props.trClass">
          <th
            v-for="(item, index) in props.data"
            :key="index"
            :class="[props.thClass, item.icon ? '' : '']"
          >
            <template v-if="item.text">
              {{ item.text }}
            </template>
            <font-awesome-icon v-else-if="item.icon" :icon="item.icon" :class="`text-${item.color}-400`" class="m-1 w-4" />
          </th>
        </tr>
        </thead>
      </template>

      <template slot="row" slot-scope="props">
        <tr class="dark:bg-gray-800 dark:border-none" :class="props.trClass" @click="openPropertyWindow(props.row.id)">
          <td :class="props.tdClass">
            <font-awesome-icon :icon="getVesselTypeIcon(props.row.type)" class="m-1 w-4 text-black-400" />
          </td>
          <td :class="props.tdClass">
            {{ props.row.eta }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.name | uppercase }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.berth | uppercase }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.mooring }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.b }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.t }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.p }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.loa }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.boa }}
          </td>
          <td :class="props.tdClass">
            {{ props.row.draft }}
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.h" icon="exclamation" class="m-1 w-1 text-gray-400" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.award" icon="award" class="m-1 w-4 text-green-400" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.recycle" icon="recycle" class="m-1 w-4 text-red-400" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.paperclip" icon="paperclip" class="m-1 w-4 text-gray-400" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.edit" icon="pen" class="m-1 w-4 text-yellow-400" />
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>

<script lang="js">
import {mapGetters} from "vuex";

const headers = [
  {
    icon: 'ship',
    color: 'black'
  },
  {
    text: 'ETA',
  },
  {
    text: 'Vessel',
  },
  {
    text: 'Berth',
  },
  {
    text: 'Mooring',
  },
  {
    text: 'B',
  },
  {
    text: 'T',
  },
  {
    text: 'P',
  },
  {
    text: 'LOA',
  },
  {
    text: 'BOA',
  },
  {
    text: 'Draft',
  },
  {
    text: 'H',
  },
  {
    icon: 'award',
    color: 'green'
  },
  {
    icon: 'recycle',
    color: 'red'
  },
  {
    icon: 'paperclip',
    color: 'gray'
  },
  {
    icon: 'pen',
    color: 'yellow'
  },
]

export default {
  data: () => ({
    headers,
  }),
  computed: {
    ...mapGetters({
      inPortVessels: 'vessels/getInPortVessels',
    }),
  },
  methods: {
    getVesselTypeIcon(type) {
      const V   = 'vessel'
      const AV  = 'autonomous vessel'
      const SAV  = 'semi autonomous vessel'

      switch (type) {
        case V:
          return 'dharmachakra'
        case AV:
          return 'laptop'
        case SAV:
          return 'wifi'
      }
    },
    openPropertyWindow(id) {
      this.$router.push({ path: `/${id}` })
    }
  },
  filters: {
    uppercase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  }
}
</script>
