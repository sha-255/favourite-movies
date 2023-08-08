import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const movies = ref([]);
  const activeTab = ref(2);

  const moviesOnLocalStorage = localStorage.getItem("movies");
  if (moviesOnLocalStorage) {
    movies.value = JSON.parse(moviesOnLocalStorage);
  }

  const watchedMovies = computed(() =>
    movies.value.filter((el) => el.isWatched)
  );
  const totalCountMovies = computed(() => movies.value.length);

  const setActiveTab = (id) => {
    activeTab.value = id;
  };
  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id == id);
    movies.value[idx].isWatched = !movies.value[idx].isWatched;
  };

  watch(
    movies,
    (state) => {
      localStorage.setItem("movies", JSON.stringify(state));
    },
    { deep: true }
  );

  return {
    movies,
    activeTab,
    watchedMovies,
    totalCountMovies,
    setActiveTab,
    toggleWatched,
  };
});
