<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-grid>
                <ion-row class="ion-justify-content-between">
                    <ion-col size="3" size-xl="6">
                        <ion-title class="d-none d-xl-inline-block" size="small"><span
                                style="opacity: 50%;">Pages</span> / Guru &
                            Tenaga Kependidikan <br> <span style="font-size: 18px; letter-spacing: 5px;">Guru & Tenaga
                                Kependidikan</span>
                        </ion-title>
                    </ion-col>
                    <ion-col size-sm="9" size="10" size-xl="6">
                        <ion-row class="ion-align-items-center ion-justify-content-end goright"
                            style="margin-right: 20px;">
                            <ion-searchbar color="default" class="d-none d-sm-inline-block" placeholder="Type Here...">
                            </ion-searchbar>
                            <a href="/SignUp">
                                <ion-icon src="assets/icon/home.svg"></ion-icon><span
                                    class="d-none d-sm-inline-block text-dark">&nbsp;Sign in</span>
                            </a>
                            <a href="">
                                <ion-icon src="assets/icon/settings-sharp.svg"> </ion-icon>
                            </a>
                            <a href="">
                                <ion-icon src="assets/icon/notifications.svg"> </ion-icon>
                            </a>
                        </ion-row>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>

        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col size-xl="12" size="12">
                        <ion-card class="m-5 p-3 rounded text-center">
                            <ion-card-header>
                                <ion-card-title>
                                    <h4>Tambah Data Tenaga Kependidikan</h4>
                                </ion-card-title>
                            </ion-card-header>
                            <ion-card-content class="d-grid gap-3">
                                <ion-item fill="outline">
                                    <ion-label position="floating">Nama</ion-label>
                                    <ion-input placeholder="Masukkan Nama" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">Jenis Kelamin</ion-label>
                                    <ion-input placeholder="Masukkan Jenis Kelamin" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">No. HP</ion-label>
                                    <ion-input placeholder="Masukkan No. HP" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">Email</ion-label>
                                    <ion-input placeholder="Masukkan Email" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">Tempat, Tanggal Lahir</ion-label>
                                    <ion-input placeholder="Masukkan Tempat, Tanggal Lahir" required></ion-input>
                                </ion-item>
                                <ion-row class="checkbox-custom">
                                    <ion-col size-xl="3" size-xs="12">
                                        <ion-item lines="none">
                                            <ion-checkbox slot="start"></ion-checkbox>
                                            <ion-label>Guru</ion-label>
                                        </ion-item>
                                    </ion-col>
                                    <ion-col>
                                        <ion-item lines="none">
                                            <ion-checkbox slot="start"></ion-checkbox>
                                            <ion-label>Non Guru</ion-label>
                                        </ion-item>
                                    </ion-col>
                                </ion-row>
                                <ion-button expand="block" href="" style="width: 60%;" class="m-auto">Submit</ion-button>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
    IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonInput, IonItem, IonLabel
} from '@ionic/vue';

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
        IonCard, IonCardContent, IonCardHeader, IonCardTitle,
        IonInput, IonItem, IonLabel
    }
});
</script>
  
<style scoped>
ion-col {
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

ion-checkbox {
    --size: 32px;
    --background-checked: #6815ec;
}

ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #6815ec;
}

ion-searchbar {
    --border-radius: 12px;
    width: 40%;

}

a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

ion-icon {
    color: black;
}

ion-card-title,
ion-card-subtitle {
    color: black;
    font-size: 13px;
}


@media only screen and (max-width: 320px) {
    ion-checkbox {
        --size: 15px;
    }
    
    .checkbox-custom ion-item {
        font-size: 20px !important;
    }
}

@media only screen and (max-width: 575px) {
    .goright {
        position: relative;
        left: 60px
    }
}
</style>