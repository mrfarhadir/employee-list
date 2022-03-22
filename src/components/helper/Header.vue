<template>
  <v-app-bar app>
    <HeaderLogo />
    <h3 class="font-weight-light ml-4">Farhad Mehryari</h3>
    <v-spacer></v-spacer>
    <v-chip color="darken-1" outlined>Assessment Project</v-chip>
  </v-app-bar>
</template>

<script>
import HeaderLogo from "./Logo";
export default {
  name: "MainHeader",
  components: { HeaderLogo },
};
</script>

<style scoped></style>
