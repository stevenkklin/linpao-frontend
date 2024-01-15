<script setup lang="ts">

import {useRouter} from "vue-router";
import {ref} from "vue";

// onMounted(async ()=> {
//   const res = await getCurrentUser();
//   if (res.code == 0 && res.data != null) {
//     user.value = res.data;
//     showSuccessToast("获取用户信息成功");
//   } else {
//     showFailToast("获取用户信息失败");
//   }
// })

const user = ref();

// const user = {
//   id: 1,
//   username: 'steven',
//   userAccount: 'linchao',
//   avatarUrl: 'https://s1.hdslb.com/bfs/static/jinkela/space/assets/icon-auth.png',
//   gender: '男',
//   phone: '18005002636',
//   email: '736327346@qq.com',
//   planetCode: '123',
//   createTime: new Date(),
// };

const router = useRouter();

const toEdit = (editKey:String, editName:String, currentValue:String) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey: editKey.toString(),
      editName: editName.toString(),
      currentValue: currentValue.toString(), // 转换为字符串类型
    }
  })
}
</script>

<template>
  <template v-if="user">
    <van-cell title="id" is-link to="/user/edit" :value="user.id" />
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username', '昵称', user.username)" />
    <van-cell title="账户名" is-link to="/user/edit" :value="user.userAccount" @click="toEdit('userAccount', '性别', user.userAccount)" />
    <van-cell title="头像" is-link to="/user/edit"  >
      <img style="height: 47px" :src="user.avatarUrl" />
    </van-cell>
    <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender', '性别', user.gender)" />
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email', '邮箱', user.email)" />
    <van-cell title="星球编码" is-link  :value="user.planetCode" @click="toEdit('planetCode', '星球编码', user.planetCode)"  />
    <van-cell title="注册时间" is-link  :value="user.createTime" @click="toEdit('createTime', '邮箱', user.createTime)"  />
  </template>
</template>

<style scoped>

</style>