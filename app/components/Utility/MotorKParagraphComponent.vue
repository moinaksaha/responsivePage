<template>

    <p :class="`${paragraphData.additionalClass}`">
        
        {{paragraphData.displayText}}
        
    </p>

</template>

<script>
export default {
    name: 'MotorKParagraphComponent',
    props: ['paragraphData']
}
</script>

