<template lang="html">
  <form>
    <div>
      <label for="productName">Product name</label>
      <input type="text" v-model="product.name" id="productName" maxlength="32" placeholder="Enter product name">
    </div>
    <div>
      <label for="productDescription">Product description</label>
      <textarea v-model="product.description" id="productDescription" rows="3" maxlength="128" placeholder="Enter description"></textarea>
    </div>
    <div>
      <label for="price">Price</label>
      <input type="number" v-model="product.price" id="price" placeholder="Enter price" number>
    </div>
    <button type="submit" v-onclick.prevent="onSubmit">Save product</button>
  </form>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
