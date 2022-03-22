<template>
  <div class="control">
    <div class="control-models">
      <MaterialComponent :materialData="data" />
    </div>

    <div class="control-page">
      <div class="panel">
        <div class="panel-content">
          <Display />
        </div>
      </div>
    </div>

    <div class="control-config">
      <template v-if="curComponent">
        <PropsEdit :schema="curSchemaProps" />
        <div>
          <h4 class="f-theme mt10 mb10">当前物料属性数据</h4>
          {{ curSchemaProps }}
        </div>
      </template>
    </div>
  </div>
</template>


<script setup lang="ts">
import { provide, ref, computed } from "vue";
import { data } from "./components/materia";
import { Material } from "./components/materia";
import MaterialComponent from "./components/Material.vue";
import Display from "./components/Display.vue";
import PropsEdit from "./components/PropsEdit.vue";
const curComponent = ref<Material>('');
const updateCurComponent = (value: Material) => {
  curComponent.value = value;
};
provide("control", {
  curComponent,
  updateCurComponent,
});
let curSchemaProps = computed(() => curComponent && curComponent.value.props);
</script>

<style lang="scss">
.control {
  display: flex;
  height: 100vh;
  background: #e3e3e3;
  .control-models {
    width: 236px;
    height: 100vh;
    padding: 10px 20px;
    background: #fff;

    .control-models-item {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      width: 90px; /*no*/
      padding: 15px 0; /*no*/
      font-size: 12px; /*no*/
      color: #666;
      cursor: pointer;

      i {
        font-size: 29px; /*no*/
        margin-top: 5px; /*no*/
        margin-bottom: 10px; /*no*/
      }

      &:hover {
        color: #fff !important;
        background: #00d26e;
        .canvas-left-item-type {
          color: #fff;
        }
      }
    }
  }

  .control-page {
    display: flex;
    justify-content: center;
    flex: 1;
    height: 100%;
    overflow: auto;

    .panel {
      width: 100%;
      max-width: 900px;
      position: relative;
      .panel-content {
        width: 375px;
        margin: 50px auto;
        background: #fff;
        box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .control-config {
    width: 360px;
    height: 100vh;
    overflow: auto;
    animation-duration: 0.2s;
    padding: 10px;
    background: #fff;
  }
}
</style>
