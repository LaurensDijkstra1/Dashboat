<template>
      <table>
        <t-table
          :headers="[
            {
              id: 'type',
              value: 'type',
              text: 'Type',
              className: 'bg-grey-100',
            },
            {
              id: 'etd',
              value: 'etd',
              text: 'ETD',
              className: 'bg-grey-100',
            },
            {
              id: 'Vessel',
              value: 'Vessel',
              text: 'Vessel',
              className: 'bg-grey-100',
            },
            {
              id: 'Berth',
              value: 'Berth',
              text: 'Berth',
              className: 'bg-grey-100',
            },
            {
              id: 'Mooring',
              value: 'Mooring',
              text: 'Mooring',
              className: 'bg-grey-100',
            },
            {
              id: 'B',
              value: 'B',
              text: 'B',
              className: 'bg-grey-100 px-1',
            },
            {
              id: 'T',
              value: 't',
              text: 'T',
              className: 'bg-grey-100 px-1',
            },
            {
              id: 'P',
              value: 'p',
              text: 'P',
              className: 'bg-grey-100 px-1',
            },
            {
              id: 'LOA',
              value: 'LOA',
              text: 'LOA',
              className: 'bg-grey-100',
            },
            {
              id: 'BOA',
              value: 'BOA',
              text: 'BOA',
              className: 'bg-grey-100',
            },
            {
              id: 'Draft',
              value: 'Draft',
              text: 'Draft',
              className: 'bg-grey-100',
            },
            {
              id: 'H',
              value: 'H',
              text: 'H',
              className: 'bg-grey-100',
            },
            {
              id: 'ETA',
              value: 'ETA',
              text: 'ETA',
              className: 'bg-grey-100',
            },
            {
              id: 'BERTH',
              value: 'BERTH',
              text: 'BERTH',
              className: 'bg-grey-100',
            },
            {
              id: 'MOORING',
              value: 'MOORING',
              text: 'MOORING',
              className: 'bg-grey-100',
            },
            {
              id: 'ICON',
              value: 'ICON',
              text: 'ICON',
              className: 'bg-grey-100',
            },
            {
              id: 'ICON',
              value: 'ICON',
              text: 'ICON',
              className: 'bg-grey-100',
            },
            {
              id: 'ICON',
              value: 'ICON',
              text: 'ICON',
              className: 'bg-grey-100',
            },
            {
              id: 'ICON',
              value: 'ICON',
              text: 'ICON',
              className: 'bg-grey-100',
            },
            {
              id: 'ICON',
              value: 'ICON',
              text: 'ICON',
              className: 'bg-grey-100',
            },
          ]"
          :data="[
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
              'minus-circle',
              'recycle',
              'ICON3',
              'ICON4',
              'ICON5',
            ],
            ['A', '15:00', 'EST', '0.0?'],
          ]"
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


              <td :class="props.tdClass">
                {{ props.row[15] }}
              </td>
              <td :class="props.tdClass">
                <font-awesome-icon :icon="props.row[16]" class="w-10" />
              </td>
              <td :class="props.tdClass">
                {{ props.row[17] }}
              </td>
              <td :class="props.tdClass">
                {{ props.row[18] }}
              </td>
              <td :class="props.tdClass">
                {{ props.row[19] }}
              </td>     
            </tr>
          </template>
        </t-table>
      </table>     
</template>