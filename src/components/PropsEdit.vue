<template>
  <ul>
    <li v-for="(item, index) in schema" :key="index">
      <DataSourceComponent
        v-if="item.dataSource"
        v-bind="item"
        v-model="item.value"
      ></DataSourceComponent>
      <component
        v-else
        :is="getComponent(item.type)"
        v-model="item.value"
        v-bind="item"
      ></component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import DataSourceComponent from "./DataSource.vue";
import { IPropsEditModel } from "@/model";
defineProps<{ schema: IPropsEditModel }>();
const getComponent = (type: string) => `schema-${type}`;
</script>
