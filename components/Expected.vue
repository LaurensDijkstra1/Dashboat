<template>
  <table>
    <div
      class="
        py-4
        px-8
        bg-white
        shadow-lg
        rounded-t-lg
        dark:bg-gray-800 dark:border-none
      "
    >
      <p class="font-bold">Expected</p>
    </div>
    <t-table
      class="dark:bg-gray-800 border-none text-xs"
      :headers="headers"
      :data="data"
    >
      <template v-slot:thead="props">
        <thead :class="props.theadClass">
          <tr :class="props.trClass">
            <th
              v-for="(item, index) in props.data"
              :key="index"
              :class="[props.thClass, item.icon ? 'px-1' : 'px-2']"
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
        <tr class="dark:bg-gray-800 dark:border-none" :class="props.trClass">
          <td :class="props.tdClass">
            <font-awesome-icon :icon="props.row[0]" class="m-1 w-4 text-black-400" />
          </td>
          <td :class="props.tdClass">
            {{ props.row[1] }}
          </td>
          <td :class="props.tdClass">
            {{ props.row[2] }}
          </td>
          <td :class="props.tdClass">
            {{ props.row[3] }}
          </td>
          <td :class="props.tdClass">
            {{ props.row[4] }}
          </td>

          <td class="px-1" :class="props.tdClass">
            {{ props.row[5] }}
          </td>
          <td class="px-1" :class="props.tdClass">
            {{ props.row[6] }}
          </td>
          <td class="px-1" :class="props.tdClass">
            {{ props.row[7] }}
          </td>

          <td :class="props.tdClass">
            {{ props.row[8] }}
          </td>
          <td :class="props.tdClass">
            {{ props.row[9] }}
          </td>
          <td :class="props.tdClass">
            {{ props.row[10] }}
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon :icon="props.row[11]" class="m-1 w-1 text-gray-400" />
          </td>
          <!--          -->
          <td class="px-1" :class="props.tdClass">
            <!-- <icon color="green" :name="props.row[15]" /> -->
            <font-awesome-icon :icon="props.row[12]" class="m-1 w-4 text-gray-400" />
          </td>
          <td class="px-1" :class="props.tdClass">
            <font-awesome-icon :icon="props.row[13]" class="m-1 w-4 text-gray-400" />
          </td>
          <td class="px-1" :class="props.tdClass">
            <font-awesome-icon :icon="props.row[14]" class="m-1 w-4 text-gray-400" />
          </td>
          <td class="px-1" :class="props.tdClass">
            <font-awesome-icon :icon="props.row[15]" class="m-1 w-4 text-gray-400" />
          </td>
        </tr>
      </template>
    </t-table>
  </table>
</template>

<script lang="js">
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
    color: 'black'
  },
  {
    icon: 'recycle',
    color: 'black'
  },
  {
    icon: 'paperclip',
    color: 'black'
  },
  {
    icon: 'pen',
    color: 'black'
  },
]
const data = [
  [
    'wifi', //Type
    '14-12 21:00', //ETA
    'POLLUX', //Vessel
    'DSNEH', //Berth
    '? ? S', //Mooring
    '', //B
    '2', //T
    'P', //P
    '28.47', //LOA
    '8.36', //BOA
    '5.00', //Draft
    'exclamation', //H, Icon exlamation
    '', //Icon award
    'recycle', //Icon recycle
    '', //Icon paperclip
    'pen' //Icon pen
  ],
  [
    'laptop', //Type
    '30-09 11:00', //ETA
    'CEASAR', //Vessel
    'JMLNE', //Berth
    '? ? U', //Mooring
    '', //B
    '', //T
    '', //P
    '22.70', //LOA
    '5.54', //BOA
    '2.00', //Draft
    '', //H, Icon exlamation
    'award', //Icon award
    '', //Icon recycle
    'paperclip', //Icon paperclip
    '' //Icon pen
  ],
  [
    'dharmachakra', //Type
    '30-09 11:00', //ETA
    'CEASAR', //Vessel
    'JMLNE', //Berth
    '? ? U', //Mooring
    '', //B
    '', //T
    '', //P
    '22.70', //LOA
    '5.54', //BOA
    '2.00', //Draft
    '', //H, Icon exlamation
    'award', //Icon award
    '', //Icon recycle
    'paperclip', //Icon paperclip
    '' //Icon pen
  ]
  
  
]

export default {
  data: () => ({
    headers,
    data
  }),
}
</script>
