<template>
    <div class="q-pa-md" style="max-width: 350px">
      <q-list bordered class="rounded-borders">
        <q-expansion-item v-for="a in animales" :key="a.id"
          expand-separator
          icon="pets"
          :label="a.nombre"
          :caption="a.sexo"
        >
          <q-card>
            <q-card-section>
                <q-item-label>Registro: {{ a.numeroRegistro }}</q-item-label>
            </q-card-section>
            <q-card-section>
              <q-item-label>Tipo: {{ a.tipo }}</q-item-label>
            </q-card-section>
          </q-card>
        </q-expansion-item>
    </q-list>
    </div>
</template>

<!-- <template>
    <q-page>
        <q-item v-for="a in animales" :key="a.id">
            <q-item-section>
                <q-icon name="pets"></q-icon>
                <q-item-label>{{ a.nombre }}</q-item-label>
                <q-item-label caption lines="2">Sexo: {{ a.sexo }}</q-item-label>
            </q-item-section>
        </q-item>
    </q-page>
  </template> -->
  
  <script>
  export default {
    name: 'listaAnimales',
    data(){
        return{
            animales:[]
        }
    },
    created(){
        this.list();
        console.log(this.animales);
    },
    methods:{
        async list(){
            const animalesFetch = await fetch("http://34.90.153.139/ejercicios/veterinario/getanimals.php");
            this.animales = await animalesFetch.json();
        }
    }
  }
  </script>