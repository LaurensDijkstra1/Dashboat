<template lang="html">
  <div class="w-8/12 px-8 py-6 mt-4 text-left bg-white shadow-lg">
    <h3 class="text-2xl text-gray-800 font-bold text-center">
      Account aanmaken
    </h3>
    <form action="">
      <div class="mt-4">
        <div>
          <label class="block text-gray-800" for="">Voornaam</label>
          <input
            type="text"
            placeholder="Voornaam"
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
          <label class="block text-gray-800" for="">Achternaam</label>
          <input
            type="text"
            placeholder="Achternaam"
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
        <div class="mt-12">
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
        </div>
        <div class="flex items-baseline justify-between">
          <t-button
            class="px-6 py-2 h-12 mt-4 text-white rounded-lg hover:bg-blue-900"
            variant="primary"
          >
            Registreren
          </t-button>
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
