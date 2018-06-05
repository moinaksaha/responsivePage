<template>

    <main class="main-content">

          <motork-slider-wrapper />

          <motork-tabs />
          
    </main>
    
</template>


<script>

// Importing components for the main component section
import MotorKSliderWrapper from './MainContent/MotorKSliderWrapper.vue';
import MotorKTabs from './MainContent/MotorKTabs.vue';

// default export
export default {
    name: 'MotorKMainContent',
    components: {
        'motork-slider-wrapper' : MotorKSliderWrapper,
        'motork-tabs': MotorKTabs
    }
}
</script>
