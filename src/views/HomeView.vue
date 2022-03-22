<template>
  <v-layout row>
    <v-flex xs12>
      <EmployeeFilter />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import EmployeeFilter from "@/components/home/Filter.vue";

export default Vue.extend({
  name: "HomeView",
  components: { EmployeeFilter },
});
</script>
