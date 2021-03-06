<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <div class="center-block logo;">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img v-if="avatar" :src="avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="font-weight-bold"
              style="font-size: 14pt;"
            >{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="!showBar" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn @click="toggle" icon>
        <v-icon>{{!$vuetify.theme.dark ? 'mdi-flashlight' : 'mdi-flashlight-off'}}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-overlay class="fill-height" :value="isLoading">
        <loading v-if="isLoading" />
      </v-overlay>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Loading from "@/components/Loading";
export default {
  components: { Loading },
  data() {
    return {
      drawer: false,
      fixed: false,
      clipped: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Home",
          to: "/",
        },
      ],
      miniVariant: false,
      title: "Movie Time",
    };
  },

  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.checkMiniVariant();
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    showBar() {
      return ["home"].includes(this.$route.name);
    },
    avatar() {
      return require(`../static/icon.png`);
    },
    isMobile() {
      return this.$store.state.isMobile;
    },
  },

  methods: {
    toggle() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    checkMiniVariant() {
      if (this.isMobile) {
        this.miniVariant = true;
      }
    },
    onResize() {
      let isMobile = window.innerWidth < 600;
      this.$store.commit("CHECK_MOBILE", isMobile);
    }
  },
};
</script>
