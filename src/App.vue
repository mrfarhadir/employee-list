<template>
  <v-app>
    <MainHeader />
    <v-main>
      <v-container grid-list-md>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MainHeader from "@/components/helper/Header.vue";

export default Vue.extend({
  name: "App",
  components: { MainHeader },
  data: () => ({
    //
  }),
});
</script>
<style>
.v-app-bar {
  box-shadow: 0 6px 9px rgba(120, 120, 120, 0.3) !important;
}
</style>
