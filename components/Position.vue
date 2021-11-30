<template>
  <div class="py-4 px-8 bg-white dark:bg-gray-600 dark:border-none">
    <div class="w-full flex mb-4">
      <!-- <div class="w-1/12">
        <h1></h1>
      </div> -->
      <div class="w-2/12">
        <h1 class="font-bold">Position 1</h1>
      </div>
      <div class="w-10/12">
        <t-select :options="['DZL - Metal Park']" />
      </div>
    </div>
    <div class="w-full flex mb-2">
      <!-- <div class="w-1/12">
        <h1></h1>
      </div> -->
      <div class="w-1/12"></div>
      <div class="w-3/12">
        <p class="ml-8 text-gray-400">Arrival</p>
      </div>
      <div class="ml-20 w-3/12">
        <p class="text-gray-400">Departure</p>
      </div>
      <div class="w-3/12">
        <p class="text-gray-400">Mooring</p>
      </div>
    </div>
    <div class="w-full flex text-center mb-4">
      <!-- <div class="w-1/12">
        <h1></h1>
      </div> -->
      <div class="w-4/12 flex">
        <h1 class="mt-2">ETA</h1>
        <t-input
          type="datetime-local"
          class="
            ml-16
            w-full
            dark:bg-gray-800 dark:border-none
            placeholder-gray-500::placeholder
            dark:text-gray-400
          "
          placeholder="dd-mm-yyyy hh-mm"
        />
        <!-- <font-awesome-icon
          class="ml-4 w-4 dark:text-gray-400"
          :icon="['fas', 'calendar-alt']"
        /> -->
      </div>
      <div class="ml-12 w-3/12 flex">
        <h1 class="mt-2">ETD</h1>
        <t-input
          type="datetime-local"
          class="ml-6 w-full dark:bg-gray-800 dark:border-none"
          placeholder="dd-mm-yyyy hh-mm"
        />
        <!-- <font-awesome-icon
          class="ml-6 w-4 text-gray-400"
          :icon="['fas', 'calendar-alt']"
        /> -->
      </div>
      <div class="ml-16 w-4/12 flex">
        <t-input
          class="w-2/12 dark:bg-gray-800 dark:border-none"
          placeholder=".."
        />
        <t-input
          class="ml-8 w-2/12 dark:bg-gray-800 dark:border-none"
          placeholder=".."
        />
      </div>
    </div>
    <div class="w-full flex text-center">
      <!-- <div class="w-1/12">
        <h1></h1>
      </div> -->
      <div class="w-4/12 flex">
        <h1 class="mt-2">ATA</h1>
        <t-input
          type="datetime-local"
          class="ml-16 w-full dark:bg-gray-800 dark:border-none"
          placeholder="ATA"
        />
        <!-- <font-awesome-icon
          class="ml-4 w-4 text-gray-400"
          :icon="['fas', 'calendar-alt']"
        /> -->
      </div>
      <div class="ml-12 w-3/12 flex">
        <h1 class="mt-2">ATD</h1>
        <t-input
          type="datetime-local"
          class="ml-6 w-full dark:bg-gray-800 dark:border-none"
          placeholder="ATD"
        />
        <!-- <font-awesome-icon
          class="ml-6 w-4 text-gray-400"
          :icon="['fas', 'calendar-alt']"
        /> -->
      </div>
      <div class="ml-16 w-4/12 flex space-x-12">
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio dark:bg-gray-800 dark:border-none"
            name="accountType"
            value="personal"
          />
          <span class="ml-2">Port</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio dark:bg-gray-800 dark:border-none"
            name="accountType"
            value="personal"
          />
          <span class="ml-2">??</span>
        </label>
      </div>
    </div>
    <div class="w-full flex text-center">
      <div class="w-1/12">
        <h1></h1>
      </div>
      <div class="w-3/12 flex"></div>
      <div class="ml-12 w-3/12 flex"></div>
      <div style="padding-left: 4px" class="ml-16 w-4/12 flex space-x-12">
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio dark:bg-gray-800 dark:border-none"
            name="accountType"
            value="personal"
          />
          <span class="ml-2">Port</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio dark:bg-gray-800 dark:border-none"
            name="accountType"
            value="personal"
          />
          <span class="ml-2">??</span>
        </label>
      </div>
    </div>
    <div class="w-full flex mb-4">
      <!-- <div class="w-1/12">
        <h1></h1>
      </div> -->
      <div class="w-1/12">
        <h1 class="font-bold">Containers</h1>
      </div>
    </div>
    <div class="w-full flex text-center mb-4">
      <!-- <div class="w-1/12">
        <h1></h1>
      </div> -->
      <div class="w-8/12 flex">
        <h1 class="mt-2">Discharge</h1>
        <p class="ml-6 mt-2">20 ft</p>
        <t-input
          class="ml-4 w-12 dark:bg-gray-800 dark:border-none"
          placeholder="0"
        />

        <p class="ml-6 mt-2">20 ft</p>
        <t-input
          class="ml-4 w-12 dark:bg-gray-800 dark:border-none"
          placeholder="0"
        />

        <p class="ml-6 mt-2">20 ft</p>
        <t-input
          class="ml-4 w-12 dark:bg-gray-800 dark:border-none"
          placeholder="0"
        />
      </div>
    </div>
    <div class="w-full flex text-center mb-4">
      <!-- <div class="w-1/12">
        <h1></h1>
      </div> -->
      <div class="w-8/12 flex">
        <h1 class="mt-2">Load</h1>
        <p style="padding-left: 4px" class="ml-14 mt-2">20 ft</p>
        <t-input
          class="ml-4 w-12 dark:bg-gray-800 dark:border-none"
          placeholder="0"
        />

        <p class="ml-6 mt-2">20 ft</p>
        <t-input
          class="ml-4 w-12 dark:bg-gray-800 dark:border-none"
          placeholder="0"
        />

        <p class="ml-6 mt-2">20 ft</p>
        <t-input
          class="ml-4 w-12 dark:bg-gray-800 dark:border-none"
          placeholder="0"
        />
      </div>
    </div>
    <div class="w-full flex">
      <!-- <div class="w-1/12"></div> -->
      <div class="w-1/12">
        <!-- far fa-plus-square -->
        <font-awesome-icon
          class="ml-4 w-4 text-gray-400"
          :icon="['fas', 'minus-square']"
        />
        <font-awesome-icon
          class="ml-4 w-4 text-gray-400"
          :icon="['fas', 'plus-square']"
        />
      </div>
      <div style="padding-left: 8px" class="w-1/12">
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio dark:bg-gray-800 dark:border-none"
            name="accountType"
            value="personal"
          />
          <span class="ml-2">Other</span>
        </label>

        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio dark:bg-gray-800 dark:border-none"
            name="accountType"
            value="personal"
          />
          <span class="ml-2">Discharge</span>
        </label>

        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio dark:bg-gray-800 dark:border-none"
            name="accountType"
            value="personal"
          />
          <span class="ml-2">Load</span>
        </label>
      </div>
      <div class="w-1/12">
        <t-input
          class="ml-16 w-12 dark:bg-gray-800 dark:border-none"
          placeholder="0"
        />
      </div>
      <div class="ml-20 w-8/12">
        <t-select :options="['?']" />
      </div>
    </div>
  </div>
</template>
