<template>
    <v-container>
        <v-toolbar class="transparent" flat>
            <v-toolbar-title>Witaj, {{user.firstName}} {{user.lastName}}</v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items>
                <v-btn icon color="success" fab><v-icon>edit</v-icon></v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <br/>
        <v-carousel>
            <v-carousel-item>
                <RandomCat/>
            </v-carousel-item>
            <v-carousel-item>
                <RandomCat/>
            </v-carousel-item>
            <v-carousel-item>
                <RandomCat/>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
    import RandomCat from "@/components/RandomCat";
    export default {
        name: "Profile",
        components: {RandomCat},
        data(){
            return{user: {firstName: "", lastName: ""},
            }
        },
        mounted() {
            this.user = JSON.parse(localStorage.getItem('user'));
        }

    }
</script>

<style scoped>

</style>