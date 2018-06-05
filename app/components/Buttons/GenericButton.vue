<template>
    <a 
        :href="`${buttonData.hrefLink}`"
        :class="this.getButtonClassName">
            {{buttonData.displayText}}    
    </a>
</template>

<script>
// default export for the genric button component
// prop: button data
// choses one of the following type of buttons - [btn btn--sec, btn btn--main]
// can be reused if props are changed according to need
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
