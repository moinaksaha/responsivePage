<template>
    <div>

        <div class="gallery__wrapper">

            <gallery-item 
                v-for="(item, i) in data"
                :car="item"
                :key="i"
            />

        </div>

        

        <div>
            <nav id="gellery__paging" class="gallery__paging">
                <button class="gallery__paging__cmd gallery__paging__cmd--symbol">&laquo;</button>
                <button class="gallery__paging__cmd gallery__paging__cmd--symbol">&lsaquo;</button>
                <button class="gallery__paging__cmd is-active">1</button>
                <button class="gallery__paging__cmd">2</button>
                <button class="gallery__paging__cmd">3</button>
                <button class="gallery__paging__cmd">4</button>
                <button class="gallery__paging__cmd gallery__paging__cmd--symbol">&rsaquo;</button>
                <button class="gallery__paging__cmd gallery__paging__cmd--symbol">&raquo;</button>
            </nav> 
        </div>

    </div>
</template>

<script>

import GalleryItem from './GalleryItem.vue';

export default {
    name: 'GalleryWrapper',
    props: ['data'],
    data(){
        return {
            scrollValue: 0,
            animatedScrolledValue: 0
        }
    },
    // computed: {
    //     animatedNumber: function() {
    //         return this.animatedScrolledValue.toFixed(0);
    //     }
    // },
    // watch: {
    //     scrollValue: function(newValue) {
    //         TweenLite.to(this.$data, 0.5, { animatedScrolledValue: newValue });
    //     }
    // },
    components: {
        'gallery-item': GalleryItem
    }
}
</script>

<style lang="scss" scoped>
    .gallery__wrapper{
        overflow-y: hidden;
        white-space: nowrap;
        display: flex;
        padding: 1em 0;
        -ms-overflow-style: none;  // IE 10+
        transition: 0.5s ease;
        ::-webkit-scrollbar {
            display: none;  /* optional: just make scrollbar invisible */
        }
    }
</style>


