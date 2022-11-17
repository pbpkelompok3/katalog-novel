<template>
    <v-container fluid>
        <BreadCrumb/>
        <v-card flat tile class="mx-16 card1" color="white">
            <v-row>
                <v-col cols="12" sm="6" class="pr-0">
                    <v-card height="250px" tile elevation="3" color="rgb(103, 85, 125, 0.8)">
                        <v-row>
                            <v-col cols="12" sm="6" class="pl-8 pt-4">
                                <v-btn color="black" dark class="withoutupercase" small tile>new addition !</v-btn>
                                <h6 class="white--text mt-8 text-left">Andrea Hirata</h6>
                                <h3 class="white--text mt-5 text-left">Laskar Pelangi</h3>
                                <!-- <v-btn rounded color="#826c9e" dark class="withoutupercase px-8 mt-10 ml-0" elevation="5">More info</v-btn> -->
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-img src="../assets/Laskar Pelangi.jpg" max-height="220" contain class="mt-1 new"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6" class="pl-0">
                    <v-card height="250px" tile elevation="3" color="rgb(199, 174, 149, 0.8)">
                        <v-row>
                            <v-col cols="12" sm="6" class="pl-8 pt-4">
                                <v-btn color="black" dark class="withoutupercase" small tile>new addition !</v-btn>
                                <h6 class="white--text mt-8 text-left">Tere Liye</h6>
                                <h3 class="white--text mt-8 text-left">Bumi</h3>
                                <!-- <v-btn rounded color="#8375E7" dark class="withoutupercase px-8 mt-10 ml-0" elevation="5">More Info</v-btn> -->
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-img src="../assets/Bumi.jpg" max-height="220" contain class="mt-1"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row flat class="transparent">
                <v-col></v-col>
            </v-row>
            <v-row flat class="transparent">
                <v-col></v-col>
            </v-row>

            <!-- FILTER BAR ------------------------->
            <v-row>
                <v-col cols="12" sm="12" class="mt-n6 pr-0">
                    <h2 class="filter jost">Filter</h2>
            </v-col>
            <v-col cols="3" class="py-0 pr-0 mt-n3">
                <v-card>
                    <v-toolbar flat>
                        <strong>Genre</strong>
                        <v-spacer></v-spacer>
                        <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
                    </v-toolbar>
                    <v-list dense class="mt-n5">
                        <v-list-item v-for="genre in genres" :key="genre.title">
                            <v-list-item-content>
                                <v-list-item-title v-text="genre.title" class="text-left ml-4"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-checkbox color="primary" v-model="genre.state" class="pr-3"></v-checkbox>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
                <v-card flat outlined tile>
                    <v-toolbar flat>
                        <strong>Tahun Terbit</strong>
                        <v-spacer></v-spacer>
                        <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
                    </v-toolbar>
                    <v-toolbar flat>
                        <v-range-slider 
                            v-model="range"
                            :max="max"
                            :min="min"
                            hide-details
                            class="align-center"
                        >
                            <template v-slot:prepend>
                                <v-text-field
                                    :value="range[0]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    style="width: 60px"
                                    @change="$set(range, 0, $event)"
                                ></v-text-field>
                            </template>
                            <template v-slot:append>
                                <v-text-field
                                    :value="range[1]"
                                    class="mt-0 pt-0"
                                    hide-details
                                    single-line
                                    type="number"
                                    style="width: 60px"
                                    @change="$set(range, 1, $event)"
                                ></v-text-field>
                            </template>
                        </v-range-slider>
                    </v-toolbar>
                </v-card>
            </v-col>

            <v-col cols="9" class="mt-n3 katalog">
                <v-row>
                    <v-col cols="12" sm="2" v-for="(book, idx) in books" :key="idx" class="">
                        <v-hover v-slot:default="{hover}" flat>
                            <v-card height="300" align="center" flat outlined tile class="rounded-lg">
                                <v-img :src="book.image" max-height="170" contain class="px-2 mt-2"></v-img>
                                
                                <v-card-text class="px-3 text-left">
                                    <strong :class="hover ? 'purple--text' : 'black--text'">{{book.title}}</strong>
                                    <div :class="hover ? 'purple--text' : 'black--text'">{{book.author}}</div>
                                </v-card-text>
                                <v-expand-transition>
                                    <div v-if="hover" class="d-flex transition-fast-in-fast-out transparent v-card--reveal display-3 white--text" style="height: 100%;">
                                        <v-btn fab small color="white" class="ml-2">
                                            <v-icon color="black">mdi-content-copy</v-icon>
                                        </v-btn>
                                        <v-btn fab small color="white" class="ml-2">
                                            <v-icon color="black">mdi-heart-outline</v-icon>
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        </v-card>
    </v-container>
</template>


<script>
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
    data() {
        return {
            genres: [
                {
                    title: 'Sci-fi',
                    count: '20',
                    state: false,
                },
                {
                    title: 'Fantasy',
                    count: '10',
                    state: false,
                },
                {
                    title: 'Romance',
                    count: '33', 
                    state: false,
                }
            ],

            books: [
                {
                    sold: '-20%',
                    image: require("../assets/Lumpu.jpg"),
                    title: 'Lumpu',
                    author: 'Nama Author',
                    price: 'Rp 48,000'
                },
                {
                    sold: '-30%',
                    image: require("../assets/Nebula.jpg"),
                    title: 'Nebula',
                    author: 'Nama Author',
                    price: 'Rp 48,000'
                },
                {
                    sold: '-20%',
                    image: require("../assets/Si Putih.jpg"),
                    title: 'Si Putih',
                    author: 'Nama Author',
                    price: 'Rp 48,000'
                },
                {
                    sold: '-20%',
                    image: require("../assets/Anak Rantau.jpg"),
                    title: 'Anak Rantau',
                    author: 'Nama Author',
                    price: 'Rp 48,000'
                },
                {
                    sold: '-20%',
                    image: require("../assets/Laut Bercerita.jpg"),
                    title: 'Laut Bercerita',
                    author: 'Nama Author',
                    price: 'Rp 48,000'
                },
                {
                    sold: '-20%',
                    image: require("../assets/The Murder Of Roger Ackroyd.jpg"),
                    title: 'The Murder Of Roger Ackroyd',
                    author: 'Nama Author',
                    price: 'Rp 48,000'
                },
                {
                    sold: '-20%',
                    image: require("../assets/About Me.jpg"),
                    title: 'About Me',
                    author: 'Nama Author',
                    price: 'Rp 48,000'
                },
            ],
            min: 1990,
            max: 2022,
            range: [2005, 2022],
        }
    },

    components: {
        BreadCrumb,
    }
}
</script>


<style>
.container {
    font-family: 'Jost';
    padding: 0px !important;
}
.v-breadcrumbs {
    color: #67557D;
}
.v-breadcrumbs__item:link, .v-breadcrumbs__item:visited,.v-breadcrumbs__item:hover, .v-breadcrumbs__item:active {
    font-family: 'Jost', cursive;
    color: #67557d;
}

.v-btn.withoutupercase {
    display: flex;
    font-family: 'Jost', cursive;
    cursor: default;
}
.v-chip.v-size--default {
    border-radius: 50px !important;
    font-size: 14px !important;
    height: 40px !important;
    width: 40px !important;
}
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
.card1 {
    z-index: 3;
}
.card2 {
    z-index: 1;
}

.jost {
    font-family: 'Jost', cursive;
}
.transparent {
    background-color: transparent !important;
    border: none !important;
    border-color: transparent !important;
}
.filter {
    display: flex;
    margin: -10px 0 0 10px;
    margin-bottom: 5px;
}
.new {
    display: flex;
    right: 0;
}

</style>