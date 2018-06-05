<template>

    <div class="individual__card">

        <div class="car__image" 
            :style="getimageDivStyle">
        </div>

        <div class="car__make">
            {{car.attrs.make}}
        </div>

        <div class="car__model">
            {{car.attrs.model}}
        </div>

        <div class="car__id">
            Car ID: {{car.attrs.carId}}
        </div>

    </div>

</template>

<script>
// default export for gallery item
export default {
    name: 'GalleryItem',
    props: ['car'],
    computed: {
        // computed method to get the div with image BG style
        getimageDivStyle: function(){
            return {
                'background-image': 'url("' + this.car.attrs.img + '")',
                'background-size': 'contain',
                'background-position': 'center center',
                'background-repeat': 'no-repeat'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    // scoped style for the component 
    .individual__card{
        border: 1px solid #e6e6e6;
        // border-radius: 4px;
        display: inline-block;
        padding: 1em 1em 2em 1em;
        text-align: center;
        margin-right: 1.5em;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.14);
        .car__image{
            height: 150px;
            width: 200px;
        }
        .car__make{
            text-transform: uppercase;
            margin-top: 1em;
        }
        .car__model{
            font-weight: 800;
            font-size: 1.3em;
            margin: 0.5em 0;
        }
        .car__id{
            font-size: 0.8em;
        }
    }
</style>

