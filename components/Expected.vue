<template>
  <div class="w-1/2">
    <t-table
      class="w-5/12"
      :headers="[
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
        'Agency',
        'ICON1',
        'ICON2',
        'ICON3',
        'ICON4',
        'ICON5',
      ]"
      :data="[
        ['A', '15:00', 'EST', '0.0?'],
        ['A', '15:00', 'EST', '0.0?'],
      ]"
    ></t-table>
  </div>
</template>
