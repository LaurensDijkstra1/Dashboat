<template>
  <div class="flex">
    <div
      class="
        flex flex-col
        w-4/12
        items-center
        justify-center
        max-h-screen
        bg-gray-100
      "
    >
      <img class="w-40 mb-12" src="@/assets/img/seaportslogo.png" />
      <div class="w-8/12 px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl text-gray-800 font-bold text-center">
          Login op uw account
        </h3>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block text-gray-800" for="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                "
              />
            </div>
            <div class="mt-4">
              <label class="block text-gray-800">Wachtwoord</label>
              <input
                type="password"
                placeholder="Password"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                "
              />
              <div class="flex mt-6">
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span class="ml-2 text-gray-400">Account onthouden </span>
                </label>
              </div>
            </div>
            <div class="flex items-baseline justify-between">
              <t-button
                class="px-6 py-2 mt-4 text-white rounded-lg hover:bg-blue-900"
                variant="primary"
              >
                Login
              </t-button>
              <a href="#" class="text-sm text-gray-600 hover:underline"
                >Wachtwoord vergeten?</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
