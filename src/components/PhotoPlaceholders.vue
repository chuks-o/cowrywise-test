<template>
  <div class="column">
    <div>
      <placeholder height="300" />
    </div>
    <div>
      <placeholder height="330" />
    </div>
    <div>
      <placeholder height="350" />
    </div>
    <div>
      <placeholder height="360" />
    </div>
    <div>
      <placeholder height="360" />
    </div>
    <div>
      <placeholder height="250" />
    </div>
    <div>
      <placeholder height="230" />
    </div>
    <div>
      <placeholder height="300" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Placeholder from "@/components/PhotoPlaceholder.vue";

@Component({
  components: {
    Placeholder
  }
})
export default class PhotoPlaceholders extends Vue {}
</script>

<style>
.column {
  column-count: 3;
  column-gap: 3em;
}
@media only screen and (max-width: 600px) {
  .column {
    column-count: 1;
  }
}

@media (min-width: 600px) and (max-width: 768px) {
  .column {
    column-count: 2;
  }
}
</style>
