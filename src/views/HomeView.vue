<template>
  <v-layout row>
    <v-flex xs12>
      <EmployeeFilter />
      <EmployeeList :items="items" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import EmployeeFilter from "@/components/home/Filter.vue";
import EmployeeList from "@/components/employee/List.vue";
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "../../types";
import { Api } from "@/api";

@Component({
  components: {
    EmployeeFilter,
    EmployeeList,
  },
})
export default class HomeView extends Vue {
  items: Array<Employee> = [];
  loading = false;

  mounted() {
    this.getEmployees();
  }

  getEmployees() {
    this.loading = true;
    new Api(
      "http://api-dev.1337co.de/v3/",
      "api-key 14:2022-03-21:emelie.nilsson@1337.tech 0fdaf3cfc7f618f7c1f514f3bace24d3286593618f144a20298b125fba5eaff8"
    )
      .employeesList()
      .then((items) => {
        this.items = items;
      })
      .catch((e) => console.log(e))
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
