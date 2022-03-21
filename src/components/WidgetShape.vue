<template>
  <div class="shape" @click.stop="updateCurComponent(widget)" ref="shape">
    <!-- 选中组件高亮 -->
    <div v-if="isCurComponent(widget.id)" class="shape-solid event-none"></div>

    <div class="shape-dashed event-none"></div>

    <!-- 组件工具栏 -->
    <div v-if="show" class="shape-tab" :style="{ right: `-86px` }">
      <template v-if="isCurComponent(widget.id)">
        <i
          class="iconfont icon-shanchu tab-icon f16"
          @click.stop="delComponentById(widget.id)"
          >删除</i
        >
      </template>

      <span v-else>{{ widget.name }}</span>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, onMounted } from "vue";
import { Material } from "../components/materia";
defineProps<{ widget: Material }>();
const show = ref(false);
const { curComponent, updateCurComponent } = inject<any>("control");
const { delComponentById } = inject<any>("displayPlate");

const isCurComponent = (id: string) => curComponent.value?.id == id;

onMounted(() => {
  show.value = true;
});
</script>

<style lang="scss" scoped>
.shape {
  position: relative;

  &:hover > .shape-dashed {
    display: block;
  }

  .shape-dashed {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: dashed 1px #00d26e;
    z-index: 100;
  }

  .shape-solid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: solid 2px #00d26e;
    z-index: 100;
  }

  .shape-tab {
    position: absolute;
    top: 0; /*no*/
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px; /*no*/
    height: 24px; /*no*/
    font-size: 12px; /*no*/
    color: #333;
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &::after {
      content: "";
      position: absolute;
      right: 100%; /*no*/
      top: 7px; /*no*/
      width: 0; /*no*/
      height: 0; /*no*/
      border-width: 5px; /*no*/
      border-style: solid;
      border-color: transparent;
      margin-bottom: -1px; /*no*/
      border-right-width: 5px; /*no*/
      border-right-color: currentColor;
      color: #fff;
    }
  }

  .event-none {
    pointer-events: none;
  }

  .tab-icon {
    color: #969799;
    cursor: pointer;

    &:hover {
      color: #87888a;
    }
  }
}
</style>
