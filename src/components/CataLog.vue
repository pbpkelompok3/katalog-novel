<template lang="">
    <div>
        <v-row>
            <v-col cols="12" sm="2" v-for="(book, idx) in books" :key="idx" class="">
                <v-hover v-slot:default="{hover}" flat>
                    <v-card height="300" align="center" flat outlined tile class="rounded-lg">
                        <v-img :src="book.image" max-height="170" contain class="px-2 mt-2 pointer"></v-img>
                        
                        <v-card-text class="px-3 text-left">
                            <strong :class="hover ? 'purple--text' : 'black--text'" class="pointer">{{book.title}}</strong>
                            <div :class="hover ? 'purple--text' : 'black--text'" class="pointer">{{book.author}}</div>
                        </v-card-text>
                        <!-- <v-expand-transition>
                            <div v-if="hover" class="d-flex transition-fast-in-fast-out transparent v-card--reveal display-3 white--text" style="height: 100%;">
                                <v-btn fab small color="white" class="ml-2">
                                    <v-icon color="black">mdi-content-copy</v-icon>
                                </v-btn>
                                <v-btn fab small color="white" class="ml-2">
                                    <v-icon color="black">mdi-heart-outline</v-icon>
                                </v-btn>
                            </div>
                        </v-expand-transition> -->
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        
        <v-col cols="12" sm="12" class="mt-n3 px-0 pb-0">
            <v-pagination 
                v-model="pageCurrent"
                :length="pageLength"
                total-visible="6"
                dark
                circle
                color="purple"
                prev-icon="mdi-menu-left"
                next-icon="mdi-menu-right"
                align="center">
            </v-pagination>
        </v-col>
    </div>
</template>


<script>
export default {
    data() {
        return {
            pageCurrent: 1,
            pageLength: 10,

            books: [
                {
                    image: require("../assets/Lumpu.jpg"),
                    title: 'Lumpu',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/Nebula.jpg"),
                    title: 'Nebula',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/Si Putih.jpg"),
                    title: 'Si Putih',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/Anak Rantau.jpg"),
                    title: 'Anak Rantau',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/Laut Bercerita.jpg"),
                    title: 'Laut Bercerita',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/The Murder Of Roger Ackroyd.jpg"),
                    title: 'The Murder Of Roger Ackroyd',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/About Me.jpg"),
                    title: 'About Me',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/About Me.jpg"),
                    title: 'About Me',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/About Me.jpg"),
                    title: 'About Me',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/About Me.jpg"),
                    title: 'About Me',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/About Me.jpg"),
                    title: 'About Me',
                    author: 'Nama Author',
                },
                {
                    image: require("../assets/Jangan Cepat Berlalu.jpg"),
                    title: 'Jangan Cepat Berlalu',
                    author: 'Revianaaprl',
                },
                {
                    image: require("../assets/Selena.jpg"),
                    title: 'Selena',
                    author: 'Tere Liye',
                },
            ],

        }
    }    
}
</script>


<style lang="">
    
</style>