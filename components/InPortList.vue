<template>
  <div class="dark:bg-gray-700 rounded">
    <p class="font-bold pl-2 py-2">In Port</p>

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
        <tr class="cursor-pointer"
            :class="[props.trClass, getTRBackgroundColorClass(props.row.type)]"
            @click="openPropertyWindow(props.row.id)">
          <td :class="props.tdClass">
            <font-awesome-icon
              :icon="getVesselTypeIcon(props.row.type)" class="m-1 w-4 pl-0.5"
              :class="getColorMethod === ICON_COLORED ? `text-${getColor(props.row.type)}-400` : ''" />
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
            <font-awesome-icon v-if="props.row.h" icon="exclamation" class="m-1 w-1.5" :class="getIconColor(props.row.type,'gray')" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.award" icon="award" class="m-1 w-3" :class="getIconColor(props.row.type,'green')" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.recycle" icon="recycle" class="m-1 w-4" :class="getIconColor(props.row.type,'red')" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.paperclip" icon="paperclip" class="m-1 w-3.5" :class="getIconColor(props.row.type,'gray')" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon v-if="props.row.edit" icon="pen" class="m-1 w-3.5" :class="getIconColor(props.row.type,'yellow')" />
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>

<script lang="js">
import {mapGetters, mapMutations} from "vuex";
import {
  ICON_COLORED, ROW_COLORED,
  AV_COLOR, SAV_COLOR,
  V, AV, SAV
} from '~/store/filter'

const headers = [
  {
    text: '',
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
    ICON_COLORED,
    ROW_COLORED,
  }),
  computed: {
    ...mapGetters({
      inPortVessels: 'vessels/getInPortVessels',
      getColorMethod: 'filter/getColorMethod',
    }),
  },
  methods: {
    getVesselTypeIcon(type) {
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
    },
    getColor(type) {
      switch (type) {
        case AV:
          return AV_COLOR
        case SAV:
          return SAV_COLOR
        default:
          return ''
      }
    },
    getTRBackgroundColorClass(type) {
      return this.isAutonomous(type) && this.getColorMethod === ROW_COLORED
        ? `bg-${this.getColor(type)}-400 dark:bg-${this.getColor(type)}-400`
        : 'dark:bg-gray-600'
    },
    isAutonomous(type) {
      return type === SAV || type === AV
    },
    getIconColor(type, color) {
      return this.isAutonomous(type) && this.getColorMethod === ROW_COLORED ?
        'text-gray-700 dark:text-white':
        `text-${color}-400`
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
