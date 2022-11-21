<template lang="">
    <div>
        <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submitForm">
            <v-container class="formContainer">
                <h2 class="overlayHeader pt-8 pb-5">Login Admin</h2>
                <v-row>
                    <v-icon large class="pt-13 ml-5">fa fa-circle-user</v-icon>
                    <v-text-field v-model="loginValues.username" :rules="usernameRules" label="Username" required class="pt-16 mx-5"></v-text-field>
                </v-row>
                <v-row>
                    <v-icon large class="pt-5 ml-5">fa fa-lock</v-icon>
                    <v-text-field v-model="loginValues.password" type="password" label="Password" required class="pt-8 mx-5"></v-text-field>
                </v-row>
                <v-row>
                    <v-btn type="submit" class="loginButon" color="white">
                        <div class="loginText">Masuk</div>
                    </v-btn>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            valid: true,
            loginValues: {
                username: '',
                password: '',
            },
            usernameRules: [
                v => !!v || 'Userame is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
        }
    },
    methods: {
        submitForm() {
            console.log('Login Values', this.loginValues)
        }
    }
}
</script>


<style lang="scss">
    
</style>