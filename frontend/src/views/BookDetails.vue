<template lang="">
    <v-app>
        <NavBar/>
        <BreadCrumb/>
        <v-container class="mb-16">
            <v-row>
                <v-col cols="12" sm="3" class="mt-6" align="left">
                    <v-row>
                        <v-img :src="require('./../assets/'+book.img)" max-width="300"></v-img>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="8" class="mt-2 ml-10" align="left">
                    <v-row>
                        <strong class="BookTitle">{{book.title}}</strong>
                    </v-row>
                    <v-row>
                        <div class="BookDetails ml-1">Penulis: {{book.author}}</div> 
                    </v-row>
                    <v-row>
                        <div class="BookDetails ml-1">Penerbit: {{book.publisher}}</div> 
                    </v-row>
                    <v-row>
                        <div class="BookDetails ml-1">Tahun Terbit: {{book.year}}</div> 
                    </v-row>
                    <v-row>
                        <div class="BookDetails ml-1">Halaman: {{book.pages}} halaman</div> 
                    </v-row>
                    <br>
                    <v-divider class="line ml-n3"></v-divider>
                    <v-row>
                        <div class="synopsis mt-10" v-html="book.synopsis"></div>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <FooTer/>
    </v-app>
</template>


<script>
import NavBar from '../components/NavBar.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import FooTer from '../components/FooTer.vue'
import axios from 'axios'

export default {
    name: 'BookDetails',

    data() {
        return { 
            book: {}
            // book: {
            //     title: 'Bumi',
            //     author: 'Tere Liye',
            //     publisher: 'Gramedia Pustaka Utama',
            //     year: '2014',
            //     pages: '440',
            //     synopsis: 'Namaku Raib, usiaku 15 tahun, kelas sepuluh<br/><br/>Aku anak perempuan seperti kalian, adik-adik kalian, tetangga kalian. Aku punya dua kucing, namanya si Putih dan si Hitam. Mama dan papaku menyenangkan. Guru-guru di sekolahku seru, dan teman-temanku baik dan kompak.<br/><br/>Aku sama seperti remaja kebanyakan, kecuali satu hal. Sesuatu yang kusimpan sendiri sejak kecil. Sesuatu yang menakjubkan.<br/><br/>Namaku Raib. Dan aku bisa menghilang.',
            // }
        }
    },
    created(){
        this.getOneBook();
    },
    methods: {
        // show all books
        async getOneBook(){
            try{
                const response = await axios.get("http://localhost:5000/home/"+this.$route.params.id);
                this.book = response.data;
                console.log(this.$route.params.id)
            }catch(e){
                console.log(e);
            }
        },
    },
    components: {
        NavBar,
        BreadCrumb,
        FooTer,
    },
}
</script>


<style lang="scss">
.BookTitle {
    font-size: 50px;
    font-family: 'Jost';
    color: black;
    text-transform: uppercase;
}
.BookDetails {
    font-size: 20px;
    font-family: 'Jost';
    color: black;
}
.line {
    border-width: 1px !important;
    border-color: rgb(0, 0, 0, 0.5) !important;
    width: 100%;
    height: 100%;
}
.synopsis {
    font-size: 20px;
    font-family: 'Jost';
    color: black;
}

</style>