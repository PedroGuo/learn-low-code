<template>
  <PropsLabel :label="label">
    <el-input
      v-model="eValue"
      v-bind="options"
      :placeholder="options.placeholder"
      size="small"
    ></el-input>
  </PropsLabel>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import useSchema from "./schemaHook";
const  context = getCurrentInstance();
const { eOptions, eValue, label } = useSchema(context?.attrs, context?.emit);
const options = Object.assign({placeholder: '请输入内容'}, eOptions.value)
</script>