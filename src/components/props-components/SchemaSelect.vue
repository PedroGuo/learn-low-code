<template>
  <PropsLabel :label="label">
     <el-select  v-model="eValue" v-bind="eOptions">
    <el-option
      v-for="item in eOptions.data"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </PropsLabel>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import useSchema from "./schemaHook";
const  context = getCurrentInstance();
const { eOptions, eValue, label } = useSchema(context?.attrs, context?.emit);
</script>