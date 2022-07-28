<template>
  <div class="center">
        <!--banner轮播-->
        <div class="swiper-container" id="mySwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(c1, index) in bannerList"
              :key="c1.id"
            >
              <img :src="c1.imgUrl" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
    export default {
        name:'Banner',
            mounted() {
        this.$store.dispatch("bannerList");
    },
    computed: {
        ...mapState({
            bannerList: (state) => {
                return state.home.bannerList;
            },
        }),
    },
    watch: {
        bannerList: {
            handler(newValue, oldValue) {
                this.$nextTick(() => {
                    var mySwiper = new Swiper(document.querySelector(".swiper-container"), {
                        loop: true,
                        // 如果需要分页器
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                    });
                });
            },
        },
    },
    }
</script>

<style>

</style>