<template>

    <p :class="`${paragraphData.additionalClass}`">
        
        {{paragraphData.displayText}}
        
    </p>

</template>

<script>
// Utility Component - Paragraphs
// prop - paragraphData
export default {
    name: 'MotorKParagraphComponent',
    props: ['paragraphData']
}
</script>

