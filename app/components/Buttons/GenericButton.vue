<template>
    <a 
        :href="`${buttonData.hrefLink}`"
        :class="this.getButtonClassName">
            {{buttonData.displayText}}    
    </a>
</template>

<script>
export default {
    name: 'GenericButton',
    props: ['buttonData'],
    computed: {
        getButtonClassName: function(){
            // TODO: write the default behaviour comment
            const className = (this.buttonData.type === 'yellowButton') ? 'btn btn--main' : 'btn btn--sec';
            return className;
        }
    }
}
</script>
