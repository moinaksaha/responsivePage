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

// import debounce from npm debounce
import debounce from 'debounce';

// import child component
import GalleryItem from './GalleryItem.vue';

// default export for the gallery wrapper
export default {
    name: 'GalleryWrapper',
    props: ['data'],
    data(){
        // initial state
        return {
            scrollValue: 0,
            isScrolling: false
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
        // slider Methods - Next
        slideNext: function(){
            const scrollWidth = this.$refs.galleryImageWrapper.scrollWidth;
            const galleryWidth = this.$refs.galleryImageWrapper.offsetWidth;
            this.scrollValue = ((this.scrollValue + galleryWidth + 252) >= scrollWidth) ?
                                 scrollWidth-galleryWidth :  
                                 this.scrollValue + 252;
        },
        // Slider Method - Prev
        slidePrev: function(){
            this.scrollValue = (this.scrollValue >= 252) ? 
                                this.scrollValue - 252 : 
                                0;
        },
        // Slider Method - last
        slideLast: function(){
            const scrollWidth = this.$refs.galleryImageWrapper.scrollWidth;
            const galleryWidth = this.$refs.galleryImageWrapper.offsetWidth;
            this.scrollValue = scrollWidth - galleryWidth;
        },
        // slider method - last
        slideFirst: function(){
            this.scrollValue = 0;
        },
        // debounce function to scroll to an elemet everytime a user scrolls
        debounceFunc: debounce(function() {
            this.updateScrollPosition();
        }, 50),
        // update scroll position
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
    // scoped gallery wrapper style
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


