<template>

  <div id="main-app">
        
    <motork-share-layer />
  
    <motork-main-header />

    <motork-main-content />
  
    <motork-main-footer />
        
  </div>

</template>

<script>

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
    components: {
      'motork-main-header': MotorKMainHeader,
      'motork-share-layer': MotorKShareLayer,
      'motork-main-footer': MotorKMainFooter,
      'motork-main-content': MotorKMainContent
    },
    created: function(){
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', '../src/js/utils.js')
      document.head.appendChild(recaptchaScript)

      let recaptchaScript1 = document.createElement('script')
      recaptchaScript1.setAttribute('src', '../src/js/main.js')
      document.head.appendChild(recaptchaScript1)
    }
  } //default
</script>