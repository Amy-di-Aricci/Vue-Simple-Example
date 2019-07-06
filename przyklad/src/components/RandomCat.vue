<template>
    <v-img v-if="readyToRender" v-bind:src="catImg"></v-img>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "RandomCat",
        data(){
            return{
                catImg: "",
                response: "",
                readyToRender: false,
            }
        },
        methods:{
            async getImage(){
                try{
                    this.response = await axios.get('https://aws.random.cat/meow');
                    if(this.response.status === 200){
                        this.catImg = this.response.data.file.toString();
                        this.readyToRender = true;
                    }

                }
                catch (e) {

                }
            }
        },
        mounted(){
            this.getImage();
        }
    }
</script>

<style scoped>

</style>