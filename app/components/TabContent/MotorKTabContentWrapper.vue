<template>

    <div class="tabs__content-wrapper">

          <motork-tab-content-participate />

          <motork-tab-content-gallery />

          <motork-tab-content-showcase />

    </div>

</template>

<script>

import MotorKTabContentShowcase from './MotorKTabContentShowcase.vue';
import MotorKTabContentGallery from './MotorKTabContentGallery.vue';
import MotorKTabContentParticipate from './MotorKTabContentParticipate.vue';

export default {
    name: 'MotorKTabContentWrapper',
    components: {
        'motork-tab-content-showcase': MotorKTabContentShowcase,
        'motork-tab-content-gallery': MotorKTabContentGallery,
        'motork-tab-content-participate': MotorKTabContentParticipate
    }
}
</script>
