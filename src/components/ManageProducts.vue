<template lang="html">
  <section>
    <save-product-form
      :product="productInForm"
      v-on:submit="onFormSave"
    ></save-product-form>
    <product-list
      :products="products"
      v-on:edit="onEditClicked"
    ></product-list>
  </section>
</template>

<script>
import uuid from 'uuid'
import ProductList from './ProductList'
import SaveProductForm from './SaveProductForm'

const initialData = () => {
  return {
    productInForm: {
      id: null,
      name: '',
      description: '',
      price: null,
    },
    products: []
  }
}

export default {
  components: {
    ProductList,
    SaveProductForm,
  },
  data: initialData,
  methods: {
    onFormSave(productData) {
      const index = this.products.findIndex((p) => p.id === productData.id);

      if (index !== -1) {
        this.products.splice(index, 1, productData)
      }
      else {
        productData.id = uuid.v4();
        this.products.push(productData);
      }

      this.resetProductInForm()
    },
    resetProductInForm() {
      this.productInForm = initialData().productInForm;
    },
    onEditClicked(product) {
      this.productInForm = { ...product };
    }
  }
}
</script>

<style lang="css">
</style>
