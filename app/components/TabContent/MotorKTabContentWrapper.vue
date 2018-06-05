<template>

    <div class="tabs__content-wrapper">

          <motork-tab-content-participate />

          <motork-tab-content-gallery />

          <motork-tab-content-showcase />

    </div>

</template>

<script>

// import child components
import MotorKTabContentShowcase from './MotorKTabContentShowcase.vue';
import MotorKTabContentGallery from './MotorKTabContentGallery.vue';
import MotorKTabContentParticipate from './MotorKTabContentParticipate.vue';

// default export content wrapper for all the tabs
export default {
    name: 'MotorKTabContentWrapper',
    components: {
        // child component mapping
        'motork-tab-content-showcase': MotorKTabContentShowcase,
        'motork-tab-content-gallery': MotorKTabContentGallery,
        'motork-tab-content-participate': MotorKTabContentParticipate
    }
}
</script>
