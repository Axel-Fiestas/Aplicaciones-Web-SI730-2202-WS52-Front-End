<script>

  export default {
    data() {
	    return {
	    	selectedCity: null,
	    	cities: [
	    		{name: 'New York', code: 'NY'},
	    		{name: 'Rome', code: 'RM'},
	    		{name: 'London', code: 'LDN'},
	    		{name: 'Istanbul', code: 'IST'},
	    		{name: 'Paris', code: 'PRS'}
	    	]
	    }
    }

  }

</script>

<template>

  <form>


    <div class="card">

    <div class="field grid">


        <!--Codigo-->
        <label for="code" class="col-12 mb-2 md:col-2 md:mb-0">Codigo*</label>

        <div class="col-12 md:col-10">
          <InputText id="code"></InputText>
        </div>
        
        <Button label="Validar" class="p-button-sm"></Button>

    </div>

    <div class="field grid"></div>
        <!--Nombre-->
        <label for="name" class="col-12 mb-2 md:col-2 md:mb-0">Nombre*</label>

        <div class="col-12 md:col-10">

          <InputText placeholder="Solo letras y números" id="name"></InputText>

        </div>
        

    </div>

    <div class="field grid">
      <!--Precio-->
      <label for="price" class="col-12 mb-2 md:col-2 md:mb-0">Precio*</label>

      <div class="col-12 md:col-10">
        <InputNumber v-model="value3" mode="decimal" showButtons buttonLayout="vertical"
            decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></InputNumber>

      </div>
      

    </div>

    <div class="field grid">
      <!--telefono-->

      <div class="col-12 md:col-10">

        <label for="telefono" class="col-12 mb-2 md:col-2 md:mb-0">Telefono*</label>
        <InputMask id="telefono" v-model="value" mask="a9-99999a"></inputMask>

      </div>
      
    
    </div>


    <div class="field grid">
      <!--Precio-->

      <div class="col-12 md:col-10">

        <label for="categoria" class="col-12 mb-2 md:col-2 md:mb-0">Categoria</label>
        <pv-dropdown id="cagetoria" :options="cities" optionLabel="name" placeholder="Select a Category"></pv-dropdown>

      </div>
      
    
    </div>



  </form>



</template>



<style scoped>

</style>
