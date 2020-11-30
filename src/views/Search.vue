<template>
  <div>
    <top-bar />
    <div class="home">
      <photos :photos="allPhotos" :isLoading="isLoading" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Photos from "@/components/Photos.vue";
import TopBar from "@/components/TopBar.vue";
import axiosConfig from "@/plugins/axiosConfig";
import eventBus from "../EventBus"; //eventBus

@Component({
  components: {
    Photos,
    TopBar
  }
})
export default class SearchView extends Vue {
  private isLoading = false;
  private allPhotos: Array<object> = [];
  private $axios = axiosConfig;

  mounted() {
    this.getSearchedPhotos();
  }
  async getSearchedPhotos() {
    try {
      this.isLoading = true;
      eventBus.$emit("searchingPhoto", true);
      const response = await this.$axios.get(
        `${process.env.VUE_APP_BASE_URL}/search/photos?query=${this.$router.currentRoute.params.search}`
      );

      if (response.status === 200) {
        this.allPhotos = response.data.results.slice(0, 8);
      }
    } catch (error) {
      console.log(error.response);
    }
    setTimeout(() => {
      eventBus.$emit("searchingPhoto", false);
      this.isLoading = false;
    }, 3000);
  }
}
</script>

<style></style>
