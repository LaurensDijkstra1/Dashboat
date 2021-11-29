<template>
    <div class="py-4 px-8 bg-white">
         <div class="w-full flex mb-4">
            <div class="w-1/12">
               <h1></h1>
            </div>
            <div class="w-1/12">
               <h1 class="font-bold">Position 1</h1>
            </div>
            <div class="w-10/12">
               <t-select :options="['DZL - Metal Park']" />
            </div>
         </div>
         <div class="w-full flex mb-2">
            <div class="w-1/12">
               <h1></h1>
            </div>
            <div class="w-1/12"></div>
            <div class="w-3/12">
               <p class="text-gray-400">Arrival</p>
            </div>
            <div class="w-3/12">
               <p class="text-gray-400">Departure</p>
            </div>
            <div class="w-3/12">
               <p class="text-gray-400">Mooring</p>
            </div>
         </div>
         <div class="w-full flex text-center mb-4">
            <div class="w-1/12">
               <h1></h1>
            </div>
            <div class="w-3/12 flex">
               <h1 class="mt-2">ETA</h1>
               <t-input class="ml-16 w-full" placeholder="dd-mm-yyyy hh-mm" />
               <font-awesome-icon
                  class="ml-4 w-4 text-gray-400"
                  :icon="['fas', 'calendar-alt']"
                  />
            </div>
            <div class="ml-12 w-3/12 flex">
               <h1 class=" mt-2">ETD</h1>
               <t-input class="ml-6 w-full" placeholder="dd-mm-yyyy hh-mm" />
               <font-awesome-icon
                  class="ml-6 w-4 text-gray-400"
                  :icon="['fas', 'calendar-alt']"
                  />
            </div>
            <div class=" ml-16 w-4/12 flex">
               <t-input class=" w-2/12" placeholder=".." />
               <t-input class="ml-8 w-2/12" placeholder=".." />
            </div>
         </div>
         <div class="w-full flex text-center">
            <div class="w-1/12">
               <h1></h1>
            </div>
            <div class="w-3/12 flex">
               <h1 class="mt-2">ATA</h1>
               <t-input class="ml-16 w-full" placeholder="ATA" />
               <font-awesome-icon
                  class="ml-4 w-4 text-gray-400"
                  :icon="['fas', 'calendar-alt']"
                  />
            </div>
            <div class="ml-12 w-3/12 flex">
               <h1 class=" mt-2">ATD</h1>
               <t-input class="ml-6 w-full" placeholder="ATD" />
               <font-awesome-icon
                  class="ml-6 w-4 text-gray-400"
                  :icon="['fas', 'calendar-alt']"
                  />
            </div>
            <div class=" ml-16 w-4/12 flex space-x-12  ">
               <label class="inline-flex items-center">
               <input type="radio" class="form-radio" name="accountType" value="personal">
               <span class="ml-2">Port</span>
               </label>
               <label class="inline-flex items-center">
               <input type="radio" class="form-radio" name="accountType" value="personal">
               <span class="ml-2">??</span>
               </label>
            </div>
         </div>
         <div class="w-full flex text-center">
            <div class="w-1/12">
               <h1></h1>
            </div>
            <div class="w-3/12 flex">
            </div>
            <div class="ml-12 w-3/12 flex">
            </div>
            <div class=" ml-16 w-4/12 flex space-x-12  ">
               <label class="inline-flex items-center">
               <input type="radio" class="form-radio" name="accountType" value="personal">
               <span class="ml-2">Port</span>
               </label>
               <label class="inline-flex items-center">
               <input type="radio" class="form-radio" name="accountType" value="personal">
               <span class="ml-2">??</span>
               </label>
            </div>
         </div>
         <!-- <div class="w-2/12">
            <t-input placeholder="dd-mm-yyyy hh-mm" />
            </div> -->
      </div>
   </div>
</template>