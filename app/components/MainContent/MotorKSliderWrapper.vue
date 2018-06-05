<template>

  <section class="slider-wrapper slider-wrapper--main">

    <div class="layout-wrapper layout-wrapper--absolute">

      <motork-main-slider-header />

    </div>

    <motork-main-slider-bg-item
      v-for="(item, i) in topSliderImageList"
      :item="item"
      :key="i"
    />

  </section>

</template>

<script>

// Importing child components
import MotorKMainSliderBGItem from '../MainSlider/MotorKMainSliderBGItem.vue';
import MotorKMainSliderHeader from '../MainSlider/MotorKMainSliderHeader.vue'

// default export for the slider wrapper
export default {
    name: 'MotorKSliderWrapper',
    data(){
      // data for the slider images
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

<style lang="scss">

/* === MAIN SLIDER === */
.slider-wrapper {
	height: calc(100vh - 78px);
	position: relative;
  min-height: 500px;
  @media screen and (max-width: 767px) {
        height: calc(100vh - 200px);
  }
}

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

