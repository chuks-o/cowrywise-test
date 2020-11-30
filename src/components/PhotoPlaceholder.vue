<template>
  <div style="margin-bottom: 1.7em;">
    <svg width="250" :height="height" xmlns="http://www.w3.org/2000/svg">
      <rect
        style="fill: #eee;"
        rx="7"
        ry="7"
        width="250"
        :height="height"
      ></rect>
      <svg y="78%">
        <rect
          id="svg_1"
          height="13"
          width="110"
          y="0"
          x="15"
          rx="3"
          ry="3"
          fill="#dddede"
          style="margin-top:auto"
        ></rect>
        <rect
          id="svg_2"
          height="13"
          width="80"
          y="20"
          x="15"
          rx="3"
          ry="3"
          fill="#dddede"
        ></rect>
      </svg>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PhotoPlaceholder extends Vue {
  @Prop({ required: false, default: 300 }) readonly height!: number;
}
</script>

<style lang="scss"></style>
