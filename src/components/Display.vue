<template>
  <draggable :list="list" :animation="500" class="nest-area" group="material">
    <WidgetShape v-for="item in list" :key="item.id" :widget="item">
      <component :is="item.component" v-bind="spread(item)">
        <!-- <Display v-if="item.children" :widget="item.children" /> -->
      </component>
    </WidgetShape>
  </draggable>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { ModelData } from "@/model";
import { Merge } from "@/model/share";
import WidgetShape from "./WidgetShape.vue";
const list = ref<ModelData[]>([]);

const delComponentById = (id: string) => {
  const index = list.value.findIndex((item) => item.id === id);
  if (~index) {
    list.value.splice(index, 1);
  }
};

provide("displayPlate", {
  delComponentById,
});

const spread = (item: ModelData) => {
  const { props } = item;
  const target: any = {};
  for (const key in props) {
    target[key] = props[key].value;
  }
  return target;
};
</script>

<style lang="scss" scoped>
.nest-child {
  min-height: 80px;
  background: #f7f8fa80;
}

.nest-area {
  min-height: 600px;
}

.nest-none {
  background: url("https://file.qingflow.com/assets/empty-content/applying-editorial-tips.png");
  background-size: 100% 100%;
}
.info {
  position: absolute;
  left: 0;
  top: 30px;
  width: 160px;
  font-size: 12px;
  h3 {
    margin-bottom: 10px;
  }
}
</style>