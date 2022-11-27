<template>
    <ion-page>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-grid>
                    <ion-row class="ion-justify-content-between">
                        <ion-col size="3">
                            <ion-title class="d-none d-lg-inline-block" size="small"><span
                                    style="opacity: 50%;">Pages</span> / Dashboard <br> <span
                                    style="font-size: 18px; letter-spacing: 5px;">Dashboard</span>
                            </ion-title>
                        </ion-col>
                        <ion-col size-sm="9" size="10">
                            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px;">
                                <div class="search-box">
                                    <button class="btn-search"><i class="fas fa-search"></i></button>
                                    <input type="text" class="input-search" placeholder="Type to Search...">
                                </div>
                                <a href="/SignUp">
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
            <ion-grid>
                <ion-row>
                    <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size = 12 size-sm="6" size-xl="3">
                        <ion-card class="card-info">
                            <ion-row class="ion-align-items-center m-0">
                                    <ion-col size="8">
                                        <ion-card-header>
                                            <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow">
                                                Jumlah TK A</ion-card-subtitle>
                                            <ion-card-title class="font-weight-bolder mb-0">30</ion-card-title>
                                        </ion-card-header>
                                    </ion-col>
                                    <ion-col size="4" class="text-end text-sm-center">
                                        <ion-icon src="assets/icon/home.svg" style="font-size: large; margin-right: 20px"></ion-icon>
                                    </ion-col>
                                </ion-row>
                        </ion-card>
                    </ion-col>
                    <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size = 12 size-sm="6" size-xl="3">
                        <ion-card class="card-info">
                            <ion-row class="ion-align-items-center ">
                                <ion-col size="8">
                                    <ion-card-header>
                                        <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow">Jumlah TK B</ion-card-subtitle>
                                        <ion-card-title>20</ion-card-title>
                                    </ion-card-header>
                                </ion-col>
                                <ion-col size="4" class="text-end text-sm-center">
                                    <ion-icon src="assets/icon/home.svg" style="font-size: large; margin-right: 20px"></ion-icon>
                                </ion-col>
                            </ion-row>
                        </ion-card>
                    </ion-col>
                    <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size = 12 size-sm="6" size-xl="3">
                        <ion-card class="card-info">
                            <ion-row class="ion-align-items-center ">
                                <ion-col size="8">
                                    <ion-card-header>
                                        <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow">Jumlah Siswa Laki-laki</ion-card-subtitle>
                                        <ion-card-title>20</ion-card-title>
                                    </ion-card-header>
                                </ion-col>
                                <ion-col size="4" class="text-end text-sm-center">
                                    <ion-icon src="assets/icon/home.svg" style="font-size: large; margin-right: 20px"></ion-icon>
                                </ion-col>
                            </ion-row>
                        </ion-card>
                    </ion-col>
                    <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size = 12 size-sm="6" size-xl="3">
                        <ion-card class="card-info">
                            <ion-row class="ion-align-items-center ">
                                <ion-col size="8">
                                    <ion-card-header>
                                        <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow">Jumlah Siswa Perempuan</ion-card-subtitle>
                                        <ion-card-title>30</ion-card-title>
                                    </ion-card-header>
                                </ion-col>
                                <ion-col size="4" class="text-end text-sm-center">
                                    <ion-icon src="assets/icon/home.svg" style="font-size: large; margin-right: 20px;"></ion-icon>
                                </ion-col>
                            </ion-row>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-card class="w-100" style="box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);">
                        <ion-row class="ion-align-items-center ">
                            <ion-col>
                                <ion-card-header>
                                    <ion-grid>
                                        <ion-row>
                                            <h3>KIDSERA</h3>
                                        </ion-row>
                                        <ion-row class="mt-4">
                                            <ion-col>
                                                <ion-row>
                                                    <ion-col style="line-height: 2.5;" class="text-dark form">
                                                        NPSN :
                                                        <br>
                                                        Bentuk Pendidikan :
                                                        <br>
                                                        Status :
                                                        <br>
                                                        Kecamatan :
                                                        <br>
                                                        Kabupaten :
                                                        <br>
                                                        Provinsi :
                                                        <br>
                                                        Kepala Sekolah :
                                                        <br>
                                                        Operator :
                                                        <br>
                                                        Username :
                                                        <br><br>
                                                        Implementasi Kurikulum :
                                                        <br>
                                                        Bersedia menerima BOP :
                                                        <br>
                                                        Bendahara BOP :
                                                    </ion-col>
                                                    <ion-col style="line-height: 2.5;" class="text-dark fw-bold form">
                                                        70011681
                                                        <br>
                                                        TK
                                                        <br>
                                                        Swasta
                                                        <br>
                                                        Kec. Pulo Gadung
                                                        <br>
                                                        Kota Jakarta Timur
                                                        <br>
                                                        Prov. D.K.I. Jakarta
                                                        <br>
                                                        NILA DWI OKVITA
                                                        <br>
                                                        Anugrah Amelia Maharani
                                                        <br>
                                                        kidsera.official@gmail.com
                                                        <br><br>
                                                        2013
                                                        <br>
                                                        Ya
                                                        <br>
                                                        Sylvia Trywardani
                                                    </ion-col>
                                                </ion-row>
                                            </ion-col>
                                            <ion-col class="d-none d-xl-block">
                                                <ion-img src="assets/img/kidsera-img.svg">

                                                </ion-img>
                                            </ion-col>
                                        </ion-row>
                                    </ion-grid>
                                </ion-card-header>
                            </ion-col>
                        </ion-row>
                    </ion-card>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';

export default defineComponent({
    name: 'DashboardPage',
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
    }
});


</script>

<style scoped>
/* template and reset style */
ion-col{
    padding: 0;
}

#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
}

#container a {
    text-decoration: none;
}

/* Icon navbar style */
a .iconButton{
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
}

.btn-search:focus~.input-search {
    width: 500px;
    border-radius: 10px;
    background-color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.input-search:focus {
    width: 500px;
    border-radius: 10px;
    background-color: white;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}


/* card style */
.text-overflow{
    white-space: nowrap;
}

.tab1 {
    tab-size: 1;
}

.card-info{
    max-height: 120px;
    border-radius: 20px;
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
}

ion-icon{
    color: black;
}

ion-card-title,
ion-card-subtitle {
    color: black;
    font-size: 13px;
}

/* small laptop dimension */
@media only screen and (max-width: 1280px) {
    .btn-search:focus~.input-search {
        width: 250px;
    }

    .input-search:focus {
        width: 250px;
    }
}

/* tablet dimension */
@media only screen and (max-width: 990px) {
    .btn-search:focus~.input-search {
        width: 280px;
    }

    .input-search:focus {
        width: 280px;
    }
}

/* large phone dimension */
@media only screen and (max-width: 575px) {
    .goright {
        position: relative;
        left: 60px
    }

}

/* large phone dimension */
@media only screen and (max-width: 426px) {
    .form {
        font-size: 10px;
    }

    .search-box{
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
