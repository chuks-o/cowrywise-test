<template>
  <div class="top-bar">
    <div class="top-bar__search">
      <search-bar />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import SearchBar from '@/components/SearchBar.vue';

@Component({
  components: {
    SearchBar
  }
})
export default class TopBar extends Vue {}
</script>

<style lang="scss">
.top-bar {
  background: var(--grey);
  height: 270px;
  width: var(--w100);
  display: flex;
  justify-content: center;
  align-items: center;
  .top-bar__search {
    width: var(--w75);
    max-width: 75%;
  }
}
</style>
