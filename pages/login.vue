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
            v-model="auth.email"
            type="text"
            placeholder="Email"
            class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <div class="mt-4">
          <label class="block text-gray-800">Wachtwoord</label>
          <input
            v-model="auth.password"
            type="password"
            placeholder="Password"
            class=" w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
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
              type="button"
              @click="onClicked"
              class="px-6 h-12 py-2 mt-4 text-white rounded-lg hover:bg-blue-900"
              variant="primary"
            >
              Login
            </t-button>
          </div>
        </div>
        <div class="fixed z-100 bottom-0 inset-x-0 pb-2 sm:pb-5 w-4/12">
          <t-alert
            v-if="snackbarState"
            timeout="4000"
            absolute
            bottom
            center
            show
          >
          </t-alert>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="js">
export default {
  components: {},
  layout: "auth",
  data(){
    return {
      snackbarState: false,
      snackbarText: 'No error message',
      auth: {
        email:'',
        password:'',
      }
    };
  },
  methods: {
    onClicked(){
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error) {
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        $nuxt.$router.push('/')
      })
    }
  }
};
</script>
