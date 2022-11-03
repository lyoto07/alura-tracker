import { createRouter, RouteRecordRaw,createWebHashHistory } from "vue-router";
import Tarefa from "../view/Tarefa.vue";

const rotas: RouteRecordRaw[] = [{
    path: '/',
    name: 'tarefa',
    component: Tarefa

}]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;