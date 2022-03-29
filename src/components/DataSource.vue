<template>
  <ul>
    <li>
      <label for="">{{ label }}-数据来源</label>
    </li>
    <li>
      <PropsLabel label="接口地址">
        <el-input
          v-model="originDataSource.url"
          placeholder="接口地址"
          size="small"
        ></el-input>
      </PropsLabel>
    </li>
    <li>
      <PropsLabel label="请求方式">
        <el-select v-model="originDataSource.fetchType">
          <el-option
            v-for="item in fetchTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </PropsLabel>
    </li>
    <li>
      <PropsLabel label="请求方法">
        <el-select v-model="originDataSource.method">
          <el-option
            v-for="item in methodOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </PropsLabel>
    </li>
    <li>
      <PropsLabel label="请求头参数">
        <el-input
          type="textarea"
          v-model="headersValue"
          placeholder="请输入请求头参数，json格式"
          size="small"
        ></el-input>
      </PropsLabel>
    </li>
    <li>
      <PropsLabel label="请求体参数">
        <el-input
          type="textarea"
          v-model="paramsValue"
          placeholder="请输入请求体参数，json格式"
          size="small"
        ></el-input>
      </PropsLabel>
    </li>
    <li>
      <el-button type="success" @click="handleFetch">{{ "请求" }} </el-button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {
  DataSourceItem,
  IOriginType,
  ILocalType,
  IPropsEditModel,
} from "@/model";
import { reactive, ref, getCurrentInstance, toRefs } from "vue";
const context = getCurrentInstance();
const { label } = toRefs(context!.attrs);
console.log(label.value);


const methodOptions = reactive([
  { label: "get请求", value: "GET" },
  { label: "post请求", value: "POST" },
]);
const fetchTypeOptions = reactive([
  { label: "fetch", value: "fetch" },
  { label: "ajax", value: "ajax" },
  { label: "jsonp", value: "jsonp" },
]);

const paramsValue = ref("");
const headersValue = ref("");

const originDataSource = reactive<IOriginType>({
  type: "origin",
  url: "",
  fetchType: "fetch",
  method: "GET",
  params: {},
  headers: {},
});


const handleFetch = async () => {
  try {
    if (paramsValue.value) {
      originDataSource.params = JSON.parse(paramsValue.value.trim());
    }
    if (headersValue.value) {
      originDataSource.headers = JSON.parse(headersValue.value.trim());
    }
    const dataSourceItem = new DataSourceItem(originDataSource);
    await dataSourceItem.loadData();
    if (dataSourceItem.status) {
      context?.emit("update:modelValue", dataSourceItem.data);
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
