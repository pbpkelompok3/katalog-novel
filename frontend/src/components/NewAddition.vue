<template lang="">
    <div class="NewAddition">
        <v-row>
            <v-col cols="12" sm="6" class="pr-0">
                <v-card height="250px" tile elevation="3" color="rgb(103, 85, 125, 0.8)">
                    <v-row>
                        <v-col cols="12" sm="6" class="pl-8 pt-4">
                            <v-btn color="black" dark class="withoutupercase" small tile>new addition !</v-btn>
                            <h4 class="white--text mt-15 ml-2 text-left authornames">{{books[books.length - 1].author}}</h4>
                            <h3 class="white--text mt-4 ml-2 text-left">{{books[books.length - 1].title}}</h3>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-img :src="books[books.length - 1].image" max-height="210" contain class="mt-1 new"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" class="pl-0">
                <v-card height="250px" tile elevation="3" color="rgb(199, 174, 149, 0.8)">
                    <v-row>
                        <v-col cols="12" sm="6" class="pl-8 pt-4">
                            <v-btn color="black" dark class="withoutupercase" small tile>new addition !</v-btn>
                            <h4 class="white--text mt-15 ml-2 text-left authornames">{{books[books.length - 2].author}}</h4>
                            <h3 class="white--text mt-4 ml-2 text-left">{{books[books.length - 2].title}}</h3>
                            <!-- <v-btn rounded color="#8375E7" dark class="withoutupercase px-8 mt-10 ml-0" elevation="5">More Info</v-btn> -->
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-img :src="books[books.length - 2].image" max-height="210" contain class="mt-1"></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    data() {
        return {
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
    },
}
</script>


<style lang="">
    
</style>