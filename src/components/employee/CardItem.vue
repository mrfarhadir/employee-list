<template>
  <v-card class="employee-card-item">
    <v-card-text>
      <img :src="item.imagePortraitUrl" :alt="item.name" />
    </v-card-text>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <div>
          <span class="d-block" v-text="item.name" />
          <span class="d-block">Office: {{ item.office }}</span>
        </div>
        <div>
          <a :href="`https://linkedin.com/in/${item.linkedIn}`" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </a>
          <a :href="`https://github.com/${item.gitHub}`" target="_blank">
            <v-icon>mdi-github</v-icon>
          </a>
          <a :href="`https://twitter/${item.twitter}`" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </a>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class EmployeeCardItem extends Vue {
  @Prop() item: Employee | undefined;
}
</script>

<style>
.employee-card-item img {
  max-width: 100%;
}
</style>
