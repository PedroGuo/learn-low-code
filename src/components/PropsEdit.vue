<template>
  <ul>
    <li v-for="(item, index) in schema" :key="index" :label="item.label">
      <component
        :is="getComponent(item.type)"
        v-model="item.value"
        v-bind="item"
      ></component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PropsEditModel } from "@/model";
const getComponent = (type: string) => `schema-${type}`;
defineProps<{ schema: PropsEditModel }>();
</script>
