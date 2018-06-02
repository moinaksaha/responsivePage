<template>
    <section class="slider-wrapper slider-wrapper--main">
            <div class="layout-wrapper layout-wrapper--absolute">
              <header class="slider__head">
                <h1 class="slider__head__el heading heading--main">Contest</h1>
                <p class="slider__head__el slider__copy">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum dolore eveniet
                  in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum suscipit, tenetur ullam
                  voluptates.
                  <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum
                  dolore eveniet in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum
                  suscipit, tenetur ullam voluptates.
                </p>
                
                <div class="slider__head__el btn-wrapper">
                  <a href="#" class="btn btn--sec">Gallery showcase</a>
                  <a href="#partecipate" class="btn btn--main">Participate</a>
                </div>
              </header>
            </div>
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
export default {
    name: 'MotorKSliderWrapper'
}
</script>
