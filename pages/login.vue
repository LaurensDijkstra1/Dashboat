<template lang="html">
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
          <div class="flex">
            <t-button
              class="
                px-6
                h-12
                py-2
                mt-4
                text-white
                rounded-lg
                hover:bg-blue-900
              "
              variant="primary"
            >
              Login
            </t-button>
            <t-button
              to="./register"
              class="px-6 h-12 py-2 mt-4 ml-4 text-white rounded-lg"
              variant="primary"
            >
              Register
            </t-button>
          </div>
          <a href="#" class="text-sm text-gray-600 hover:underline"
            >Wachtwoord vergeten?</a
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="js">
export default {
  components: {},
  layout: "auth",
};
</script>
