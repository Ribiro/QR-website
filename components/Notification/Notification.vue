<template>
  <v-snackbar
    :timeout="-1"
    v-model="snackbar"
    class="notification"
  >
    <div class="action">
      We appreciate you took time took your time to visit our website! Qrmenu Subscription is now Ksh. 100 monthly, or Ksh. 1000 yearly. Have a good time going through our website!
    </div>
    <v-btn
      class="button"
      color="secondary"
      @click="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true
    }
  }
}
</script>
