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
            :paragraphData = "paraTextTop" />

          <motork-paragraph-component 
            :paragraphData = "paraTextBottom" />
          
          <div class="btn-wrapper">

            <generic-button
              :buttonData="imaCTAButton" 
            />

            <generic-button
              :buttonData="meTooButton" 
            />

          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>


// importing child components
import MotorKParagraphComponent from '../Utility/MotorKParagraphComponent.vue';
import GenericButton from '../Buttons/GenericButton.vue';

// default export showcase tab content
export default {
    name: 'MotorKTabContentShowcase',
    data() {
      // inital data for the component
      // also includes child component data
      return {
        paraTextTop: {
          displayText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque, in
            nemo nisi quaerat quibusdam temporibus. Ducimus eaque eligendi, enim mollitia neque
            porro reprehenderit sequi ullam unde vel voluptates voluptatum?`,
        },
        paraTextBottom: {
          displayText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloremque.`
        },
        imaCTAButton : {
          displayText: 'I\'m a CTA', 
          hrefLink : '#gallery', 
          type: 'transparentButton'
        },
        meTooButton : {
          displayText: 'Yeah, me too', 
          hrefLink : '#gallery', 
          type: 'transparentButton'
        }
      }
    },
    components: {
      // component mapping
      'motork-paragraph-component': MotorKParagraphComponent,
      'generic-button': GenericButton
    }
}
</script>

<style lang="scss" scoped>
  // scoped component styling
  #showcase{
    .grid__item{
      display: flex;
      position: relative;
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
      -webkit-transition: z-index .25s;
      transition: z-index .25s;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      & > img {
        display: block;
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -webkit-filter: grayscale(70%);
        transition: -webkit-filter .5s,
        transform .25s cubic-bezier(0.785, 0.135, 0.150, 0.860);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
    }
    .grid__item--stacked {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      & > .grid__item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1 0 auto;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
      }
    }

    .btn-wrapper{
      a{
        @media screen and (max-width: 600px){
          display: block;
          &:nth-child(2){
            margin-left: 0;
            margin-top: 1em;
          }
        }
      }
    }
    & > .layout{
      flex-direction: row;
      @media screen and (max-width: 991px){
        flex-direction: column;
      }
      & > .layout__item{
        @media screen and (max-width: 991px){
          padding: 0;
        }
      }
    }

    .showcase-gallery__el,
    .showcase-gallery__el > img {
      width: 100%;
      display: block;
    }

  }
</style>


