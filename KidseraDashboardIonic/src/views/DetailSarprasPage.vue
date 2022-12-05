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
                            <a href="pages/SignIn">
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
            <ion-card class="rounded card-content">
                <ion-card-header class="ion-text-justify">
                    <ion-row class="ion-justify-content-between">
                        <ion-col size-xl="6" size-md="6" size-xs="12">
                            <ion-card-title>
                                <h4>Sarana & Prasarana Ruang ... </h4>
                            </ion-card-title>
                        </ion-col>
                        <ion-col size-xl="6" size-md="6" size-xs="auto">
                            <a href="/pages/Sarpras/DetailSarpras/TambahFasilitasSarpras" class="btn btn-success float-end tambah">Tambah Fasilitas</a>
                        </ion-col>
                    </ion-row>
                </ion-card-header>
    
                <ion-card-content>
                    <ion-searchbar show-cancel-button="focus" placeholder="Show on Focus"></ion-searchbar>
                    <div class="table-responsive">
                        <table class="table table-borderless table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center text-secondary opacity-7">Fasilitas</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Jenis</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Jumlah</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Created Date</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">Kursi</td>
                                    <td class="text-center">Sarana</td>
                                    <td class="text-center">10</td>
                                    <td class="text-center">2 Desember 2022</td>
                                    <td class="text-center"><a href="/pages/Sarpras/DetailSarpras/EditSarpras"><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2">Delete</button></a></td>
                                </tr>
                                <tr>
                                    <td class="text-center">Meja</td>
                                    <td class="text-center">Sarana</td>
                                    <td class="text-center">10</td>
                                    <td class="text-center">2 Desember 2022</td>
                                    <td class="text-center"><a href="/pages/Sarpras/DetailSarpras/EditSarpras"><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2">Delete</button></a></td>
                                </tr>
                                <tr>
                                    <td class="text-center">Buku Tulis</td>
                                    <td class="text-center">ATK</td>
                                    <td class="text-center">10</td>
                                    <td class="text-center">2 Desember 2022</td>
                                    <td class="text-center"><a href="/pages/Sarpras/DetailSarpras/EditSarpras"><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2">Delete</button></a></td>
                                </tr>
                                <tr>
                                    <td class="text-center">Puzle</td>
                                    <td class="text-center">Alat Permainan Edukatif</td>
                                    <td class="text-center">1</td>
                                    <td class="text-center">2 Desember 2022</td>
                                    <td class="text-center"><a href="/pages/Sarpras/DetailSarpras/EditSarpras"><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2">Delete</button></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="/pages/Sarpras/DetailSarpras">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonSearchbar } from '@ionic/vue';

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
        IonRow,
        IonSearchbar
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

.slide-custom-body {
    margin-top: 20px;
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
}

.card-content-judul {
    background: linear-gradient(135deg, #336B87 0%, #90AFC5 100%);
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
