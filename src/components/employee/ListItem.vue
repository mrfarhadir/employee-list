<template>
  <v-card class="employee-list-item">
    <v-card-text>
      <div class="d-flex">
        <figure>
          <img
            :src="item.imagePortraitUrl || '/images/user.png'"
            :alt="item.name + ' Portrait Image'"
          />
          <figcaption v-text="item.name + ' Portrait Image'" />
        </figure>
        <div class="flex-grow-1 d-flex ml-4 justify-space-between">
          <div>
            <span class="d-block" v-text="item.name" />
            <span class="d-block"
              >Office: <b>{{ item.office }}</b></span
            >
          </div>
          <div>
            <a
              v-if="item.linkedIn"
              aria-label="LinkedIn Link"
              class="mx-2"
              :href="`https://linkedin.com${item.linkedIn.trim()}`"
              target="_blank"
            >
              <v-icon>mdi-linkedin</v-icon>
            </a>
            <a
              v-if="item.gitHub"
              aria-label="Github Link"
              class="mx-2"
              :href="`https://github.com/${item.gitHub.trim()}`"
              target="_blank"
            >
              <v-icon>mdi-github</v-icon>
            </a>
            <a
              aria-label="Twitter Link"
              v-if="item.twitter"
              class="ml-2"
              :href="`https://twitter/${item.twitter.trim()}`"
              target="_blank"
            >
              <v-icon>mdi-twitter</v-icon>
            </a>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Employee } from "@/types";

@Component({
  name: "EmployeeListItem",
})
export default class EmployeeListItem extends Vue {
  @Prop() item: Employee | undefined;
}
</script>

<style lang="scss">
.employee-list-item {
  img {
    max-width: 64px;
  }
  a {
    text-decoration: none;
  }
}
</style>
