<template>
    <div class="slider__el">
      <img :data-flickity-lazyload="`${item }`" alt="" class="slider__media">
    </div>
</template>

<script>
export default {
    name: 'MotorKMainSliderBGItem',
    props: ['item']
}
</script>
