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
            {{ props.row[0] }}
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
            {{ props.row[11] }}
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
    text: 'Type',
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
    text: 'BERTH',
  },
  {
    text: 'MOORING',
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
const data = [
  [
    'Type',
    'ETD',
    'Vessel',
    'Berth',
    'Mooring',
    'B',
    'T',
    'P',
    'LOA',
    'BOA',
    'Draft',
    'H',
    'ETA',
    'BERTH',
    'MOORING',
    'award',
    'recycle',
    'paperclip',
    'pen',
  ],
  ['A', '15:00', 'EST', '0.0?'],
]

export default {
  data: () => ({
    headers,
    data
  }),
}
</script>
