<template>
    <v-container fluid class="mb-16">
        <BreadCrumb/>
        <v-card flat tile class="mx-16 card1" color="white">
            <NewAddition/>
            <v-row flat class="transparent">
                <v-col></v-col>
            </v-row>
            <v-row flat class="transparent">
                <v-col></v-col>
            </v-row>

            <!-- FILTER BAR ---------------------------------------------------------------------------->
            <v-row>
                <v-col cols="12" sm="4" class="mt-n6 pr-0" align="left">
                    <h2 class="ml-2 mt-1 jost">Filter</h2>
                </v-col>
                <v-col cols="12" sm="8" class="mt-n6 mx-0" align="right">
                    <v-select :items="sorting" label="Urutkan" dense outlined read-only class="mt-0 sorting"></v-select>
                </v-col>
                <v-col cols="3" class="py-0 pr-0 mt-0">
                    <v-card>
                        <v-expansion-panels accordion multiple>
                            <v-expansion-panel>
                                <v-expansion-panel-header><strong>Genre</strong></v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-list dense class="mt-n5">
                                        <v-list-item v-for="genre in genres" :key="genre.title" class="my-3">
                                            <v-list-item-content>
                                                <v-list-item-title v-text="genre.title" class="text-left"></v-list-item-title>
                                            </v-list-item-content>
                                            <v-list-item-action>
                                                <v-checkbox color="primary" v-model="genre.state" class="pr-3"></v-checkbox>
                                            </v-list-item-action>
                                        </v-list-item>
                                    </v-list>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header><strong>Tahun Terbit</strong></v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-toolbar flat>
                                        <v-range-slider 
                                            v-model="range"
                                            :max="max"
                                            :min="min"
                                            hide-details
                                            class="align-center">
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
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card>
                </v-col>

                <!-- Katalog ----------------------------------------------------------------------------->
                <v-col cols="9" class="mt-n3 katalog">
                    <v-row>
                        <v-col cols="12" sm="2" v-for="(book, idx) in books" :key="idx" class="">
                            <a :href="'http://localhost:8080/details/'+ book.id">
                                <v-hover v-slot:default="{hover}" flat>
                                    <v-card height="300" align="center" flat outlined tile class="rounded-lg">
                                        <v-img v-bind:src="require('./../assets/'+book.img)" max-height="170" contain class="px-2 mt-2 pointer"></v-img>
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
                            </a>
                        </v-col>
                    </v-row>
                </v-col>
                
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
            </v-row>
        </v-card>
    </v-container>
</template>


<script>
import BreadCrumb from '@/components/BreadCrumb.vue'
import NewAddition from '@/components/NewAddition.vue'
import axios from "axios";

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
            min: 1990,
            max: 2022,
            range: [2005, 2022],
            sorting: ['Paling Relevan', 'Terbaru', 'Terlama', 'Terpopuler'],
            pageCurrent: 1,
            pageLength: 10,

            books: []
        }
    },
    created(){
        this.getBooks();
    },
    methods: {
        // show all books
        async getBooks(){
            try{
                const response = await axios.get("http://localhost:5000/home");
                this.books = response.data;
            }catch(e){
                console.log(e);
            }
        },
    },
    components: {
        BreadCrumb,
        NewAddition,
    }
}
</script>


<style>
.container {
    font-family: 'Jost';
    padding: 0px !important;
}
.authornames {
    font-weight: 300;
}

.sorting {
    width: 250px;
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
.pointer {
    cursor: pointer;
}

.jost {
    font-family: 'Jost', cursive;
}
.transparent {
    background-color: transparent !important;
    border: none !important;
    border-color: transparent !important;
}

.new {
    display: flex;
    right: 0;
}

</style>