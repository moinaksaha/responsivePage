<template>
    <section id="gallery" class="tabs__content">
      <div class="layout-wrapper layout-wrapper--tiny palm-layout--stacked">
        <header class="layout layout--middle palm-layout--stacked">
          <div class="layout__item">
            <h1 class="heading heading--main">Projects</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut commodi consectetur corporis cum eaque ex harum hic in ipsa labore nam odio omnis optio.
            </p>
          </div>
          <div class="layout__item">
            <div class="btn-wrapper btn-wrapper--center">
              <generic-button 
                :buttonData="participateButton"/>
            </div>
          </div>
        </header>
      </div>
      <section class="gallery">

        <gallery-wrapper 
          :data="galleryData"/>
      
      </section>
    </section>
</template>

<script>

// Import child component
import GenericButton from '../Buttons/GenericButton.vue';
import GalleryWrapper from '../Gallery/GalleryWrapper.vue';

// Import the JSON data for cars
let carsData = require('../../data/cars.json');

// Default export Gallery tab content
export default {
    name: 'MotorKTabContentGallery',
    data(){
      // Initial component data
      return{
        participateButton : {
          displayText: 'Participate', 
          hrefLink : '#partecipate', 
          type: 'yellowButton',
        },
        galleryData: carsData
      }
    },
    components: {
      // component mapping
      'generic-button': GenericButton,
      'gallery-wrapper': GalleryWrapper
    }
}
</script>

<style lang="scss" scoped>
  // scoped styling for component
  #gallery{
    > section{
      margin-top: 2em;
    }
    
    header.layout{
      @media screen and (max-width: 767px){
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
</style>

