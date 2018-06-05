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

// Importing 'submitIt' function to mock image upload 
import { submitIt } from '../../src/js/otherUtility.js';

// default export for the file upload component
export default {
    name: 'FileUpload',
    data(){
        // initial state of the component
        return{
            image: '',
            uploading: false,
            fileSizeError: false,
            fileUploaded: false,
            fileUploadError: false
        }
    },
    methods: {
        // method to fire onchange of input field
        onFileChange: function(e) {
            // reset the state on file change
            this.image = '';
            this.fileSizeError = false;
            this.fileUploaded = false;
            this.fileUploadError = false;
            this.uploading = false;
            
            var files = e.target.files || e.dataTransfer.files;

            // checks for successful file attachment
            if (!files.length)
                return;
            // checks for file size
            if(files[0].size <= 5*1024*1024){
                this.createImage(files[0]);
            }else{
                // show error
                this.fileSizeError = true;
            }
            
        },
        // method to create the image file to be uploaded for a valid image file
        createImage: function(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        // function to remove the image data - can be used 
        removeImage: function (e) {
            this.image = '';
        }
    },
    // watcher on the image data
    watch: {
        image: function(){ 

            // emit a function to attach the file data to the form - if it is to be used
            this.$emit('imageUploadData', this.image);

            // if image data is present,
            // mock uploading the file 
            if(this.image !== ''){
                // set uploading to true
                // used to disable the input during upload
                // also show the user a prompt
                this.uploading = true;

                // actual promise call 
                // with success and error handlers
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
    // scoped style for the image upload component
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


