<template>

    <main class="main-content">

          <motork-slider-wrapper />

          <motork-tabs />
          
    </main>
    
</template>


<script>

import MotorKSliderWrapper from './MainContent/MotorKSliderWrapper.vue';
import MotorKTabs from './MainContent/MotorKTabs.vue';


export default {
    name: 'MotorKMainContent',
    components: {
        'motork-slider-wrapper' : MotorKSliderWrapper,
        'motork-tabs': MotorKTabs
    }
}
</script>
