<template>
  <div class="w-full">
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
      <h1>Inland Vessel Visit - Van der Veen shipping - Expected</h1>
    </div>
    <div
      class="
        space-x-4
        py-4
        px-8
        bg-gray-100
        flex
        border border-gray-300
        dark:bg-gray-800 dark:border-none
      "
    >
      <t-button variant="primary">Save & Quit </t-button>
      <t-button class="bg-white">Save & New </t-button>
      <t-button class="bg-white">Use Defaults </t-button>
      <t-button class="bg-white">Reset </t-button>
      <t-button class="bg-white">Quit </t-button>
    </div>
    <div class="py-4 px-8 bg-white dark:bg-gray-600 dark:border-none">
      <div class="w-full flex">
        <div class="w-1/12">
          <p class="font-bold mb-6">Vessel</p>
          <div class="text-gray-400">
            <p>LOA</p>
            <p>BOA</p>
            <p>Cargo</p>
            <p>Autopilot</p>
          </div>
        </div>
        <div class="w-5/12 ml-8">
          <t-select class="mb-4" :options="['VVS', '-']" />
          <div class="flex">
            <div class="w-6/12">
              <p>6.88m</p>
              <p>4.45m</p>
              <p>3038 T</p>
              <p>Yes</p>
            </div>
            <div class="w-6/12 text-gray-400">
              <p>Flag</p>
              <p>Phone</p>
              <p>Debtor</p>
              <p>Email</p>
              <p>MMSI</p>
            </div>
            <div class="w-6/12">
              <p>6.88m</p>
              <p>4.45m</p>
              <p>3038 T</p>
              <p>Yes</p>
              <p>-</p>
            </div>
          </div>
        </div>
        <div class="ml-12 w-6/12">
          <h1 class="mb-6">Motorvrachtschip</h1>
          <t-textarea
            class="h-32 dark:bg-gray-800 dark:border-none"
            placeholder="Pernament ship remarkts "
            name="my-textarea"
          />
        </div>
      </div>
    </div>
    <div class="py-4 px-8 bg-grey-100">
      <div class="w-full flex">
        <div class="w-1/12">
          <h1>Vessel</h1>
        </div>
        <div class="w-5/12 space-y-4">
          <h1>VVS</h1>
          <t-select :options="['DEEME - Emden', 'DEL - Delfzijl']" />
          <t-select :options="['Next port', 'Rotterdam, NL']" />
        </div>
        <div class="w-6/12">
          <t-textarea
            class="ml-6 h-32 dark:bg-gray-600 dark:border-none"
            placeholder="Visit remarkts"
            name="my-textarea"
          />
        </div>
      </div>
    </div>
  </div>
</template>
