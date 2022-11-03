<template>
    <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro':  modoEscuroAtivo}">

      <div class="column is-three-quarter conteudo">
        <Formulario @aoSalvarTarefa="salvarTarefa"/> 
        <div class="lista">
          <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
          <Box v-if="listaEstaVazia">
            Você não esta muito produtivo Hoje
          </Box>
        </div>
  
      </div>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Formulario from '../components/FormularioCriacao.vue';
  import Tarefa from '../components/Tarefa.vue';
  import ITarefa from '../Interface/ITarefa';
  import Box from '../components/Box.vue';
  
  
  export default defineComponent({
    name: 'App',
    components:{
      Formulario,
      Tarefa,
      Box
    },
    // define o estado do componente
    data(){
      return{
        tarefas: [] as ITarefa[],
        modoEscuroAtivo: false
      }
    },
    computed: {
      listaEstaVazia() : boolean {
        return this.tarefas.length === 0;
      }
    },
    methods:{
      salvarTarefa (tarefa: ITarefa){
        this.tarefas.push(tarefa);
      },
    }
    
  });
  </script>
  
  