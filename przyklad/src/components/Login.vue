<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <div>
                <v-card flat width="500">
                    <v-card-title class="display-1">Zaloguj się</v-card-title>
                    <v-card-text>
                        <v-form v-model="validForm" ref="form">
                            <v-text-field :rules="[rules.required]" v-model="input.username" label="Login" reguired></v-text-field>
                            <v-text-field :rules="[rules.required]" v-model="input.password" type="password" label="Hasło" required></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <div>
                            <v-btn color="success" @click="login">Zaloguj</v-btn>
                        </div>
                    </v-card-actions>
                </v-card>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                input: {
                    username: "",
                    password: "",
                },
                rules: {
                    required: value => !!value || 'Pole wymagane.',
                },
                validForm: false,
                user: {
                    firstName: "Jan",
                    lastName: "Nowak",
                }
            }
        },
        methods: {
            login(){
                this.$refs.form.validate();
                if(this.validForm){
                    if(this.input.username === "admin" && this.input.password === "admin"){
                        localStorage.setItem('user', JSON.stringify(this.user));
                        this.$router.replace('/');
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>