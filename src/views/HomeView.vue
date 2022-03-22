<template>
  <v-layout row>
    <v-flex xs12 class="mt-2">
      <EmployeeFilter @filterChanged="(filter) => (this.filter = filter)" />
      <EmployeeList class="mt-4" :items="filteredItems" />
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
  loading = false;

  filter = {
    name: "",
    office: "",
  };

  items: Array<Employee> = [];

  get filteredItems() {
    let items = this.items;
    if (this.filter.name) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(this.filter.name.toLowerCase())
      );
    }

    if (this.filter.office) {
      items = items.filter((item) =>
        item.office.toLowerCase().includes(this.filter.office.toLowerCase())
      );
    }

    return items;
  }

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
        if (items.length) this.items = items;
      })
      .catch((e) => console.log(e))
      .finally(() => {
        this.loading = false;
      });
  }
}
</script>
