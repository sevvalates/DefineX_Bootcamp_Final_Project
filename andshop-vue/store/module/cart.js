const state = {
  products: [],
  cart: []
}
// getters
const getters = {
  cartItems: (state) => {
    return state.cart
  },
  // cartTotalAmount: (state) => {
  //     return state.cart.reduce( (total, product) => {
  //         return total + (product.price * product.quantity)
  //       }, 0 )
  // },

  /*
  cartTotalAmount: (state) => {
    return state.cart.reduce( (total, product) => {
      return total + ( (product.price - ( product.price * product.discount / 100) ) * product.quantity)
      }, 0 )
  }
  */
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      const discount = 0//product.discount || 0  // Discount eksikse 0 kabul et
      const quantity = 1//product.quantity || 1  // Quantity eksikse 1 kabul et
  
      return total + ((product.price - (product.price * discount / 100)) * quantity)
    }, 0)
  }
}
// actions
const actions = {
    // API'den ürünleri almak için action
  async fetchProducts({ commit }) {
    try {
      const response = await this.$axios.get('/products')  // API'den veri çekiyoruz
      commit('setProducts', response.data.result)  // Veriyi state'e kaydediyoruz
    } catch (error) {
      console.error('Ürünler getirilirken hata oluştu:', error)
    }
  },
  addToCart: ({ commit }, payload) => {
    commit('addToCart', payload)
  },
  updateCartQuantity: ({ commit }, payload) => {
    commit('updateCartQuantity', payload)
  },
  removeCartItem: ({ commit }, payload) => {
    commit('removeCartItem', payload)
  }
}

// mutations
const mutations = {
  /*
  setProducts: (state, products) => {
   
    // API'den gelen veriyi state'e kaydediyoruz
    state.products = products.map(product => ({
      productId: product.productId,
      name: product.name,
      price: product.price,
      description: product.description,
      categoryName: product.categoryName,
      imageUrl: product.imageUrl,
      stock: 5,  // stok bilgisi API'den gelmiyor, varsayalım
      discount: 0,  // varsayalım ki discount bilgisi API'den gelmiyor
      quantity: 0  // Sepet için başlangıçta sıfır miktar
    }))
  },*/
  setProducts: (state, products) => {
    state.products = products  // API'den gelen ürünleri state'e kaydediyoruz
  },

  addToCart: (state, payload) => {
    /*
    const product = state.products.find(item => item.productId === payload.productId)
    const cartItems = state.cart.find(item => item.productId === payload.productId)
    const qty = payload.quantity ? payload.quantity : 1

    if (cartItems) {
      cartItems.quantity = qty
    } else {
      state.cart.push({
        ...product,
        quantity: qty
      })
    }
    product.stock--
    */
  },
  updateCartQuantity: (state, payload) => {
    // Calculate Product Stock Counts
     /*
    function calculateStockCounts(product, quantity) {
      const qty = product.quantity + quantity
      const stock = product.stock
      if (stock < qty) {
        return false
      }
      return true
    }
    state.cart.find((items, index) => {
      if (items.id === payload.product.id) {
        const qty = state.cart[index].quantity + payload.qty
        const stock = calculateStockCounts(state.cart[index], payload.qty)
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty
        } else {

        }
        return true
      }
    })*/
  },
  removeCartItem: (state, payload) => {
      //const index = state.cart.indexOf(payload)
      //state.cart.splice(index, 1)
      const index = state.cart.findIndex(item => item.productId === payload.productId)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
  }

}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}