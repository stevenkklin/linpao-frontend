<script lang="ts" setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import myAxios from "../plugins/myAxios.ts";
import {getCurrentUser} from "../service/user.ts";
import {showFailToast, showSuccessToast} from "vant/es";


const route = useRoute();
const router = useRouter();
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
});
const onSubmit = async () => {
  const currentUser = await getCurrentUser();
  if (currentUser == null) {
    showFailToast("用户未登录");
  }

  const res = await myAxios.post("/user/update", {
    'id' : currentUser.data.id,
    [editUser.value.editKey as string]: editUser.value.currentValue
  })

  if (res.code == 0 && res.data != null) {
    showSuccessToast("更新成功");
    router.back();
  } else {
    showFailToast("更新失败");
  }
};

</script>

<template>
  <van-form @submit="onSubmit">
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
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