<template>
  <section id="showcase" class="tabs__content">
    <div class="layout portable-layout--stacked">
      <div class="layout__item palm--order-02 ph">
        <div id="showcase-grid" class="grid">
          <div id="showcase-grid__wrapper">
            <div class="grid__row layout">
              <div class="grid__item layout__item u-2/3">
                <img src="img/grid/01.png" alt="">
              </div>
              <div class="grid__item grid__item--stacked layout__item u-1/3">
                <div class="grid__item">
                  <img src="img/grid/02_2.png" alt="">
                </div>
                <div class="grid__item">
                  <img src="img/grid/thumb_gears2_default.png" alt="">
                </div>
              </div>
            </div>
            <div class="grid__row layout">
              <div class="grid__item  grid__item--stacked layout__item u-1/3">
                <div class="grid__item">
                  <img src="img/grid/03.png" alt="">
                </div>
                <div class="grid__item">
                  <img src="img/grid/gears2_design_detail01.png" alt="">
                </div>
              </div>
              <div class="grid__item layout__item u-2/3">
                <img src="img/grid/gears2_design_detail03.png" alt="">
              </div>
            </div>
            <div class="grid__row layout">
              <div class="grid__item layout__item">
                <img src="img/grid/gears2_connectivity_basic.png" alt="">
              </div>
              <div class="grid__item layout__item">
                <img src="img/grid/gears2_design_detail02.png" alt="">
              </div>
            </div>
            <div class="grid__row layout">
              <div class="grid__item layout__item">
                <img src="img/grid/gears2_kv_left.png" alt="">
              </div>
              <div class="grid__item layout__item">
                <img src="img/grid/01_2.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layout__item palm--order-01 ph">
        <section id="showcase-copy" class="showcase-copy fixedsticky">

          <motork-paragraph-component 
            :displayText = "paraTextTop" />

          <motork-paragraph-component 
            :displayText = "paraTextBottom" />
          
          <div class="btn-wrapper">
            <a href="#" class="btn btn--sec">I'm a CTA</a>
            <a href="#" class="btn btn--sec">Yeah, me too</a>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>

import MotorKParagraphComponent from '../Utility/MotorKParagraphComponent.vue';

export default {
    name: 'MotorKTabContentShowcase',
    data() {
      return {
        paraTextTop: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque, in
            nemo nisi quaerat quibusdam temporibus. Ducimus eaque eligendi, enim mollitia neque
            porro reprehenderit sequi ullam unde vel voluptates voluptatum?`,
        paraTextBottom: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque.`
      }
    },
    components: {
      'motork-paragraph-component': MotorKParagraphComponent
    }
}
</script>

