<script lang="ts" setup>
import {ref} from "vue";
import {useRoute} from "vue-router";


  const onSubmit = (values: String) => {
    console.log('submit', values);
  };

  const route = useRoute();
  const value = ref({
    editKey: route.query.editKey,
    currentValue: route.query.currentValue,
    editName: route.query.editName,
  })
</script>

<template>
  <van-form @submit="onSubmit">
      <van-field
          v-model="value.currentValue"
          :name="value.editKey"
          :label="value.editName"
      />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>

</style>