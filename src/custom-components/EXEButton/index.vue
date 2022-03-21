<template>
  <div>
    <el-button :type="btnType" @click="handleClick"
      >{{ btnText || "按钮" }}
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "EXEButton",
  props: {
    btnText: {
      type: String,
      default: "按钮",
    },
    eventHandleName: {
      type: String,
      default: "",
    },
    btnType: {
      type: String,
      default: "",
    },
  },
  mounted() {},

  methods: {
    handleClick(e) {
      if (this.eventHandleName) {
        // this.$eventBus.$emit(this.eventHandleName, e);
      }
    },
  },
});
</script>

