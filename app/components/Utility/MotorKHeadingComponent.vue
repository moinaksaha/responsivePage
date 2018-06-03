<template>

    <h1 
        :class="this.getHeadingClassName">
            {{headingData.displayText}} 
    </h1>

</template>

<script>
export default {
    name: 'MotorKHeadingComponent',
    props: ['headingData'],
    computed: {
        getHeadingClassName: function(){
            let className = null;
            if(this.headingData.type === 'main'){
                return `${this.headingData.additionalClass} heading heading--main`
            }
            if(this.headingData.type === 'sec'){
                return `${this.headingData.additionalClass} heading heading--sec`
            }
            
        }
    }
}
</script>
