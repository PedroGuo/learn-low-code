<template>
  <div class="flex">
    <label for="">{{ label }} </label>
    <div class="flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<style lang="scss" scoped>
 .flex {
   display: flex;
   background: #fff;
   padding: 10px;
   label {
     width: 70px;
     font-size: 12px;
     padding: 10px;
   }
   .flex-1 {
     flex: 1;
   }
 }
</style>
