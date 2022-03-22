<template>
  <v-layout row>
    <v-flex lg3 md4 sm6 xs12 v-for="(item, i) in items" :key="i">
      <EmployeeCardItem :item="item" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Employee } from "../../../types";
import EmployeeCardItem from "@/components/employee/CardItem.vue";

@Component({
  name: "EmployeeList",
  components: { EmployeeCardItem },
})
export default class EmployeeList extends Vue {
  @Prop({ default: () => [] }) items: Array<Employee> | undefined;
}
</script>
