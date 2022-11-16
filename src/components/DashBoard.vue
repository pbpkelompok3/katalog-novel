<template>
    <v-container fluid>
        <div class="breadcrumb">
            <v-row>
                <v-col cols="12" sm="12">
                    <br>
                    <h4 class="text-center">Novels</h4>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-breadcrumbs :items="items" class="justify-center mt-n7 jost" dark>
                        <template v-slot:divider>
                            <v-icon color="#67557D">mdi-chevron-right</v-icon>
                        </template>
                        <template v-slot:item="{ item }">
                            <v-breadcrumbs-item :disabled="item.disabled">
                              <span :style="`color: ${item.color}`">
                                {{ item.text.toUpperCase() }}
                              </span>
                            </v-breadcrumbs-item>
                          </template>
                    </v-breadcrumbs>
                </v-col>
            </v-row>
        </div>
        
        <v-card tile class="mx-16 card1" color="white">
            <v-row>
                <v-col cols="12" sm="8" class="pr-0">
                    <v-card height="250px" tile flat color="#67557D" class="rounded-lg">
                        <v-row>
                            <v-col cols="12" sm="4" class="pl-8 pt-4">
                                <v-btn color="black" dark class="withoutupercase" small tile>
                                    new
                                </v-btn>
                                <h6 class="white--text mt-8">Raditya Dika</h6>
                                <h3 class="white--text mt-5">Marmut Merah Jambu</h3>
                                <v-btn rounded color="#4f3d61" dark class="withoutupercase px-8 mt-10" elevation="5">
                                    More info
                                </v-btn>
                            </v-col>
                            <v-col cols="12" sm="8">
                                <v-img src="../assets/logo.png" max-height="200" max-width="400" contain class="mt-1"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="4" class="pl-0">
                    <v-card height="250px" tile flat color="#6857E1" class="rounded-lg">
                        <v-row>
                            <v-col cols="12" sm="6" class="pl-8 pt-4">
                                <v-btn color="black" dark class="withoutupercase" small tile>
                                    new
                                </v-btn>
                                <h6 class="white--text mt-8">Tere Liye</h6>
                                <h3 class="white--text mt-8">Bumi</h3>
                                <v-btn rounded color="#8375E7" dark class="withoutupercase px-8 mt-3">
                                    More Info
                                </v-btn>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-img src="../assets/logo.png" max-height="400" max-width="420" contain class="mt-1"></v-img>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="3" class="mt-n6 pr-0">
                    <v-toolbar-title><strong>Filter</strong></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-divider vertical></v-divider>
                    <v-btn icon class="ml-1">
                        <v-icon>
                            mdi-sync
                        </v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="12" sm="3" class="mt-n6 px-0">
                    <v-toolbar flat outlined>
                        <v-toolbar-title>

                        </v-toolbar-title>
                    </v-toolbar>
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

.v-btn.withoutupercase {
    text-decoration: none;
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


</style>