import Vue from 'vue'
import { Button, Dialog, Switch, Tooltip } from 'element-ui'
import {Form,FormItem,Input,Message,Container,Aside,Header,Main,Menu,Submenu,MenuItem,Breadcrumb,BreadcrumbItem,Card,Col,Row,Table,TableColumn} from 'element-ui'
import { Pagination,MessageBox } from 'element-ui'
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(MessageBox)
// $message里的message是自定义的，Message是固定的
Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox
