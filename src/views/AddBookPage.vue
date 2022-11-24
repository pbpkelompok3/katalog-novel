<template lang="">
    <v-app>
        <NavBar/>
        <v-form ref="form" v-model="valid" light lazy-validation @submit.prevent="submitAddBook" class="mb-15">
            <v-container class="">
                <h2 class="headerAddBook pt-8 pb-15">Tambah Buku</h2>
                <v-row>
                    <v-col cols="12" sm="4" class="">
                        <v-row >
                            <v-text-field v-model="bookDetails.judul" color="#67557D" type="" label="Judul" light outlined required class="" ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="bookDetails.penulis" color="#67557D" type="" label="Penulis" light outlined required class="" ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-text-field v-model="bookDetails.penerbit" color="#67557D" type="" label="Penerbit" light outlined required class="" ></v-text-field>
                        </v-row>
                        <v-row>
                            <v-col class="pl-0 py-0">
                                <v-text-field v-model="bookDetails.tahunTerbit" color="#67557D" type="" label="Tahun Terbit" light outlined required ></v-text-field>
                            </v-col>
                            <v-col class="pr-0 py-0">
                                <v-text-field v-model="bookDetails.halaman" color="#67557D" type="" label="Halaman" light outlined required ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col class="ml-15">
                        <v-row cols="12" sm="8" class="">
                            <v-textarea v-model="bookDetails.sinopsis" color="#67557D" type="" label="Sinopsis" light outlined required class="" ></v-textarea>
                        </v-row>
                        <v-row>
                            <v-col col="12" sm="4" class="pl-0 py-0">
                                <v-file-input v-model="bookDetails.cover" prepend-icon="mdi-camera" filled label="Tambah Cover Novel" ></v-file-input>
                            </v-col>
                            <v-col col="12" sm="8" class="pl-0 py-0" align="right">
                                <v-btn height="40px" width="120px" class="mx-3 white--text btn" color="#67557D">Reset</v-btn>
                                <v-btn height="40px" width="120px" class="ml-5 white--text btn" color="#67557D" v-on:click="addBookDB">Tambah</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    <FooTer/>
</v-app>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import FooTer from '@/components/FooTer.vue'

export default {
    components: {
        NavBar,
        FooTer,
    },
    data () {
        return {
            bookDetails: {
                judul: '',
                penulis: '',
                penerbit: '',
                tahunTerbit: '',
                halaman: '',
                sinopsis: '',
                cover: '',
            },
        }
    },
    methods: {
        addBookDB(e) {
            e.preventDefault();
            console.log('Book Details', this.bookDetails)
        }
    }
}


</script>


<style lang="scss">
.btn {
    color: white;
}
</style>