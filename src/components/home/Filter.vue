<template>
  <v-card color="primary" dark>
    <v-card-title>
      <v-icon>mdi-filter</v-icon>
      <h3 class="ml-3 font-weight-light">Filter by name and office</h3>
    </v-card-title>
    <v-card-text>
      <div class="d-block d-sm-flex">
        <v-text-field
          v-model="filter.name"
          prepend-inner-icon="mdi-account"
          filled
          dense
          flat
          outlined
          prefix="Name"
          color="accent"
        />
        <v-text-field
          v-model="filter.office"
          class="ml-4"
          prepend-inner-icon="mdi-office-building"
          filled
          dense
          flat
          outlined
          prefix="office"
          color="accent"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component({})
export default class EmployeeFilter extends Vue {
  filter = {
    name: "",
    office: "",
  };

  @Watch("filter", { deep: true })
  filterChanged() {
    this.$emit("filterChanged", this.filter);
  }
}
</script>

<style scoped></style>
