<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
      type="text"
      class="search-input"
      placeholder="Input movie"
      v-model="searchMovie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <Movie
      v-for="mov of searchStore.movies"
      :key="mov.id"
      :movie="mov"
      :is-search="true"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "../stores/SearchStore.js";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";

const searchStore = useSearchStore();

const searchMovie = ref("spiderman");
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
