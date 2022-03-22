<template>
  <v-card class="employee-card-item">
    <v-card-text>
      <figure>
        <img
          :src="item.imagePortraitUrl"
          :alt="item.name + ' Portrait Image'"
        />
        <figcaption v-text="item.name + ' Portrait Image'" />
      </figure>
    </v-card-text>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <div>
          <span class="d-block" v-text="item.name" />
          <span class="d-block">Office: {{ item.office }}</span>
        </div>
        <div>
          <a
            v-if="item.linkedIn"
            aria-label="LinkedIn Link"
            :href="`https://linkedin.com${item.linkedIn.trim()}`"
            target="_blank"
          >
            <v-icon>mdi-linkedin</v-icon>
          </a>
          <a
            v-if="item.gitHub"
            aria-label="Github Link"
            :href="`https://github.com/${item.gitHub.trim()}`"
            target="_blank"
          >
            <v-icon>mdi-github</v-icon>
          </a>
          <a
            aria-label="Twitter Link"
            v-if="item.twitter"
            :href="`https://twitter/${item.twitter.trim()}`"
            target="_blank"
          >
            <v-icon>mdi-twitter</v-icon>
          </a>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Employee } from "../../../types";

@Component({
  name: "EmployeeCardItem",
})
export default class EmployeeCardItem extends Vue {
  @Prop() item: Employee | undefined;
}
</script>

<style lang="scss">
.employee-card-item {
  img {
    max-width: 100%;
  }
  a {
    text-decoration: none;
  }
}
</style>
