<template>
  <div>
    <top-bar />
    <div class="home">
      <photos :photos="allPhotos" :isLoading="isLoading" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Photos from "@/components/Photos.vue";
import TopBar from "@/components/TopBar.vue";
import axiosConfig from "@/plugins/axiosConfig";

@Component({
  components: {
    Photos,
    TopBar
  }
})
export default class Home extends Vue {
  private isLoading = false;
  private $axios = axiosConfig;
  allPhotos: Array<object> = [];

  mounted() {
    this.getPhotos();
  }
  async getPhotos() {
    try {
      this.isLoading = true;
      const response = await this.$axios.get(
        `${process.env.VUE_APP_BASE_URL}/search/photos?query=african`
      );

      if (response.status === 200) {
        this.allPhotos = response.data.results.slice(0, 8);
      }
    } catch (error) {
      console.log(error.response);
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
</script>

<style lang="scss" scoped>
// TODO: media query for small SCREEN here
</style>
