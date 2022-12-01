<template>
    <v-app-bar 
    app color="#67557D"
    elevation="7"
    dark
    height="80px"
    class="navbar"
    >
        <div class="logo">
            <img src="../assets/Logo Novelog.png" class="logo-pic" color="white">
            <h2 class="logo-text">NOVELOG</h2>
            <h4>Novel Catalogue</h4>
        </div>


        <div class="searchBar">
            <input type="text" placeholder="Search..." name='s'>
            <v-icon class="search-pic" color="#67557D">mdi-magnify</v-icon>
        </div>
        
    </v-app-bar>
</template>



<script>


export default {
    name: 'NavBar',
    data() {
        return {
            
        }
    }
}
</script>


<style>
    .logo {
        display: grid;
        width: 220px;
        left: 25px;
    }
    .logo-pic {
        display:grid;
        position: absolute;
        grid-area: 1/1;
        z-index: 2;
        align-self: center;
        width: 60px;
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
        margin: 3px 0 0 65px;
        left: 10px;
        top: 5px;
    }
    .logo h4 {
        display: grid;
        position: absolute;
        font-family: 'Courier New';
        margin: 43px 0 0 66px;
        font-size: 15px;
        font-weight: 300;
        left: 11px;
        top: 1px;
    }

    .searchBar {
        position: absolute;
        right: 30px;
        background-color: #ffffff;
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
    .navbar {
        z-index: 10;
    }
</style>