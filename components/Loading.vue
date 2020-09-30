<template>
  <div class="fill-height">
    <div class="loader">
      <loader :animation-duration="2000" :size="60" color="#3F51B5" />
    </div>
  </div>
</template>

<script>
import { BreedingRhombusSpinner } from "epic-spinners";

export default {
  name: "loading",
  components: {
    loader: BreedingRhombusSpinner,
  },
};
</script>
