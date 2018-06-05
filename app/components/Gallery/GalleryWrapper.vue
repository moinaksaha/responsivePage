<template>
    <div>

        <div class="layout-wrapper layout-wrapper--tiny gallery__wrapper"
            ref="galleryImageWrapper"
            id="moinak"
            @scroll="debounceFunc">

            <gallery-item 
                v-for="(item, i) in data"
                :car="item"
                :key="i"
            />

        </div>

        <div>

            <nav id="gellery__paging" class="gallery__paging">

                <button class="gallery__paging__cmd gallery__paging__cmd--symbol"
                    @click="slideFirst">&laquo;</button>

                <button class="gallery__paging__cmd gallery__paging__cmd--symbol"
                    @click="slidePrev">&lsaquo;</button>

                <button class="gallery__paging__cmd gallery__paging__cmd--symbol"
                    @click="slideNext">&rsaquo;</button>

                <button class="gallery__paging__cmd gallery__paging__cmd--symbol"
                    @click="slideLast">&raquo;</button>

            </nav> 

        </div>

    </div>

</template>

<script>

import debounce from 'debounce';

import GalleryItem from './GalleryItem.vue';

export default {
    name: 'GalleryWrapper',
    props: ['data'],
    data(){
        return {
            scrollValue: 0,
            isScrolling: false
        }
    },
    computed: {
        animatedNumber: function() {
            return this.animatedScrolledValue.toFixed(0);
        }
    },
    watch: {
        scrollValue: function(newValue) {
            TweenLite.to(this.$refs.galleryImageWrapper, 0.5, { scrollLeft: newValue })
        }
    },
    components: {
        'gallery-item': GalleryItem
    },
    methods: {
        slideNext: function(){
            const scrollWidth = this.$refs.galleryImageWrapper.scrollWidth;
            const galleryWidth = this.$refs.galleryImageWrapper.offsetWidth;
            this.scrollValue = ((this.scrollValue + galleryWidth + 252) >= scrollWidth) ?
                                 scrollWidth-galleryWidth :  
                                 this.scrollValue + 252;
        },
        slidePrev: function(){
            this.scrollValue = (this.scrollValue >= 252) ? 
                                this.scrollValue - 252 : 
                                0;
        },
        slideLast: function(){
            const scrollWidth = this.$refs.galleryImageWrapper.scrollWidth;
            const galleryWidth = this.$refs.galleryImageWrapper.offsetWidth;
            this.scrollValue = scrollWidth - galleryWidth;
        },
        slideFirst: function(){
            this.scrollValue = 0;
        },
        debounceFunc: debounce(function() {
            this.updateScrollPosition();
        }, 50),
        updateScrollPosition: function(){
            const scrollPos = this.$refs.galleryImageWrapper.scrollLeft;
            if(scrollPos > this.scrollValue){
                this.scrollValue = Math.ceil(scrollPos/252)*252;
            }else if(scrollPos < this.scrollValue){
                this.scrollValue = Math.floor(scrollPos/252)*252;
            }
        }
        // handleScroll: function (event) {

        //     // window.clearTimeout( this.isScrolling );

        //     // this.isScrolling = setTimeout(() => {
        //     //     console.log( 'Scrolling has stopped.' );
        //     //     this.updateScrollPosition(this.$refs.galleryImageWrapper.scrollLeft);
        //     // }, 50);

        // },
        
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


