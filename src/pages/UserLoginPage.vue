<script lang="ts" setup>
import myAxios from '../plugins/myAxios.ts'
import { ref } from 'vue'
import {Toast} from "vant";
import {useRouter} from "vue-router";
import {showFailToast, showSuccessToast} from "vant/es";

const router = useRouter();
const userAccount = ref();
const userPassword = ref();

const onSubmit = async ()=> {
  const res = await myAxios.post("user/login", {
    userAccount: userAccount.value,
    userPassword: userPassword.value
  });
  if (res.data != null && res.code == 0) {
    showSuccessToast("登录成功");
    router.replace("/");
  } else {
    showFailToast("登录失败");
  }
}
</script>
<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
                v-model="userAccount"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="userPassword"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
    </van-form>
</template>

<style scoped></style>
