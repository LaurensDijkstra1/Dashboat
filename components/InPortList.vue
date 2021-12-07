<template>
  <div class="py-4 px-8 bg-white shadow-lg rounded-t-lg dark:bg-gray-800 dark:border-none">
    <p class="font-bold">In port</p>

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
              :class="[props.thClass, item.icon ? '' : '']"
            >
              <template v-if="item.text">
                {{ item.text }}
              </template>
              <font-awesome-icon v-else-if="item.icon" :icon="item.icon" :class="`text-${item.color}-400`" class="w-4" />
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
          <td :class="props.tdClass">
            {{ props.row[12] }}
          </td>
          <td :class="props.tdClass">
            {{ props.row[13] }}
          </td>
          <td :class="props.tdClass">
            {{ props.row[14] }}
          </td>
          <!--          -->
          <td :class="props.tdClass">
            <!-- <icon color="green" :name="props.row[15]" /> -->
            <font-awesome-icon :icon="props.row[15]" class="w-4 text-green-400" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon :icon="props.row[16]" class="w-4 text-red-400" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon :icon="props.row[17]" class="w-4 text-gray-400" />
          </td>
          <td :class="props.tdClass">
            <font-awesome-icon :icon="props.row[18]" class="w-4 text-yellow-400" />
          </td>
        </tr>
      </template>
    </t-table>
  </div>
</template>

<script lang="js">
const headers = [
  {
    icon: 'ship',
    color: 'black'
  },
  {
    text: 'ETD',
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
    className: 'px-1',
  },
  {
    text: 'T',
    className: 'px-1',
  },
  {
    text: 'P',
    className: 'px-1',
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
    text: 'ETA',
  },
  {
    text: 'Berth',
  },
  {
    text: 'Mooring',
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
    '08-02 19:00', //ETD
    'AIRSET', //Vessel
    'WEBBH', //Berth
    '? ? ', //Mooring
    '', //B
    '', //T
    '', //P
    '86.00', //LOA
    '10.50', //BOA
    '', //Draft
    '', //H, Icon exlamation
    '05-11 23:59', //ETA
    'OKWWH', //Berth
    '? ? U', //Mooring
    '', //Icon award
    '', //Icon recycle
    '', //Icon paperclip
    'pen' //Icon pen
  ],
  [
    'laptop', //Type
    '30-03 12:00', //ETD
    'WATERSTAD', //Vessel
    'DSKHH', //Berth
    '? ? U', //Mooring
    '', //B
    '', //T
    '', //P
    '18.28', //LOA
    '6.70', //BOA
    '3.20', //Draft
    '', //H, Icon exlamation
    '', //ETA
    '', //Berth
    '', //Mooring
    'award', //Icon award
    'recycle', //Icon recycle
    '', //Icon paperclip
    '' //Icon pen
  ],
  [
    'dharmachakra', //Type
    '30-03 12:00', //ETD
    'WATERSTAD', //Vessel
    'DSKHH', //Berth
    '? ? U', //Mooring
    '', //B
    '', //T
    '', //P
    '18.28', //LOA
    '6.70', //BOA
    '3.20', //Draft
    '', //H, Icon exlamation
    '', //ETA
    '', //Berth
    '', //Mooring
    'award', //Icon award
    'recycle', //Icon recycle
    '', //Icon paperclip
    '' //Icon pen
  ],
  
]

export default {
  data: () => ({
    headers,
    data
  }),
}
</script>
