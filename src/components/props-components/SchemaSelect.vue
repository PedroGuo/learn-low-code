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

<script lang="ts">
import useSchemaMixin from "./schemaMixin";
export default {
  name: "SchemaSelect",
  props: ["value", "options", "label"],
  setup(props, context) {
    const { eOptions, eValue, label } = useSchemaMixin(props, context);
    return { eOptions, eValue, label };
  },
};
</script>