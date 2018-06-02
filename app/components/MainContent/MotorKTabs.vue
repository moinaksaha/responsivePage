<template>
    <section class="tabs">
      <div class="layout-wrapper">
        
        <motork-tab-nav />

        <motork-tab-content-wrapper />

      </div>
    </section>
</template>

<script>

import MotorKTabNav from '../TabContent/MotorKTabNav.vue';
import MotorKTabContentWrapper from '../TabContent/MotorKTabContentWrapper.vue';

export default {
    name: 'MotorKTabs',
    components: {
      'motork-tab-nav': MotorKTabNav,
      'motork-tab-content-wrapper': MotorKTabContentWrapper
    }
}
</script>
