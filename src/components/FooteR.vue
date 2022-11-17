<template>
    <v-footer 
    dark 
    padless
    color=#67557D
    class="footers mt-16 fixed-bottom"
    >
        <v-card color=#67557D flat tile class="white--text py-3 px-2" width="100%">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card-text class="white--text pt-0 text-left">
                        <h3>Blog Milik Kelompok</h3>
                    </v-card-text>
                    <v-card-text class="grey--text pt-0 text-left">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error saepe veniam, in nisi, vero inventore, vel repellendus consequuntur magnam minus dicta beatae dolores aspernatur enim cum velit labore ex quidem!
                    </v-card-text>
                    
                    <v-toolbar flat color="transparent text-left">
                        <h5>Guides</h5>
                        <h5 class="ml-4">Terms of Use</h5>
                        <h5 class="ml-4">Privacy Policy</h5>
                    </v-toolbar>

                    <v-card-text class="grey--text text-left">
                        &#169; 2021-2022
                    </v-card-text>
                </v-col>

                <v-col cols="12" sm="2">
                    <v-card-text class="white--text text-left">
                        <h3>Get Help</h3>
                    </v-card-text>
                    <v-card-text class="grey--text text-left">
                        Order Status
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4 text-left">
                        Shipping and Delivery
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4 text-left">
                        Payment Options
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4 text-left">
                        Contact Us
                    </v-card-text>
                </v-col>

                <v-col cols="12" sm="2">
                    <v-card-text class="white--text text-left">
                        <h3>About Us</h3>
                    </v-card-text>
                    <v-card-text class="grey--text text-left">
                        Careers
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4 text-left">
                        Sustainability
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4 text-left">
                        Service
                    </v-card-text>
                    <v-card-text class="grey--text mt-n4 text-left">
                        CA Supply Chains Act
                    </v-card-text>
                </v-col>

                <v-col cols="12" sm="4">
                    <v-card-text class="pt-2" align="left">
                        <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
                            <v-icon size="24px">
                                {{icon}}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                    <v-card-text class="grey--text mt-14 text-left">
                        Payment Methods:
                    </v-card-text>
                    <v-hover v-slot:default="{hover}" flat>
                        <v-card-text :class="hover ? 'purple--text' : 'white--text'" class="text-left pointer" v-on:click="overlay = !overlay">
                            Login
                        </v-card-text>
                    </v-hover>

                    <v-overlay :z-index="100" :value="overlay">
                        <div class="logInOverlay" v-click-outside="onClickOutside">
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
                    </v-overlay>
        
                    <v-toolbar flat color="transparent">
                        <v-spacer></v-spacer>
                        <v-icon large>fab fa-cc-visa</v-icon>
                        <v-icon large class="mx-2"> fab fa-cc-paypal</v-icon>
                    </v-toolbar>
                </v-col>
            </v-row>
        </v-card>
    </v-footer>
</template>


<script>
export default {
    data() {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-instagram',
                'mdi-youtube',
                'mdi-linkedin',
                'mdi-pinterest',
            ],
            overlay: false,
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
        onClickOutside() {
            this.overlay = false
        },
        submitForm() {
            console.log('Login Values', this.loginValues)
        }
    }
}
</script>


<style>
.footers {
    z-index: 20;
}
.logInOverlay {
    width: 450px;
    height: 400px;
    background-color: #67557D;
    border-radius: 10px;
}
.overlayHeader {
    font-family: 'Jost';
    font-weight: 600;
}
.formContainer {
    width: 300px;
}
.loginButon {
    display: flex;
    position: absolute;
    margin-top: 20px;
    left: 170px;
    border-radius: 20px;
    width: 100px;
}
.loginText {
    text-transform: capitalize;
    color: #67557D;
    font-family: 'Jost';
    font-weight: 600;
    font-size: 17px;
}
</style>