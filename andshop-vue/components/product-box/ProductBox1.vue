<template>
  <div>
    <div class="product_wrappers_one">
      <div class="thumb">
        <nuxt-link :to="{ path: '/product/' + product.productId }" class="image">
          <img
            :src="getImageUrl(product.imageUrl)"
            :alt="product.name"
          />

        </nuxt-link>
        <span class="badges">

        </span>
        <div class="actions">
          <button
            @click="addToWishlist(product)"
            class="action wishlist"
            title="Wishlist"
          >
            <i class="far fa-heart"></i>
          </button>
          <button
            id="toggle-btn"
            @click="toggleModal"
            class="action quickview"
            title="Quick view"
          >
            <i class="fas fa-expand"></i>
          </button>
          <button
            @click="addToCompare(product)"
            class="action compare"
            title="Compare"
          >
            <i class="fas fa-exchange-alt"></i>
          </button>
        </div>
        <button
          @click="addToCart(product)"
          class="add-to-cart offcanvas-toggle"
          title="Add To Cart"
        >
         Sepete Ekle
        </button>
      </div>

      <div class="content">
        <h5 class="title text-capitalize">
          <nuxt-link :to="{ path: '/product/' + product.productId }">{{
            product.name
          }}</nuxt-link>
        </h5>
        <span class="price">
          <span class="new">${{ product.price }}</span>
        </span>
      </div>

      <!-- Modal Area Start-->
      <div>
        <b-modal
          ref="product-details-popup"
          centered
          hide-footer
          title="Using Component Methods"
          class="product_one_modal_top"
          id="product_slider_one"
        >
          <template #modal-header="{ close }">
            <button
              type="button"
              class="close close_modal_icon"
              @click="close()"
            >
              <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
          </template>

          <div>
            <div class="row">
              <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                <div class="products_modal_sliders">
                  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <img
                          :src="getImageUrl(product.imageUrl)"
                          class="img-fluid bg-img"
                          :alt="product.name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 col-md-6 col-sm-12 col-12">
                <div class="modal_product_content_one">
                  <h3 class="text-capitalize">{{ product.name }}</h3>

                  <div class="product-review">
                    <span>No Rating</span>
                  </div>

                  <h4>${{ product.price }}</h4>

                  <p>{{ product.description }}</p>

                  <form id="product_count_form_one">
                    <div class="product_count_one">
                      <b-form-spinbutton
                        id="sb-inline"
                        min="1"
                        max="100"
                        v-model="quantity"
                        inline
                        class="border-0"
                      ></b-form-spinbutton>
                      <a
                        href="javascript:void(0)"
                        @click="addToCart(product)"
                        class="theme-btn-one btn-black-overlay btn_sm"
                        >Add To Cart</a
                      >
                    </div>
                  </form>
                  <div class="modal_share_icons_one">
                    <h4>SHARE THIS PRODUCT</h4>
                    <div class="posted_icons_one">
                      <a href="#!"><i class="fab fa-facebook-f"></i></a>
                      <a href="#!"><i class="fab fa-instagram"></i></a>
                      <a href="#!"><i class="fab fa-twitter"></i></a>
                      <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                      <a href="#!"><i class="fab fa-google-plus-g"></i></a>
                      <a href="#!"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
      </div>
      <!-- Modal Area End-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProductBox1",
  props: ["product", "index"],

  data() {
    return {
      // Product Quanity Increment/ Decrement Data
      quantity: 1,

      imageSrc: "",
      cartProduct: {},
      compareProduct: {},
      dismissSecs: 3,
      dismissCountDown: 0,

      activeColor: "",
      selectedSize: "",
      qty: "",
      size: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.products,
    }),

    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // For displaying default color and size on pageload

  },

  methods: {
    // Product details Popup id Methods
    toggleModal() {
      this.$refs["product-details-popup"].toggle("#toggle-btn");
    },

    // Image Url
    getImageUrl(path) {
      //return require("@/assets/img/product-image/" + path);
      // API'den gelen direkt URL kullanılıyor
      return path.startsWith('http') ? path : require("@/assets/img/product-image/" + path);
    },

    // Product Add To Cart realted methods
    addToCart: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.cartProduct = product;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("cart/addToCart", product);
    },

    // After Add to cart Alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
      this.$emit("alertseconds", this.dismissCountDown);
    },

    // Discount Price
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    addToWishlist: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToWishlist", product);
    },
    addToCompare: function (product) {
      this.dismissCountDown = this.dismissSecs;
      this.$emit("showalert", this.dismissCountDown);
      this.$store.dispatch("products/addToCompare", product);
    },

    // Display Unique color

  },
};
</script>