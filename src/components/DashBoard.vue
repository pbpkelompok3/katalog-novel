<template>
    <v-container fluid>
        <div class="breadcrumb">
            <v-row>
                <v-col cols="12" sm="12">
                    <br>
                    <h4 class="text-center">Novels</h4>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-breadcrumbs :items="items" class="justify-center mt-n7" dark>
                        <template v-slot:divider>
                            <v-icon color="#67557D">mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
                </v-col>
            </v-row>
        </div>
        
        <v-card flat tile class="mx-16 card1" color="white">
            <v-row>
                <v-col cols="12" sm="6" class="pr-0">
                    <v-card height="250px" tile elevation="3" color="rgb(103, 85, 125, 0.7)" class="rounded-lg">
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
                    <v-card height="250px" tile elevation="3" color="rgb(199, 174, 149, 0.7)" class="rounded-lg">
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
            <v-row>
                <v-col cols="12" sm="12" class="mt-n6 pr-0">
                    <h2 class="filter jost">Filter</h2>
                    <!-- <v-toolbar>
                        <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
                        <v-divider vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-divider vertical></v-divider>
                        <v-btn icon class="ml-1">
                            <v-icon color="#67557D">mdi-sync</v-icon>
                        </v-btn>
                </v-toolbar> -->
            </v-col>
            <!-- <v-col cols="12" sm="3" class="mt-n6 px-0">
                <v-toolbar flat outlined>
                    <v-toolbar-title>Short by: <span>Judul</span></v-toolbar-title>
                </v-toolbar>
            </v-col> -->
            <!-- <v-col cols="12" sm="6" class="mt-n6 px-0">
                <v-toolbar flat outlined class="">
                    <v-toolbar-title>SHOW: <span>12</span></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-4">
                        <v-icon color="black">mdi-menu-down</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-col> -->
            <!-- <v-col cols="12" sm="3" class="mt-n6 pl-0">
                <v-toolbar flat outlined>
                    <v-btn icon class="mr-1">
                        <v-icon color="#3853D8">mdi-apps</v-icon>
                    </v-btn>
                    <v-divider vertical></v-divider>
                    <v-btn icon class="mx-1">
                        <v-icon color="grey">mdi-format-list-bulleted</v-icon>
                    </v-btn>
                    <v-divider vertical></v-divider>
                    <v-toolbar-title class="ml-2"><strong>COMPARE :</strong></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-badge color="#3853D8" content="3" class="mr-2"></v-badge>
                </v-toolbar>
            </v-col> -->
            <v-col cols="3" class="py-0 pr-0 mt-n3">
                <v-card flat outlined tile>
                    <v-toolbar flat>
                        <strong>Genre</strong>
                        <v-spacer></v-spacer>
                        <v-icon color="black" class="mr-2">mdi-chevron-down</v-icon>
                    </v-toolbar>
                    <v-list dense class="mt-n5">
                        <v-list-item v-for="book in books" :key="book.title">
                            <v-list-item-content>
                                <v-list-item-title v-text="book.title" class="text-left ml-3"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-list-item-subtitle v-text="book.count" class="text-right mr-3"></v-list-item-subtitle>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
        </v-card>
    </v-container>
</template>


<script>

export default {
    data() {
        return {
            items: [
                {
                    text: "Home",
                    disabled: false,
                    href: "breadcrumbs_home",
                    color: "#67557D",
                },
                {
                    text: "Genre",
                    disabled: false,
                    href: "breadcrumbs_genre",
                    color: "#67557D",
                },
                {
                    text: "Sci-fi",
                    disabled: false,
                    href: "breadcrumbs_scifi",
                    color: "#67557D",
                },
            ],

            books: [
                {
                    title: 'Sci-fi',
                    count: '20',
                },
                {
                    title: 'Fantasy',
                    count: '10',
                },
                {
                    title: 'Romance',
                    count: '33', 
                }
            ]
        }
    },
}
</script>


<style>
.container {
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
    widows: 100%;
}
.card1 {
    z-index: 10;
}
.card2 {
    z-index: 1;
}

.jost {
    font-family: 'Jost', cursive;
}
.transparent {
    background-color: transparent !important;
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