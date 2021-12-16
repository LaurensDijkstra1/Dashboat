<template>
<h1>Logged Out</h1>
</template>

<script>
export default {
  asyncData() {
      $nuxt.$fire.auth.signOut()
  }
}
</script>
