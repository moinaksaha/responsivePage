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

import MotorKParagraphComponent from '../Utility/MotorKParagraphComponent.vue';
import GenericButton from '../Buttons/GenericButton.vue';
import MotorKFormComponent from './MotorKFormComponent.vue'

export default {
    name: 'MotorKTabContentParticipate',
    components: {
      'motork-paragraph-component': MotorKParagraphComponent,
      'generic-button': GenericButton,
      'motork-form-component': MotorKFormComponent
    },
    data(){
      return {
        downloadTemplateButton: {
          displayText: 'Download The Template', 
          hrefLink : '#', 
          type: 'transparentButton'
        }
      }
    }
}
</script>
