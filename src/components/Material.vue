<template>
  <draggable
    :list="materialData"
    :group="{ name: 'material', pull: 'clone', put: false }"
    :clone="handleClone"
    animation="300"
  >
    <div
      v-for="(item, index) in materialData"
      :key="index"
      class="control-models-item"
    >
      <i class="iconfont" :class="item.icon"></i>
      <span class="f13">{{ item.name }}</span>
    </div>
  </draggable>
</template>

<script setup lang="ts">
import { Material } from "./materia";
import { getRandomCode } from "../utils/index";

defineProps<{ materialData: Partial<Material>[] }>();

const handleClone = (model: Material): Material => {
  const obj = JSON.parse(JSON.stringify(model));
  return {
    ...obj,
    id: getRandomCode(8),
  };
};
</script>

<style lang="scss">
.control-models {
  width: 236px;
  height: calc(100vh - 60px);
  padding: 10px 20px;
  background: #fff;

  .control-models-item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 90px; /*no*/
    padding: 15px 0; /*no*/
    font-size: 12px; /*no*/
    color: #666;
    cursor: pointer;

    i {
      font-size: 29px; /*no*/
      margin-top: 5px; /*no*/
      margin-bottom: 10px; /*no*/
    }

    &:hover {
      color: #fff !important;
      background: #00d26e;
      .canvas-left-item-type {
        color: #fff;
      }
    }
  }
}
</style>