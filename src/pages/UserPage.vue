<script setup lang="ts">

import {useRouter} from "vue-router";

const user = {
  id: 1,
  username: 'steven',
  userAccount: 'linchao',
  avatarUrl: 'https://s1.hdslb.com/bfs/static/jinkela/space/assets/icon-auth.png',
  gender: '男',
  phone: '18005002636',
  email: '736327346@qq.com',
  planetCode: '123',
  createTime: new Date(),
};

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
  <van-cell title="id" is-link to="/user/edit" :value="user.id" />
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" />
  <van-cell title="账户名" is-link to="/user/edit" :value="user.userAccount" />
  <van-cell title="头像" is-link to="/user/edit"  >
    <img style="height: 50px" :src="user.avatarUrl" />
  </van-cell>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender', '性别', user.gender)" />
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" />
  <van-cell title="星球编码" is-link  :value="user.planetCode" />
  <van-cell title="注册时间" is-link  :value="user.createTime.toDateString()" />

</template>

<style scoped>

</style>