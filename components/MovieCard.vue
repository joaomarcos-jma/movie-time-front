<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="mx-auto" color="grey lighten-4">
      <v-img class="image" :src="movie.logo_path">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >{{movie.streaming}}</div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-6" style="position: relative;">
        <v-btn absolute color="blue" class="white--text" fab large right top>
          <v-icon>mdi-movie-open</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-1">{{resolveGenres(movie.genre_id)}}</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">{{movie.title}}</h3>
        <div class="font-weight-light grey--text title mb-2">Duração {{movie.runtime | duration}}</div>
        <div class="font-weight-light brown--text title mb-2">{{movie.overview}}</div>
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  props: ["movie"],
  methods: {
    resolveGenres(id) {
      let genre = this.$store.state.genres.find(res => res.id === id).name;
      return genre;
    }
  }
};
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>