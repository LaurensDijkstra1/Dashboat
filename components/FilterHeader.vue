<template>
  <header class="border border-gray-200 rounded bg-white px-3 py-4 mb-6 flex justify-between">
    <section class="flex flex-row items-center space-x-4">
      <p>Scheepshaven</p>

      <t-select
        :options="['Eemshaven']"
      />

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

      <button class="bg-white border-gray-300 focus:border-blue-500 py-1 px-4 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 text-sm border-gray-300 focus:border-blue-500">
        Reset
      </button>

      <t-select
        :options="['In Port - Expected']"
      />
    </section>

    <button class="g-blue-500 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
      Night Mode
    </button>
  </header>
</template>

<script>
export default { }
</script>

<style scoped>

</style>
