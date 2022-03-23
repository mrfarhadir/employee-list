<template>
  <v-layout row>
    <v-flex xs12 class="mt-2">
      <EmployeeFilter @filterChanged="(filter) => (this.filter = filter)" />
      <div v-if="loading" class="d-flex justify-center py-8">
        <v-progress-circular
          indeterminate
          :width="2"
          :size="64"
          color="accent"
        />
      </div>
      <EmployeeList v-else class="mt-4" :items="filteredItems" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import EmployeeFilter from "@/components/home/Filter.vue";
import EmployeeList from "@/components/employee/List.vue";
import { Component, Vue } from "vue-property-decorator";
import { Api } from "@/api";
import { Employee } from "@/types";

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
  x = 0;
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
    new Api("http://127.0.0.1:3000/v3/")
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
