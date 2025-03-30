
const state = {
    productslist: [],
    products: [],
    shuffleproducts: [],
    wishlist: [],
    compare: [],
    searchProduct: []
}

// getters 
const getters = {
    getcollectionProduct: (state) => //(collection) => {
    {
        // API'den gelen veride "collection" yok, bu yüzden tüm ürünleri döndürüyoruz.
        return state.products
    },
    getProductById: (state) => (id) => {
        return state.products.find(product => product.productId === id)
    },
    wishlistItems: (state) => state.wishlist,
    compareItems: (state) => state.compare,
    
    
    getProductsByCategory: (state) => (category) => {
        return state.products.filter(product => product.categoryName === category)
    },
}

// mutations 
const mutations = {
    setProducts: (state, products) => {
       
        state.productslist = products
        state.products = products
        state.shuffleproducts = products
        console.log('Ürünler state\'e kaydedildi:',   state.productslist)
 /*       
        if (Array.isArray(products)) {
            state.productslist = products.result
            state.products =  products.result
            state.shuffleproducts =  products.result
        } else {
            console.error('Hatalı ürün verisi:',  products.result)
        }
 */
    },

    addToWishlist: (state, payload) => {
        console.log('addToWishlist payload:', payload)
        console.log('state.products:', state.products)
        
        const product = state.products.find(item => item.productId === payload.productId)
        const wishlistItems = state.wishlist.find(item => item.productId === payload.productId)
        if (!wishlistItems) {
          state.wishlist.push({ ...product })
        }
    },
    removeWishlistItem: ( state, payload ) => {
        state.wishlist = state.wishlist.filter(item => item.productId !== payload.productId)
    },
    addToCompare: (state, payload) => {
        const product = state.products.find(item => item.productId === payload.productId)
        const compareItems = state.compare.find(item => item.productId === payload.productId)
        if (!compareItems) {
          state.compare.push({ ...product })
        }
    },
    removeCompareItem: (state, payload) => {
        state.compare = state.compare.filter(item => item.productId !== payload.productId)
    },
    searchProduct: (state, payload) => {
        payload = payload.toLowerCase()
        state.searchProduct = state.products.filter(product =>
          product.name.toLowerCase().includes(payload)
        )
    },
    shuffleProduct: (state, payload) => {
        state.shuffleproducts = [...state.products].sort(() => Math.random() - 0.5)
    },
    getallProduct: (state, payload) => {
        state.shuffleproducts = state.products
    }
}

// actions 
const actions = {
    async fetchProducts({ commit }) {
        try {
          const response = await this.$axios.get('/products') // Nuxt Axios kullanımı
          if (response.data.isSuccess) {
            commit('setProducts', response.data.result) // Doğru veri yapısı
            console.log('Ürünler getirildi:', response.data.result)
        } else {
            console.error('Ürünler getirilirken hata oluştu:', response.data.errorMessages)
        }
        } catch (error) {
          console.error('Ürünler getirilirken hata oluştu:', error)
        }
    },
    async fetchProductById({ commit }, productId) {
        try {
            const response = await this.$axios.get(`/products/${productId}`)
            if (response.data.isSuccess) {
                return response.data.result
            }
        } catch (error) {
            console.error('Ürün detayı alınamadı:', error)
            throw error
        }
    },

    addToWishlist: ({ commit }, payload) => {
        commit('addToWishlist', payload)
    },
    removeWishlistItem: ({ commit }, payload) => {
        commit('removeWishlistItem', payload)
    },
    addToCompare: ({ commit }, payload) => {
        commit('addToCompare', payload)
    },
    removeCompareItem: ({ commit }, payload) => {
        commit('removeCompareItem', payload)
    },
    searchProduct: ({ commit }, payload) => {
        commit('searchProduct', payload)
    },
    shuffleProduct: ({ commit }, payload) => {
        commit('shuffleProduct')
    },
    getallProduct: ({ commit }) => {
        commit('getallProduct')
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}