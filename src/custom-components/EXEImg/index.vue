<template>
  <div>
    <img
      class="img"
      :src="imagePath || defaultImage"
      :style="{ borderRadius: radius + 'px' }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EXEImg",

  props: {
    imagePath: {
      type: String,
      default: "",
    },
    radius: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
  },

  data() {
    return {
      defaultImage:
        "https://cdn.pixabay.com/photo/2022/02/28/15/28/sea-7039471__340.jpg",
    };
  },
})
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
}
</style>
