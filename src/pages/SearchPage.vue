<script lang="ts" setup>

import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const searchText = ref('');
const onSearch = () => {
  // console.log(originList[0].children[0].text)
  tagList.value = originList.map(parentTag => {
    const tempTag = {...parentTag};
    tempTag.children = parentTag.children.filter(item => item.text.includes(searchText.value));
    return tempTag;
  })
};
const onCancel = () => {
  searchText.value = '';
  tagList.value = originList;
};

const onResultSearch = () => {
  router.push({
    path: '/user/list',
    query: {
      tags: activeIds.value
    }
  })
};

const activeIds = ref([]);
const activeIndex = ref(0);
let originList = [
  {
    text: '浙江',
    children: [
      {text: '杭州', id: '杭州'},
      {text: '温州', id: '温州'},
    ],
  },
  {
    text: '江苏',
    children: [
      {text: '南京', id: '南京'},
      {text: '无锡', id: '无锡'},
      {text: '徐州', id: '徐州'},
      {text: '南京1', id: '南京1'},
      {text: '无锡2', id: '无锡2'},
      {text: '徐州3', id: '徐州3'},
      {text: '南京4', id: '南京4'},
      {text: '无锡5', id: '无锡5'},
      {text: '徐州6', id: '徐州6'},
    ],
  },
]
const tagList = ref(originList);

const doClose = (tag: String) => {
  activeIds.value = activeIds.value.filter((item) => {
    return item !== tag
  })
}

</script>

<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入要搜索的标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider>已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-row gutter="2">
    <van-col v-for="tag in activeIds" span="4">
      <van-tag closeable size="medium" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider>选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
  <div style="margin: 10px">
    <van-button type="primary" block @click="onResultSearch">搜索</van-button>
  </div>

</template>

<style scoped>

</style>