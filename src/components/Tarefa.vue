<template>
    <Box class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{tarefa.descricao || 'Tarefa sem descrição'  }}
            </div>
            <div class="column">
                <Cronometro  :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
    import { defineComponent, PropType } from 'vue';
    import Cronometro from './CronometroComando.vue';
    import ITarefa from '../Interface/ITarefa';
    import Box from './Box.vue'

    export default defineComponent({
        name: 'ListaTarefa',
        components:{
            Cronometro,
            Box
        },
        props: {
            tarefa: {
                type: Object as  PropType<ITarefa>,
                    required: true
            }
        }
    });
</script>

