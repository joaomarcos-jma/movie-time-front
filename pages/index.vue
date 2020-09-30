<template>
  <v-layout column justify-center align-center>
    <v-card-title>
      {{'want to watch a movie? see where'}}
      <v-icon size="45" @click="getMovies">mdi-sync</v-icon>
    </v-card-title>
    <v-flex xs12 sm8 md6>
      <movies />
    </v-flex>
  </v-layout>
</template>

<script>
import Movies from "~/components/Movies.vue";

export default {
  components: {
    Movies
  },
  mounted() {
    this.getGenres();
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies");
    },
    getGenres() {
      this.$store.dispatch("getGenres");
    }
  }
};
</script>
