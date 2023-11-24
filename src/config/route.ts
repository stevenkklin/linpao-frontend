// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
import Team from '../pages/TeamPage.vue'
import Index from '../pages/Index.vue'
import User from '../pages/UserPage.vue'
import Search from '../pages/SearchPage.vue'
import modelPage from '../pages/ModelPage.vue'
import userEditPage from '../pages/UserEditPage.vue'
import SearchResultPage from '../pages/SearchResultPage.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: User },
    { path: '/search', component: Search },
    { path: '/model', component: modelPage },
    { path: '/user/edit', component: userEditPage },
    { path: '/user/list', component: SearchResultPage }
]

export default routes
