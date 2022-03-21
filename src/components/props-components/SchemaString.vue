<template>
  <PropsLabel :label="label">
    <el-input
      v-model="eValue"
      v-bind="eOptions"
      :placeholder="eOptions.placeholder"
      size="small"
    ></el-input>
  </PropsLabel>
</template>

<script lang="ts">
import useSchemaMixin from "./schemaMixin";
export default {
  name: "SchemaString",
  props: ["value", "options", "label"],
  setup(props, context) {
    const { eOptions, eValue, label } = useSchemaMixin(props, context);
    return { eOptions, eValue, label };
  },
};
</script>