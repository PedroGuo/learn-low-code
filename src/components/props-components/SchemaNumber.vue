<template>
  <PropsLabel :label="label">
    <el-slider v-model="eValue" v-bind="eOptions" show-input> </el-slider>
  </PropsLabel>
</template>

<script lang="ts">
import useSchemaMixin from "./schemaMixin";
export default {
  name: "SchemaNumber",
  props: ["value", "options", "label"],
  setup(props, context) {
    const { eOptions, eValue, label } = useSchemaMixin(props, context);
    return { eOptions, eValue, label };
  },
};
</script>