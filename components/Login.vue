<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <h3 class="text-2xl text-gray-800 font-bold text-center">
        Login to your account
      </h3>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="email">Email</label>
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
            <label class="block">Password</label>
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
              class="px-6 py-2 mt-4 text-white rounded-lg hover:bg-blue-900"
              variant="primary"
            >
              Login
            </t-button>
            <a href="#" class="text-sm text-gray-600 hover:underline"
              >Forgot password?</a
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
