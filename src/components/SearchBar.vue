<template>
  <div class="search-bar">
    <div class="search-bar__area" v-if="$router.currentRoute.name === 'Home'">
      <div>
        <div class="search-bar__icondiv">
          <img src="@/assets/searchicon.png" alt="icon" />
        </div>
        <input
          v-model="searchTerm"
          class="search-bar__input"
          placeholder="Search for photo"
          type="text"
          @keyup.enter="
            $router.push({ name: 'Search', params: { search: searchTerm } })
          "
          label="Search for photo"
          aria-label="Search for photo"
        />
      </div>
    </div>
    <div v-else>
      <h1>
        <template>
          <span v-if="searching">
            Searching for
          </span>
          <span v-else>Search Results for</span>
        </template>
        <span class="searchbar-text__muted">
          "{{ $router.currentRoute.params.search }}"
        </span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axiosConfig from "@/plugins/axiosConfig";
import eventBus from "../EventBus";

@Component
export default class SearchBar extends Vue {
  searchTerm = "";
  searching = false;

  mounted() {
    eventBus.$on("searchingPhoto", (value: boolean) => {
      this.searching = value;
    });
  }
}
</script>

<style lang="scss">
.search-bar {
  .searchbar-text__muted {
    opacity: 0.5;
  }
  .search-bar__area {
    width: 100%;
    .search-bar__icondiv {
      img {
        width: 25px;
        height: 25px;
      }
      position: absolute;
      top: 123px;
      padding-left: 2%;
    }
    .search-bar__input {
      border: none;
      border-radius: 7px;
      outline: none;
      padding: 1.3em 0;
      font-size: 16px;
      box-shadow: 0 7px 40px 0 #bac1ca;
      width: 100%;
      text-indent: 8%;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-weight: 500;
        color: #2c3e50;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .search-bar {
    .search-bar__area {
      .search-bar__input {
        text-indent: 18%;
      }
    }
  }
}
</style>
