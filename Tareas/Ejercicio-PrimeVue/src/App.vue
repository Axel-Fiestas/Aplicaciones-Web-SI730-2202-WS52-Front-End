<script>

  import {CommentsServices} from "@/services/coments-services";
import func from 'vue-editor-bridge';

  export default{
    data() {
	    return{
        comments:[],
        body:"",
        postId:"",
        commentId:"",
		    selectedLacteos: null,
		      lacteos: [
			      {tipo: 'Leche', value: 'Leche'},
			      {tipo: 'Queso', value: 'Queso'},
			      {tipo: 'Helado', value: 'Helado'},
			      {tipo: 'Mozarella', value: 'Mozarella'},
			      {tipo: 'Yogurt', value: 'Yogurt'}
		          ],
        value1: 0,
        color1:'444445',
        date1:null,
        estado:null,
        checked:false,
        text:''

        }
      },
    created(){
      new CommentsServices().getComments().
      then(response=>{
        console.log("invocando API")
        console.log(response.status);
        console.log(response.data);
        this.comments=response.data;
      })
    },
    methods:{
      createComment:function(){

        new CommentsServices().postComment(this.body,this.postId)
          .then(response=>{
            console.log("postComment",response)
          })
      }
    },
    deleteComment: function(){
      new CommentsServices().deleteComment(this.commentId)
        .then(response=>{
          console.log("postComment",response)
        })
    }

  }


</script>

<template>

  <form >

    <h1>{{$t("greeting",{name:"Pedro"})}}</h1>

    <fieldset>

      <legend>Agregar Producto</legend>

        <div class="card">
            <div class="flex flex-column md:flex-column card-container green-container">
            
              <!--Codigo-->
                <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                  <label for="code" class="col-fixed" style="width:140px">{{$t("code")}}*</label>
                    <div class="col">
                      <input id="code" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none  outline-none         focus:border-primary" style="width: 150px;">
                      <pv-Button label="Validar" class="p-button-raised p-button-sm " style="margin-inline: 10px;"/>
                    </div>
                  
                </div><!--Termina-Codigo---->
              

              <!--Numero-->

                <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                  <label for="number" class="col-fixed" style="width:140px">{{$t("number")}}*</label>
                  <div class="col">
                    <input id="number" type="text" placeholder="Solo letras y n??meros" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary"  style="width: 280px;">
                  </div>
                  
                </div><!--Termina-N??mero---->
                  
              

              
               <!--Abreviatura-->

                <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                  <label for="abbreviation" class="col-fixed" style="width:140px">{{$t("abbreviation")}}</label>
                  <div class="col">
                    <pv-InputMask id="abbreviation" v-model="value" placeholder="Solo letras" mask="aaa" class="text-base text-color surface-overlay p-2 border-1  border-solid surface-border border-round appearance-none outline-none  focus:border-primary" style="width: 120px;"/>
                  </div>

                </div><!--Termina-Abreviatura---->

              
          
              <!--Categor??a-->

              <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="categoria" class="col-fixed" style="width:140px">Categoria*</label>
                <div class="col">
                  <pv-Dropdown id="categoria" v-model="selectedLacteos" :options="lacteos" optionLabel="tipo" placeholder="L??cteos" style="width: 120px;"/>
                </div>

              </div><!--Termina-Categor??a---->


               <!--RUC Proveedor-->

               <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="ruc" class="col-fixed" style="width:140px">Ruc Proveedor*</label>
                <div class="col">
                  <pv-InputMask id="ruc" v-model="value" placeholder="Solo n??meros" mask="999999999" class="text-base text-color surface-overlay p-2 border-1    border-solid               surface-border border-round appearance-none outline-none  focus:border-primary" style="width: 120px;"/>
                </div>
              
              </div><!--Termina-Ruc Proveedor---->

              <!--Precio-->

              <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="precio" class="col-fixed" style="width:140px">Precio*</label>
                <div class="col">
                  <pv-InputNumber id="precio" v-model="value1" showButtons :min="0" :max="100" prefix="S/. "/>
                </div>

              </div><!--Termina Precio---->


              <!--Color de etiqueta-->
              <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="color" class="col-fixed" style="width:140px">Color de etiqueta</label>
                <div class="col">
                  <pv-ColorPicker id="color" v-model="color1" />
                </div>
            
              </div><!--Termina Color de etiqueta---->


              <!--Fecha-->
              <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="fecha" class="col-fixed" style="width:140px">Fecha*</label>
                <div class="col">
                  <pv-Calendar id="fecha" v-model="date1" :showIcon="true" />
                </div>

              </div><!--Termina Fecha---->
              

              <!--Estado-->
              <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="estado" class="col-fixed" style="width:140px">Fecha*</label>
                <div class="col">
                  <pv-RadioButton name="estado" value="Activo" v-model="estado" /><label for="estado" style="margin-inline: 5px;">Activo</label>
                  <pv-RadioButton name="estado" value="Suspendido" v-model="estado" /><label for="estado" style="margin-inline: 5px;">Suspendido</label>
                  <pv-RadioButton name="estado" value="De Baja" v-model="estado" /><label for="estado" style="margin-inline: 5px;">De Baja</label>
                </div>

              </div><!--Termina Estado---->

              <!--Afecto a impuesto-->
              <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="estado" class="col-fixed" style="width:150px">Afecto a impuesto*</label>
                <div class="col">
                  <pv-InputSwitch v-model="checked"/>
                </div>

              </div><!--Termina Afecto a impuesto---->


              <!--Foto-->
              <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="foto" class="col-fixed" style="width:150px">Foto*</label>
                <div class="col" style="display: flex; align-items: center;">
                  <pv-FileUpload id="foto" mode="basic" name="demo[]" url="./upload" chooseLabel="Subir Foto" accept="image/*" style="width: 145px; height: 40px;"/>
                  <i class="pi pi-image" style="margin-inline: 20px;font-size: 3rem"></i>
                </div>

              </div><!--Termina Foto---->

              <!--Descripci??n-->
                <div class="flex align-items-center justify-content-center w-27rem h-3rem font-bold text-white border-round m-1">

                <label for="descripcion" class="col-fixed" style="width:150px">Descripci??n</label>
                <div class="col">
                  
                  <pv-Textarea id="descripcion" v-model="text" :autoResize="true" rows="1" cols="30" />
                </div>

              </div><!--Termina Descripci??n---->


                <!--Comentarios-->
              <div class="field grid">
              
                <label for="category" class="col-3 mb-2">Comentarios*</label>

                <div class="col-9 p-0"> <pv-dropdown

                  id="comment"

                  :options="comments"

                  optionLabel="body"

                  placeholder="Select a comment"

                  class="w-full"

                ></pv-dropdown></div>

              </div> 


              <label class="col-3 mb-2" for="body">Cuerpo</label>
              <div class="col-7 p-0">
                <pv-InputMask id="body" v-model="body"/> 

              </div>

              <label class="col-3 mb-2" for="postId">postId</label>
              <div class="col-7 p-0">
                <pv-InputMask id="postId" v-model="postId"/> 

              </div>

              <label class="col-3 mb-2" for="commentId">IdEliminar</label>
              <div class="col-7 p-0">
                <pv-InputMask id="commentId" v-model="commentId"/> 

              </div>

              <pv-Button @click="createComment">Crear Post </pv-Button>
              <pv-Button @click="deleteComment">Borrar Post</pv-Button>





              <!--Botones-->

              <div class="card">
                <div class="flex justify-content-center flex-wrap card-container">

                    <div class="flex align-items-center justify-content-center w-7rem h-4rem font-bold text-gray-900 border-round m-2">
                      <pv-Button label="Grabar" class="p-button-raised" />
                    </div>
                    <div class="flex align-items-center justify-content-center w-7rem h-4rem font-bold text-gray-900 border-round m-2">
                      <pv-Button label="Limpiar" class="p-button-raised p-button-danger" />
                    </div>
                </div>


              </div>

            </div>
        </div>



        <h2>
          {{$tc("product",0)}}
        </h2>

      

    </fieldset>

    






  </form>
 



</template>



<style scoped>

</style>
