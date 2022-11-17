<template lang="">
    <div class="breadcrumb">
        <v-row>
            <v-col cols="12" sm="12">
                <br>
            </v-col>
            <v-col cols="12" sm="12">
                <v-breadcrumbs :items="breadcrumb_items" class="text-left mt-n7 ml-10" dark>
                    <template v-slot:divider>
                        <v-icon color="#67557D">mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    data () {
        return {
            breadcrumb_items: [
                {
                    text: "Home",
                    disabled: false,
                    href: "../",
                    color: "#67557D",
                },
                {
                    text: "Fiksi Sains",
                    disabled: false,
                    href: "../views/search",
                    color: "#67557D",
                },
                {
                    text: "Bumi",
                    disabled: false,
                    href: "../details",
                    color: "#67557D",
                },
                
            ],
        }
    }
}
</script>


<style lang="scss">
.v-breadcrumbs {
    color: #67557D;
}
.v-breadcrumbs__item:link, .v-breadcrumbs__item:visited,.v-breadcrumbs__item:hover, .v-breadcrumbs__item:active {
    font-family: 'Jost', cursive;
    color: #67557d;
}
</style>