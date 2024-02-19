<template>
  <div class="container-fluid">
    <header>
      <input type="text" v-model="busquedad" placeholder="Buscar letra" style="width: 100%;">
      <div class="row">
        <button class="col-sm btn btn-danger btn-lg m-1" @click="filtrarCanciones(cate.id)" v-for="cate in categorias" :key="cate.id" type="button">{{ cate.nombre }}</button>
      </div>
      <div class="row">
        <button class="col-sm btn btn-primary btn-lg m-1" @click="ordenarCanciones(true)" type="button">Order ascendente</button>
        <button class="col-sm btn btn-primary btn-lg m-1" @click="ordenarCanciones(false)" type="button">Order descendente</button>
      </div>
    </header>
    <main>
      <div class="cancion" v-for="c in cancionesBusquedad" :key="c.id">
        <h1>{{ c.titulo }}</h1>
        <p><b>{{ c.fecha }}</b></p>
        <span>{{ c.letra }}</span>
      </div>      
    </main>
  </div>
</template>

<script>
import moment from 'moment';
import canciones from '../../public/bbdd/canciones.json'
import cantanteFilter from '../../public/bbdd/cantante.json'
import categorias from '../../public/bbdd/categorias.json'
 
export default {
  data(){
    return{
      canciones: [],
      cancionesFiltradas:[],
      cantanteFilter: [],
      categorias: [],
      busquedad: ''
    }
  },
  created (){
      this.llamarCanciones();
      // console.log(this.canciones)
      this.llamarCantante();
      // console.log(this.cantanteFilter)
      this.llamarCategorias();
      // console.log(this.categorias)
      this.cancionesFiltradas = this.canciones;
    }, 
    methods:{
      llamarCanciones(){
        for(let i=0;i<canciones.length;i++){
          this.canciones.push(canciones[i])
        }
      },
      llamarCantante(){
        for(let i=0;i<cantanteFilter.length;i++){
          this.cantanteFilter.push(cantanteFilter[i])
        }
      },
      llamarCategorias(){
        for(let i=0;i<categorias.length;i++){
          this.categorias.push(categorias[i])
        }
      },
      //Filtrar canciones cuando se le de click
      //Checkar
      filtrarCanciones(categoriaId){
        this.cancionesFiltradas = this.canciones.filter(c => c.categoria_id == categoriaId);
        console.log(this.canciones); 
      },
      //Ordenar canciones
      ordenarCanciones(ascendente){
        this.cancionesFiltradas.sort((a,b) => {
          const fechaA = moment(a.fecha, 'YYYY/MM/DD');
          const fechaB = moment(b.fecha, 'YYYY/MM/DD');
          if(ascendente){
            return fechaA.isAfter(fechaB) ? 1: -1;
          }else{
            return fechaA.isBefore(fechaB) ? 1: -1;
          }
        })
      }
    }
    ,//Busquedad input
    computed:{
      cancionesBusquedad(){
        let busquedad = this.busquedad.toLowerCase();
        return this.cancionesFiltradas.filter(c => c.letra.toLowerCase().includes(busquedad));
      }
    }
  }

</script>

<style scoped lang="scss">

span{
  white-space: pre-line;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main div{
  margin: 50px auto;
  text-align: center;
}

div.cancion:nth-child(even){
  background-color: #EEEEEE;
}

</style>
