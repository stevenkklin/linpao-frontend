<script setup>

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import qs from "qs";
import {showSuccessToast} from "vant/es";
import 'vant/es/toast/style'


const route = useRoute();

const {tags} = route.query;
console.log(route.query.tags);


const userList = ref([]);

onMounted(async () => {
  // Make a request for a user with a given ID
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: {
      serialize: function (params) {
        // return qs.stringify(params,{arrayFormat:'repeat'})
        return qs.stringify(params, {indices: false})
      }
    }
  })
      .then(function (response) {
        console.log('/user/search/tags succeed', response);
        showSuccessToast('请求成功');
        return response.data?.data;
      })
      .catch(function (error) {
        console.error('/user/search/tags error', error);
      })
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData
  }
})

</script>

<template>
  <van-empty description="暂无用户匹配" v-if="userList == null || userList.length < 1" />
  <van-card v-for="user in userList"

      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tag in tags" style="margin-right: 10px;margin-bottom: 6px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>

<style scoped>

</style>