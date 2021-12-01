<template>
  <table>
    <t-table
      :headers="headers"
      :data="data"
    >

      <template slot="row" slot-scope="props">
        <tr :class="props.trClass">
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
          <td class="px-1" :class="props.tdClass">
            <!-- <icon color="green" :name="props.row[15]" /> -->
            <font-awesome-icon :icon="props.row[15]" class="ml-4 w-4 text-green-400" />
          </td>
          <td class="px-1" :class="props.tdClass">
            <font-awesome-icon :icon="props.row[16]" class="ml-4 w-4 text-red-400" />
          </td>
          <td class="px-1" :class="props.tdClass">
            <font-awesome-icon :icon="props.row[17]" class="ml-4 w-4 text-gray-400" />
          </td>
          <td class="px-1" :class="props.tdClass">
            <font-awesome-icon :icon="props.row[18]" class="ml-4 w-4 text-yellow-400" />
          </td>
        </tr>
      </template>
    </t-table>
  </table>
</template>

<script lang="js">

// import Icon from '~/components/Icon'

  const headers = [
    {
      id: 'type',
      value: 'type',
      text: 'Type',
      className: 'bg-gray-100',
    },
    {
      id: 'etd',
      value: 'etd',
      text: 'ETD',
      className: 'bg-gray-100',
    },
    {
      id: 'Vessel',
      value: 'Vessel',
      text: 'Vessel',
      className: 'bg-gray-100',
    },
    {
      id: 'Berth',
      value: 'Berth',
      text: 'Berth',
      className: 'bg-gray-100',
    },
    {
      id: 'Mooring',
      value: 'Mooring',
      text: 'Mooring',
      className: 'bg-gray-100',
    },
    {
      id: 'B',
      value: 'B',
      text: 'B',
      className: 'bg-gray-100 px-1',
    },
    {
      id: 'T',
      value: 't',
      text: 'T',
      className: 'bg-gray-100 px-1',
    },
    {
      id: 'P',
      value: 'p',
      text: 'P',
      className: 'bg-gray-100 px-1',
    },
    {
      id: 'LOA',
      value: 'LOA',
      text: 'LOA',
      className: 'bg-gray-100',
    },
    {
      id: 'BOA',
      value: 'BOA',
      text: 'BOA',
      className: 'bg-gray-100',
    },
    {
      id: 'Draft',
      value: 'Draft',
      text: 'Draft',
      className: 'bg-gray-100',
    },
    {
      id: 'H',
      value: 'H',
      text: 'H',
      className: 'bg-gray-100',
    },
    {
      id: 'ETA',
      value: 'ETA',
      text: 'ETA',
      className: 'bg-gray-100',
    },
    {
      id: 'BERTH',
      value: 'BERTH',
      text: 'BERTH',
      className: 'bg-gray-100',
    },
    {
      id: 'MOORING',
      value: 'MOORING',
      text: 'MOORING',
      className: 'bg-gray-100',
    },
    {
      id: 'ICON',
      value: 'ICON',
      text: 'ICON',
      className: 'bg-gray-100',
    },
    {
      id: 'ICON',
      value: 'ICON',
      text: 'ICON',
      className: 'bg-gray-100',
    },
    {
      id: 'ICON',
      value: 'ICON',
      text: 'ICON',
      className: 'bg-gray-100',
    },
    {
      id: 'ICON',
      value: 'ICON',
      text: 'ICON',
      className: 'bg-gray-100',
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
    [
      'A', 
      '15:00', 
      'EST', 
      '0.0?'
    ],
  ]

  export default {
    // components: { Icon },

    data: () => ({
      headers,
      data
    }),
  }
</script>