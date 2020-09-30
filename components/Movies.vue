<template>
  <v-row>
    <v-col v-for="(movie, m) in movies.data" :key="m" class="d-flex child-flex" cols="4">
      <movie-card class="animate__animated animate__zoomInUp" :movie="movie" />
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from "vuex";
import MovieCard from "@/components/MovieCard.vue";
export default {
  components: { MovieCard },
  computed: {
    ...mapState({
      movies: "data"
    })
  }
};
</script>