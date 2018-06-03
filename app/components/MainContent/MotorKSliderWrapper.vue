<template>

  <section class="slider-wrapper slider-wrapper--main">

    <div class="layout-wrapper layout-wrapper--absolute">

      <motork-main-slider-header />

    </div>

    <!-- <motork-main-slider-bg-item
      v-for="(item, i) in topSliderImageList"
      :appointment="item"
      :key="i"
    /> -->

    <div class="slider__el">
      <img data-flickity-lazyload="https://unsplash.it/g/1920/800?image=0" alt="" class="slider__media">
    </div>

    <div class="slider__el">
      <img data-flickity-lazyload="https://unsplash.it/g/1920/800?image=1" alt="" class="slider__media">
    </div>

    <div class="slider__el">
      <img data-flickity-lazyload="https://unsplash.it/g/1920/800?image=2" alt="" class="slider__media">
    </div>

    <div class="slider__el">
      <img data-flickity-lazyload="https://unsplash.it/g/1920/800?image=3" alt="" class="slider__media">
    </div>

  </section>

</template>

<script>

import MotorKMainSliderBGItem from '../MainSlider/MotorKMainSliderBGItem.vue';
import MotorKMainSliderHeader from '../MainSlider/MotorKMainSliderHeader.vue'

export default {
    name: 'MotorKSliderWrapper',
    data(){
      return{
        topSliderImageList: [
          'https://unsplash.it/g/1920/800?image=0',
          'https://unsplash.it/g/1920/800?image=1',
          'https://unsplash.it/g/1920/800?image=2',
          'https://unsplash.it/g/1920/800?image=3'
        ]
      }
    },
    components: {
      'motork-main-slider-bg-item': MotorKMainSliderBGItem,
      'motork-main-slider-header': MotorKMainSliderHeader
    }
}
</script>

<style scoped>

/* === MAIN SLIDER === */
.slider-wrapper {
	height: calc(100vh - 78px);
	position: relative;
}

/* .slider__head {
	max-width: 75%;
	position: absolute;
	left: 10%;
	top: 50%;
	z-index: 2;
	padding-top: 1em;
	padding-bottom: 1em;
	background-color: rgba(255, 255, 255, .4);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}

.slider__head__el {
	opacity: 0;
	-webkit-transform: matrix(0.5, 0, 0, 0.5, 0, -22);
	transform: matrix(0.5, 0, 0, 0.5, 0, -22);
} */

.slider__el {
	width: 100%;
	height: 100%;
	opacity: 0;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	-webkit-transition: opacity 1.5s ease-out;
	transition: opacity 1.5s ease-out;
}

.slider__media {
	visibility: hidden;
}


</style>

