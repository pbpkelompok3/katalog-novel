<template lang="">
    <div>
        <v-form ref="form" v-model="valid" light lazy-validation @submit.prevent="submitAddBook">
            <v-container class="overlayAddBook">
                <h2 class="headerAddBook pt-8 pb-5">Tambah Buku</h2>
                <v-row>
                    <v-col cols="12" sm="3" class="">
                        <v-row >
                            <v-text-field v-model="judul" color="#67557D" type="" label="Judul" light outlined required class="" ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="penulis" color="#67557D" type="" label="Penulis" light outlined required class="" ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="penerbit" color="#67557D" type="" label="Penerbit" light outlined required class="" ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="tahunTerbit" color="#67557D" type="" label="Tahun Terbit" light outlined required class="" ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="halaman" color="#67557D" type="" label="Halaman" light outlined required class="" ></v-text-field>
                        </v-row>
                    </v-col>
                    <v-col class="mx-5">
                        <v-row cols="12" sm="8">
                            <v-textarea v-model="sinopsis" color="#67557D" type="" label="Sinopsis" light outlined required class="" ></v-textarea>
                        </v-row>
                    </v-col>
                </v-row>
                
                <!-- <v-row>
                    <v-btn type="submit" class="loginButon" color="white">
                        <div class="loginText">Masuk</div>
                    </v-btn>
                </v-row> -->
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
.overlayAddBook {
    height: 450px;
    width: 800px;
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
.headerAddBook {
    color: #67557D;
}
.purples-text {
    color: #67557D;
}


</style>