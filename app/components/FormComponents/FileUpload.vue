<template>

    <div>

        <label class="form__el" for="project-upload">
            Upload your file (.jpg/.jpeg/.png)
            <input 
                type="file" 
                name="project-upload" 
                id="project-upload" 
                accept=".jpg,.jpeg,.png" 
                class="hidden"
                :disabled="uploading"
                @change="onFileChange">

        </label>

        <div v-if="uploading"
            class="file__upload__message">
                <span class="file__icon uploading"></span>
                Image upload in progress
        </div>

        <div v-if="fileUploaded"
            class="file__upload__message success">
            <span class="file__icon upload__success"></span>
                Image uploaded successfully
        </div>

        <div v-if="fileUploadError"
            class="file__upload__message error">
            <span class="file__icon upload__error"></span>
                Could not upload Image. Please try again later.
        </div>

        <div v-if="fileSizeError"
            class="file__upload__message warning">
            <span class="file__icon size__warning"></span>
                Image Size Error: Please upload a file under 5MBs.
        </div>

    </div>

</template>

<script>

import { submitIt } from '../../src/js/otherUtility.js';

export default {
    name: 'FileUpload',
    data(){
        return{
            image: '',
            uploading: false,
            fileSizeError: false,
            fileUploaded: false,
            fileUploadError: false
        }
    },
    methods: {
        onFileChange: function(e) {

            this.image = '';
            this.fileSizeError = false;
            this.fileUploaded = false;
            this.fileUploadError = false;
            this.uploading = false;
            
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            if(files[0].size <= 5*1024*1024){
                this.createImage(files[0]);
            }else{
                this.fileSizeError = true;
            }
            
        },
        createImage: function(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        }
    },
    watch: {
        image: function(){ 

            this.$emit('imageUploadData', this.image);
            if(this.image !== ''){
                this.uploading = true;

                submitIt(this.image)
                .then((response) => {
                    this.fileUploaded = true;
                    this.uploading = false;
                }).catch((err) => {
                    this.fileUploadError = true;
                    this.uploading = false;
                })
            }
            
            
        }
    }
}
</script>

<style lang="scss" scoped>

    label[for=project-upload]{
        &:active {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }
        @media screen and (max-width: 767px){
            width: calc(100% - 2px);
            position: relative;
            margin-bottom: 1em;
        }
    }

    .file__upload__message{
        font-size: 0.8rem;
        margin: 0.5em 0 2em 0;
        display: block;
        &.error{
            color: #ea2035;
        }
        &.success{
            color: #48ab1d;
        }
        &.warning{
            color: #F89F1C;
        }

        .file__icon{
            width: 20px;
            height: 20px;
            display: inline-block;
            margin-right: 5px;
            position: relative;
            top: 5px;

            &.uploading{
                background: url('../../img/form_icon/loadingInProgress.gif');
                background-size: contain;
                background-position: center center;
            }
            &.size__warning{
                background: url('../../img/form_icon/warning.png');
                background-size: contain;
                background-position: center center;
            }
            &.upload__error{
                background: url('../../img/form_icon/error.png');
                background-size: contain;
                background-position: center center;
            }
            &.upload__success{
                background: url('../../img/form_icon/success.png');
                background-size: contain;
                background-position: center center;
            }
        }
    }
    
</style>


