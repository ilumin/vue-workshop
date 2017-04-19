import uuid from 'uuid'
import { http } from 'vue'

import {
  FETCH_PRODUCTS,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from './mutation-types'

export function fetchProducts({ commit }) {
  return http.get('products/')
    .then(response => commit(FETCH_PRODUCTS, response.body.data))
}

export function saveProduct({ commit, state }, product) {
  const index = state.all.findIndex(p => p.id === product.id)

  if (index !== -1) {
    commit(UPDATE_PRODUCT, product)
  }
  else {
    product.id = uuid.v4()
    commit(CREATE_PRODUCT, product)
  }
}

export function deleteProduct({ commit }, productId) {
  commit(DELETE_PRODUCT, productId)
}
