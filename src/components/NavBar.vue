<template>
    <v-app-bar 
    app color="#67557D"
    elevation="7"
    dark
    height="80px"
    >
        <div class="logo">
            <v-icon class="logo-bg" size="440%" color="#EED9C4">circle</v-icon>
            <img src="../assets/open_book_icon.png" class="logo-pic">
            <h2 class="logo-text">NOVELLL</h2>
        </div>

        <h2 class="genre">Genre</h2>

        <div class="search-bar">
            <input type="text" placeholder="Search..">
            <v-icon class="search-pic" color="#000">mdi-magnify</v-icon>
        </div>
        
    </v-app-bar>
</template>


<script>
export default {
    name: 'NavBar',
    data() {
        return {

        }
    },
}
</script>


<style>
    .logo {
        display: grid;
        width: 220px;
        left: 25px;
    }
    .logo-bg {
        display: grid;
        position: absolute;
        grid-area: 1/1;
        z-index: 1;
        margin: -2px 0 0 -170px;
    }
    .logo-pic {
        display:grid;
        position: absolute;
        grid-area: 1/1;
        z-index: 2;
        align-self: center;
        width: 63px;
        height: 55px;
        margin: -2px 0 0 -7px;
    }
    .logo-text {
        display: grid;
        position: absolute;
        z-index: 3;
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        font: 28px 'Croissant One';
        margin: 16px 0 0 65px;
    }

    .genre {
        position: absolute;
        font: 22px 'Jost';
        color: #FFF9F3;
        right: 290px;
        top: 22px;
    }

    .search-bar {
        position: absolute;
        right: 30px;
        background-color: #FAF0E6;
        border-radius: 20px;
        height: 35px;
        line-height: 35px;
        text-indent: 10px;
    }
    input:focus {
        outline: none;
    }
    input::placeholder {
        font: 16px 'Jost';
        vertical-align: middle;
        line-height: 40px;
        text-indent: 0px;
    }
    .search-pic {
        margin: 0 10px 0 0;
    }
    .search-pic:hover {
        cursor: pointer;
    }
</style>