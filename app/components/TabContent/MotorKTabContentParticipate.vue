<template>
    <section id="partecipate" class="tabs__content">
      <div class="layout portable-layout--stacked">
        <figure class="layout__item u-1/3 hero portable--order-02">
          <div class="svg-wrapper">
            <svg class="shape-wrapper" xmlns="http://www.w3.org/2000/svg">
              <rect class="shape"/>
            </svg>
          </div>
          <img src="img/ph01.png" alt="" class="hero__media">
        </figure>
        <div class="layout__item u-2/3 portable--order-01">
          <h1 class="heading heading--sec">How to participate</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolor enim expedita explicabo illum impedit iste labore, minima mollitia nemo officia rem rerum suscipit tempora. Blanditiis natus quas voluptatem!
          </p>
          <div class="btn-wrapper">

            <generic-button 
              :buttonData="downloadTemplateButton" 
            />

          </div>
          <div class="form-wrapper">

            <motork-form-component />

          </div>
        </div>
      </div>
    </section>
</template>

<script>

// Import child components
import MotorKParagraphComponent from '../Utility/MotorKParagraphComponent.vue';
import GenericButton from '../Buttons/GenericButton.vue';
import MotorKFormComponent from './MotorKFormComponent.vue'

// default export Participate tab content
export default {
    name: 'MotorKTabContentParticipate',
    components: {
      // component mapping
      'motork-paragraph-component': MotorKParagraphComponent,
      'generic-button': GenericButton,
      'motork-form-component': MotorKFormComponent
    },
    data(){
      return {
        // download template button data
        downloadTemplateButton: {
          displayText: 'Download The Template', 
          hrefLink : '#', 
          type: 'transparentButton'
        }
      }
    }
}
</script>

<style lang="scss" scoped>
  // scoped component styling 
  .layout{
    @media screen and (max-width: 1024px){
      display: flex;
      flex-direction: column-reverse;
      flex-wrap: wrap;
    }
  }
  .btn-wrapper a{
    @media screen and (max-width: 767px){
      display: block;
    }
  }
  figure.u-1\/3{
    @media screen and (max-width: 1024px){
      margin: 100px 0;
    }
  }
  /* === HERO === */
  .shape-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .hero__media {
    max-width: 40%;
    left: 50%;
    top: 50%;
  }

  .svg-wrapper {
    position: absolute;
    top: 0;
    left: 10%;
    width: 50%;
    height: 0;
    padding-bottom: 50%;
    .is-visible .shape {
      stroke-dashoffset: 0;
      stroke-dasharray: 1290;
    }
  }

  .shape {
    width: 100%;
    height: 100%;
    stroke-dasharray: 140 1290;
    stroke-dashoffset: -474;
    stroke-width: 0.75rem;
    fill: transparent;
    stroke: rgba(248, 159, 28, 1);
    -webkit-transition: stroke-dashoffset 1s,
    stroke-dasharray 1s;
    transition: stroke-dashoffset 1s,
    stroke-dasharray 1s;
  }
</style>

