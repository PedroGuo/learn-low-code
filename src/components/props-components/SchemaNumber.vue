<template>
  <PropsLabel :label="label">
    <el-slider v-model="eValue" v-bind="eOptions" show-input> </el-slider>
  </PropsLabel>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import useSchema from "./schemaHook";
const  context = getCurrentInstance();
const { eOptions, eValue, label } = useSchema(context?.attrs, context?.emit);
</script>