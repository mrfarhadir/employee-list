<template>
  <v-layout row>
    <v-flex xs12>
      <div class="d-flex justify-space-between">
        <h3 class="font-weight-light">
          Employee List: <v-chip>{{ items.length }}</v-chip>
        </h3>
        <div>
          Layout:
          <v-btn
            height="32"
            width="32"
            class="mx-2"
            :color="layout === 'grid' ? 'accent' : ''"
            @click="layout = 'grid'"
          >
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
          <v-btn
            height="32"
            width="32"
            :color="layout === 'list' ? 'accent' : ''"
            @click="layout = 'list'"
          >
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </div>
      </div>
    </v-flex>
    <v-layout row v-show="layout === 'grid'">
      <v-flex lg3 md4 sm6 xs12 v-for="(item, i) in items" :key="i">
        <EmployeeCardItem :item="item" />
      </v-flex>
    </v-layout>
    <v-layout row v-show="layout === 'list'">
      <v-flex lg12 md12 sm6 xs12 v-for="(item, i) in items" :key="i">
        <EmployeeListItem :item="item" />
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Employee } from "../../../types";
import EmployeeCardItem from "@/components/employee/CardItem.vue";
import EmployeeListItem from "@/components/employee/ListItem.vue";

@Component({
  name: "EmployeeList",
  components: { EmployeeListItem, EmployeeCardItem },
})
export default class EmployeeList extends Vue {
  @Prop({ default: () => [] }) items: Array<Employee> | undefined;

  layout = "grid";
}
</script>
