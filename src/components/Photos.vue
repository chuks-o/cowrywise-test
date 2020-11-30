<template>
  <div>
    <div class="photo_container" v-if="photos.length">
      <div class="photo_area" v-for="(photo, index) in photos" :key="index">
        <div class="photo-area--body" :id="`myBtn-${photo.id}`" role="button">
          <img :src="photo.urls.regular" alt="photos" />
          <div class="photo_area--data">
            <p class="photo_area--dataname">
              {{ photo.user.first_name }} {{ photo.user.last_name }}
            </p>
            <p class="photo_area--datalocation">{{ photo.user.location }}</p>
          </div>
        </div>
        <photo-modal :photo="photo" :id="photo.id" :key="index" />
      </div>
    </div>

    <div v-if="photos.length === 0 && isLoading">
      <photo-placeholders />
    </div>

    <div v-if="!isLoading && photos.length === 0">
      <p>No pictures found in this search.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import PhotoPlaceholders from "@/components/PhotoPlaceholders.vue";
import PhotoModal from "@/components/PhotoModal.vue";

@Component({
  components: {
    PhotoPlaceholders,
    PhotoModal
  }
})
export default class Photos extends Vue {
  @Prop({ required: true, type: Array, default: [] }) photos!: Array<object>;
  @Prop({ required: true, type: Boolean, default: false }) isLoading!: boolean;
}
</script>

<style lang="scss">
.photo_container {
  column-count: 3;
  column-gap: 3em;
  .photo_area {
    margin-bottom: 1.7em;
    .photo-area--body {
      margin: 0;
      display: grid;
      position: relative;
      grid-template-rows: 1fr auto;
      break-inside: avoid;
      cursor: pointer;
      &:after {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 0.5em;
        background: var(--image-gradient);
        bottom: 0;
        left: 0;
        display: block;
        content: "";
      }
      img {
        width: 100%;
        grid-row: 1 / -1;
        grid-column: 1;
        max-width: 100%;
        border-radius: 0.5em;
        display: block;
      }
      .photo_area--data {
        position: absolute;
        z-index: 999;
        margin: 0 auto;
        left: 0;
        right: 0;
        bottom: 20px;
        text-align: left;
        width: 85%; /* Set the width of the positioned div */
        color: white;
        z-index: 1;
        .photo_area--dataname {
          font-weight: 500;
          font-size: 18px;
          margin: 0;
          padding: 0;
          z-index: 1;
        }
        .photo_area--datalocation {
          margin: 0;
          padding: 0;
          font-size: 14px;
          z-index: 1;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .photo_container {
    column-count: 1;
  }
}

@media (min-width: 600px) and (max-width: 768px) {
  .photo_container {
    column-count: 2;
  }
}
</style>
