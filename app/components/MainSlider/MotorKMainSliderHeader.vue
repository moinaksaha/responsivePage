<template>

    <header class="slider__head">

        <motork-heading-component 
            :headingData="headingData"
        />

        <motork-paragraph-component
            :paragraphData="headerParagraphData" 
        />
        
        <div class="slider__head__el btn-wrapper">

            <generic-button
                :buttonData="galleryShowcaseButton" 
            />

            <generic-button
                :buttonData="participateButton" 
            />

        </div>

    </header>

</template>

<script>

import GenericButton from '../Buttons/GenericButton.vue';
import MotorKHeadingComponent from '../Utility/MotorKHeadingComponent.vue';
import MotorKParagraphComponent from '../Utility/MotorKParagraphComponent.vue';


export default {
    name: 'MotorKMainSliderHeader',
    data(){
      return{
        galleryShowcaseButton : {
          displayText: 'Gallery Showcase', 
          hrefLink : '#gallery', 
          type: 'transparentButton'
        },
        participateButton : {
          displayText: 'Participate', 
          hrefLink : '#participate', 
          type: 'yellowButton'
        },
        headingData: {
            displayText: 'Contest',
            additionalClass: 'slider__head__el',
            type: 'main'
        },
        headerParagraphData: {
            displayText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum dolore eveniet
            in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum suscipit, tenetur ullam
            voluptates.
            <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum
            dolore eveniet in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum
            suscipit, tenetur ullam voluptates.`,
            additionalClass: `slider__head__el slider__copy`
        }
      }
    },
    components: {
      'generic-button': GenericButton,
      'motork-heading-component': MotorKHeadingComponent,
      'motork-paragraph-component': MotorKParagraphComponent
    }
}
</script>

<style lang="scss">

/* === MAIN SLIDER === */

.slider__head {
	max-width: 50%;
	position: absolute;
	left: 50%;
	top: 50%;
	z-index: 2;
	padding-top: 1em;
	padding-bottom: 1em;
	background-color: rgba(255, 255, 255, .4);
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
    @media screen and (max-width: 991px) {
        max-width: 70%;
    }
    @media screen and (max-width: 767px) {
        max-width: 90%;
    }
}

.slider__head__el {
	opacity: 0;
	-webkit-transform: matrix(0.5, 0, 0, 0.5, 0, -22);
    transform: matrix(0.5, 0, 0, 0.5, 0, -22);
    .btn{
        @media screen and (max-width: 767px) {
            display: block;
            &:nth-child(2) {
                margin-left: 0;
                margin-top: 1em;
            }
        }
        
    }
}


.slider__media {
	visibility: hidden;
}


</style>

