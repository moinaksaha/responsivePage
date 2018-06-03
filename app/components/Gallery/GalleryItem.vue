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
export default {
    name: 'GalleryItem',
    props: ['car'],
    computed: {
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
    .individual__card{
        border: 1px solid #e6e6e6;
        // border-radius: 4px;
        display: inline-block;
        padding: 1em;
        text-align: center;
        margin-right: 1.5em;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.14);
        .car__image{
            height: 150px;
            width: 200px;
        }
        .car__make{
            text-transform: uppercase;
            margin: 1em 0 2em 0;
        }
        .car__model{
            font-weight: 800;
        }
        .car__id{
            font-size: 0.6em;
        }
    }
</style>

