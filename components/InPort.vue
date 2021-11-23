<template>
  <div class="w-full">
    <div class="w-full -my-2 overflow-x-auto sm:-mx-2 lg:-mx-2">
      <div class="w-full py-2 align-middle inline-block sm:px-2 lg:px-2">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="w-full divide-y divide-black-200">
            <thead class="bg-white divide-gray-200 text-left">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left
                    font-bold
                    text-gray-800
                    uppercase
                    tracking-wider
                  "
                >
                  <div>
                    <h1>In-port</h1>
                  </div>
                </th>
              </tr>
            </thead>
          </table>

          <table class="min-w-full space-x-0 divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    w-0
                    px-3
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-2
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  ETD
                </th>
                <th
                  scope="col"
                  class="
                    w-2
                    px-3
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Vessel
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-2
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Berth
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Mooring
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-6
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  B
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  T
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-6
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  P
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  LOA
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-2
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  BOA
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Draft
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-6
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  H
                </th>
                <th
                  scope="col"
                  class="
                    w-4
                    px-2
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  ETA
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-6
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Berth
                </th>
                <th
                  scope="col"
                  class="
                    w-3
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  MOORING
                </th>
                <th
                  scope="col"
                  class="
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  <span class="material-icons"> track_changes </span>
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-6
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  <span class="material-icons"> track_changes </span>
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  <span class="material-icons"> assignment_late </span>
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-4
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  <span class="material-icons"> file_upload </span>
                </th>
                <th
                  scope="col"
                  class="
                    w-1
                    px-0
                    py-1.5
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  <span class="material-icons"> edit </span>
                </th>
              </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="w-1 px-3 py-1.5 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://cdn-icons-png.flaticon.com/512/206/206887.png"
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td class="w-0 px-2 py-1.5 whitespace-nowrap">
                  <div class="text-sm text-gray-900"><b>08-10 </b></div>
                  <div class="text-sm text-gray-900">17:00</div>
                </td>
                <td class="px-3 py-4 whitespace-nowrap">
                  <span
                    class="
                      w-1
                      px-0
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                  >
                    VVS
                  </span>
                </td>
                <td class="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                  AUT05
                </td>
                <td class="px-0 py-4 whitespace-nowrap text-sm text-gray-500">
                  0.0?s
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>

                <td class="px-0 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">B</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>

                <td class="px-0 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">11.00</div>
                </td>

                <td class="px-3 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">3.60</div>
                </td>

                <td class="px-0 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">0.80</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>

                <td class="px-2 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900"><b>04-11</b></div>
                  <div class="text-sm text-gray-900">19:00</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">DL1HH</div>
                </td>

                <td class="px-0 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">??</div>
                </td>

                <td class="w-1 px-1 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>

                <td class="px-8 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>

                <td class="px-2 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>

                <td class="px-2 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">-</div>
                </td>
              </tr>

              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
