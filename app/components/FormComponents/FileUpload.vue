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
                @change="onFileChange">

        </label>

        <span v-if="fileUploaded"
            class="file__upload__message success">
                Image uploaded successfully
        </span>

        <span v-if="fileSizeError"
            class="file__upload__message error">
                Image Size Error: Please upload a file under 5MBs.
        </span>

    </div>

</template>

<script>
export default {
    name: 'FileUpload',
    data(){
        return{
            image: '',
            fileSizeError: false,
            fileUploaded: false
        }
    },
    methods: {
        onFileChange: function(e) {

            this.image = '';
            this.fileSizeError = false;
            this.fileUploaded = false;
            
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            if(files[0].size <= 5*1024*1024){
                this.createImage(files[0]);
            }else{
                this.fileSizeError = true;
                console.log("Too large file")
            }
            
        },
        createImage: function(file) {
            console.log("size:", file.size)
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                console.log("done");
                vm.image = e.target.result;
                this.fileUploaded = true;
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
        }
    }
}
</script>

<style lang="scss" scoped>
    label[for=project-upload]{
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
            color: #ff4646;
        }
        &.success{
            color: #00cc92;
        }
    }
</style>


