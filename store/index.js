import ApiService from "@/services/ApiService"
const api = new ApiService()
export const state = () => ({
  isMobile: null,
  isLoading: false,
  data: [],
  genres: []
})

export const mutations = {
  CHECK_MOBILE(state, value) {
    state.isMobile = value
  },
  SET_LOADING(state, value) {
    state.isLoading = value
  },
  MOVIE_DATA(state, value) {
    state.data = value
  },
  GENRE_DATA(state, value) {
    state.genres = value
  }
}
export const actions = {

  async getMovies({
    commit
  }) {
    commit('SET_LOADING', true)
    commit("MOVIE_DATA", []);
    let response = await api.request("get", `/movie`)
    commit('SET_LOADING', false)
    if (response) {
      commit("MOVIE_DATA", response.data);
    }
  },

  async getGenres({
    commit
  }) {
    let response = await api.request("get", `/genre`)
    if (response) {
      commit("GENRE_DATA", response.data.data);
    }
  }

}
