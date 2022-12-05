<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-grid>
                <ion-row class="ion-justify-content-between">
                    <ion-col size="3" size-xl="6">
                        <ion-title class="d-none d-xl-inline-block" size="small"><span style="opacity: 50%;">Pages</span> / Sarana & Prasarana <br> <span style="font-size: 18px; letter-spacing: 3.5px;">Sarana & Prasarana</span>
                        </ion-title>
                    </ion-col>
                    <ion-col size-sm="9" size="10" size-xl="6">
                        <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px;">
                            <div class="search-box">
                                <button class="btn-search"><i class="fas fa-search"></i></button>
                                <input type="text" class="input-search" placeholder="Type to Search...">
                            </div>
                            <a href="/pages/SignIn">
                                <ion-icon class="iconButton" src="assets/icon/home.svg"></ion-icon><span class="d-none d-sm-inline-block text-dark">&nbsp;Sign in</span>
                            </a>
                            <a href="">
                                <ion-icon class="iconButton" src="assets/icon/settings-sharp.svg"> </ion-icon>
                            </a>
                            <a href="">
                                <ion-icon class="iconButton" src="assets/icon/notifications.svg"> </ion-icon>
                            </a>
                        </ion-row>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>
    
        <ion-content :fullscreen="true">
            <div id="carouselExampleDark" class="carousel carousel-dark slide slide-custom-body" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner slide-custom">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <img src="../../public/assets/img/s1.jpeg" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../../public/assets/img/s2.jpeg" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../../public/assets/img/s3.jpeg" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../../public/assets/img/s4.jpeg" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../../public/assets/img/s5.jpeg" class="d-block w-100" alt="">
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <img src="../../public/assets/img/s6.jpeg" class="d-block w-100" alt="">
                    </div>
                </div>
                <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                            <span class="visually-hidden">Previous</span>
                                                                        </button>
                                                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                            <span class="visually-hidden">Next</span>
                                                                        </button> -->
            </div>
            <ion-card class="rounded card-content">
                <ion-card-header class="ion-text-justify">
                    <ion-row class="ion-justify-content-between">
                        <ion-col size-xl="6" size-md="6" size-xs="12">
                            <ion-card-title>
                                <h4>Sarana & Prasarana</h4>
                            </ion-card-title>
                        </ion-col>
                        <ion-col size-xl="6" size-md="6" size-xs="auto">
                            <a class="btn btn-success float-end tambah" data-bs-toggle="collapse" href="#tambahRuangan" role="button" aria-expanded="false" aria-controls="tambahRuangan">Tambah Ruang</a>
                            <!-- href="/pages/Sarpras/TambahSarprasRuangan" -->
                        </ion-col>
                    </ion-row>
                </ion-card-header>
    
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-card class="card-content-judul">
                                    <ion-card-header class="ion-margin text-center">
                                        <a href="/pages/Sarpras/DetailSarpras" class="text-decoration-none">
                                            <ion-card-title color="light">Ruang A</ion-card-title>
                                        </a>
                                    </ion-card-header>
                                </ion-card>
                            </ion-col>
                            <ion-col>
                                <ion-card class="card-content-judul">
                                    <ion-card-header class="ion-margin text-center">
                                        <a href="" class="text-decoration-none">
                                            <ion-card-title color="light">Ruang B</ion-card-title>
                                        </a>
                                    </ion-card-header>
                                </ion-card>
                            </ion-col>
                            <ion-col>
                                <ion-card class="card-content-judul">
                                    <ion-card-header class="ion-margin text-center">
                                        <a href="" class="text-decoration-none">
                                            <ion-card-title color="light">Ruang C</ion-card-title>
                                        </a>
                                    </ion-card-header>
                                </ion-card>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
            <div class="container mb-3 collapse position-absolute top-50 start-50 translate-middle fade" id="tambahRuangan">
                    <h4 class="text-center">Tambah Ruangan</h4>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Ruang ...">
                        <label for="floatingInput">Nama Ruang</label>
                    </div>
                    <a class="btn btn-danger" href="/pages/Sarpras" role="button">Cancel</a>
                    <a class="btn btn-primary ms-2" role="button" href="javascript: doSomethingForAddSarprasRuangan()">Add Room</a>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';

export default defineComponent({
    name: 'PesertaDidikPage',
    components: {
        IonButtons,
        IonContent,
        IonMenuButton,
        IonPage,
        IonTitle,
        IonToolbar,
        IonCol,
        IonGrid,
        IonRow
    }
});
</script>

<style scoped>
/* template style */

ion-col {
    padding: 0;
}

/* Icon navbar style */

a .iconButton {
    color: black;
    text-decoration: none;
    margin-left: 20px;
    font-size: 18px;
}

/* Searchbar Style */

.search-box {
    width: fit-content;
    height: fit-content;
    position: relative;
    color: black;
}

.input-search {
    height: 40px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    background-color: transparent;
    padding-right: 40px;
    color: black;
}

.input-search::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
}

.btn-search {
    width: 40px;
    height: 40px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: black;
    background-color: transparent;
    pointer-events: painted;
    top: -1.5px;
}

.btn-search:focus~.input-search {
    width: 230px;
    border-radius: 10px;
    background-color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.input-search:focus {
    width: 230px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

/* content style */

[data-href] {
    cursor: pointer;
}

/* .table {
    border-collapse: inherit;
} */

thead th {
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid lighten(black, 35%);
}

th {
    font-weight: bold;
}

td,
th {
    white-space: nowrap;
}

.tables> :not(:last-child)> :last-child>* {
    border-bottom-color: black;
}

td {
    width: 100px;
}

.tambah {
    background: linear-gradient(135deg, #3A416F 0%, #141727 100%);
    border-radius: 8px;
    border: none;
    font-weight: bold;
}

#tambahRuangan {
    width: 400px;
    height: 200px;
    background-color: #D9D9D9;
    border-radius: 10px;
    z-index: inherit;
    padding: 30px;
    border: 1px solid black;
}

.slide-custom-body {
    margin-top: 20px;
    z-index: -1;
}

.slide-custom {
    width: 90%;
    margin: auto;
    border-radius: 18px;
}

.slide-custom img {
    width: 90%;
    max-height: 300px;
    object-fit: cover;
}

.card-content {
    margin: 30px 50px;
    border: .2px solid black;
}

.card-content-judul {
    /* background: linear-gradient(135deg, #336B87 0%, #90AFC5 100%); */
    background-color: #00145A;
    font-weight: bold;
    border-radius: 20px;
}

.card-content-judul:hover {
    background: linear-gradient(135deg, #90AFC5 0%, #336B87 100%);
    transition: 5s ease-in;
    cursor: pointer;
}

/* small laptop dimension */

@media only screen and (max-width: 1280px) {
    .btn-search:focus~.input-search {
        width: 250px;
    }
    .input-search:focus {
        width: 250px;
    }
    th,
    td {
        width: 160px;
    }
    .action-button {
        padding: 5px 12px;
        font-size: 12px;
    }
}

/* tablet dimension */

@media only screen and (max-width: 990px) {
    .btn-search:focus~.input-search {
        width: 200px;
    }
    .input-search:focus {
        width: 200px;
    }
    th,
    td {
        font-size: 12px;
    }
}

/* large phone dimension */

@media only screen and (max-width: 575px) {
    .goright {
        position: relative;
        left: 60px
    }
    th,
    td {
        width: 150px;
    }
    /* .title-table {
        font-size: 12px;
        margin-top: 10px;
    } */
    .tambah {
        padding: 10px;
        font-size: 10px;
        /* position: relative;
        left: 20px;
        height: 30px; */
    }
}

/* large phone dimension */

@media only screen and (max-width: 426px) {
    .search-box {
        position: absolute;
        right: 34%;
    }
    .btn-search:focus~.input-search {
        width: 200px;
    }
    .input-search:focus {
        width: 200px;
    }
}

/* small phone dimension */

@media only screen and (max-width: 376px) {
    .search-box {
        position: absolute;
        right: 41%;
    }
    .btn-search:focus~.input-search {
        width: 180px;
    }
    .input-search:focus {
        width: 180px;
    }
}

@media only screen and (max-width: 320px) {
    .search-box {
        position: absolute;
        right: 50%;
    }
    .btn-search:focus~.input-search {
        width: 150px;
    }
    .input-search:focus {
        width: 150px;
    }
}
</style>
