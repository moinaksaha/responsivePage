<template>

    <div class="share-layer__btn-wrapper">
        
        <a 
            :href="`${shareButtonData.href}`" 
            :class="`btn btn--share ${shareButtonData.additionalClass}`"
            target="_blank"
        >

            <svg 
                class="icon icon--light" 
                viewBox="0 0 1024 1024" 
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >

                <title>{{shareButtonData.title}}</title>

                <path 
                    :class="`${shareButtonData.pathClass}`"
                    :d="`${shareButtonData.dValue}`">
                </path>

            </svg>

            <span class="btn__text">{{shareButtonData.buttonText}}</span>

        </a>

    </div>
</template>

<script>
export default {
    name: 'ShareLayerButton',
    props: ['shareButtonData']
}
</script>

