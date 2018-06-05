<template>

  <div id="main-app">
        
    <motork-share-layer />
  
    <motork-main-header />

    <motork-main-content />
  
    <motork-main-footer />
        
  </div>

</template>

<script>
  
  // Import the page components here
  import MotorKMainHeader from '../../components/MotorKMainHeader.vue';
  import MotorKShareLayer from '../../components/MotorKShareLayer.vue';
  import MotorKMainFooter from '../../components/MotorKMainFooter.vue';
  import MotorKMainContent from '../../components/MotorKMainContent.vue';

  export default {
    name: 'MainApp',
    data() {
      return {
        title: 'MotorK Assignment'
      } //return
    }, //data
    // component mapping
    components: {
      'motork-main-header': MotorKMainHeader,
      'motork-share-layer': MotorKShareLayer,
      'motork-main-footer': MotorKMainFooter,
      'motork-main-content': MotorKMainContent
    },
    created: function(){
      // include the Util file 
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', '../../src/js/utils.js');
      document.head.appendChild(recaptchaScript)
    },
    mounted: function(){
      // include the main js file
      let recaptchaScript1 = document.createElement('script');
      recaptchaScript1.setAttribute('src', '../../src/js/main.js');
      document.head.appendChild(recaptchaScript1)
    }
  }
</script>

<style lang="scss">

  #main-app{
    .main-content {
      overflow: hidden;
      &::after {
        content: "";
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: -1;
        right: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .6);
        /*transform: scale(1.2);*/
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: z-index .7s linear,
        opacity 1s ease-out;
        transition: z-index .7s linear,
        opacity 1s ease-out;
      }
    }

    .main-content,
    .main-footer {
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transition: transform .7s cubic-bezier(1.000, 0.000, 0.000, 1.000),
      -webkit-filter .7s cubic-bezier(1.000, 0.000, 0.000, 1.000);
    }

    .main-header,
    .main-footer {
      padding: 1rem;
    }

    .main-header {
      color: #212428;
    }

    .main-footer {
      color: #FFFFFF;
      background-color: #212428;
    }

    .link__deco {
      border-bottom: 1px solid;
    }
  }

  
  
</style>
