import Vue from 'vue'

import {
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from './mutation-types'

export function fetchProducts({ commit }) {
  return Vue.http.get('products/')
    .then(response => commit(FETCH_PRODUCTS, response.body))
}

export function createProduct({ commit }, product) {
  return Vue.http.post('products', product)
    .then(response => commit(CREATE_PRODUCT, response.body))
}

export function updateProduct({ commit }, product) {
  return Vue.http.put(`products/${product.id}`, product)
    .then(response => commit(UPDATE_PRODUCT, response.body))
}

export function saveProduct({ commit, state }, product) {
  const index = state.all.findIndex(p => p.id === product.id)

  if (index !== -1) {
    return updateProduct({ commit }, product)
  }
  else {
    return createProduct({ commit }, product)
  }
}

export function deleteProduct({ commit }, productId) {
  return Vue.http.delete(`products/${productId}`)
    .then(response => commit(DELETE_PRODUCT, productId))
}
