<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-grid>
        <ion-row class="ion-justify-content-between">
          <ion-col size="3" size-xl="6">
            <ion-title class="d-none d-xl-inline-block" size="small"><span style="opacity: 50%;">Pages</span> / Guru &
              Tenaga Kependidikan <br> <span style="font-size: 18px; letter-spacing: 5px;">Guru & Tenaga
                Kependidikan</span>
            </ion-title>
          </ion-col>
          <ion-col size-sm="9" size="10" size-xl="6">
            <ion-row class="ion-align-items-center ion-justify-content-end goright" style="margin-right: 20px;">
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
      <ion-card class="m-5 rounded">
        <ion-card-header class="ion-text-justify">
          <ion-row class="ion-justify-content-between">
            <ion-col size-xl="6" size-md="6" size-xs="12">
              <ion-card-title>
                <h4>Daftar Guru</h4>
              </ion-card-title>
            </ion-col>
            <ion-col size-xl="6" size-md="6" size-xs="auto">
              <a href="/pages/TambahTenagaKependidikan"><ion-button class="ion-float-right" color="success" fill="solid" size="small">Tambah</ion-button></a>
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Nama</th>
                <th scope="col" class="text-center">Jenis Kelamin</th>
                <th scope="col" class="text-center">No HP</th>
                <th scope="col" class="text-center">Email</th>
                <th scope="col" class="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Michael John</td>
                <td class="text-center">Laki-laki</td>
                <td class="text-center">085357889754</td>
                <td class="text-center">john@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Putri Dina</td>
                <td class="text-center">Perempuan</td>
                <td class="text-center">085357889999</td>
                <td class="text-center">putrid@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Michael John</td>
                <td class="text-center">Laki-laki</td>
                <td class="text-center">085357889754</td>
                <td class="text-center">john@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Putri Dina</td>
                <td class="text-center">Perempuan</td>
                <td class="text-center">085357889999</td>
                <td class="text-center">putrid@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Michael John</td>
                <td class="text-center">Laki-laki</td>
                <td class="text-center">085357889754</td>
                <td class="text-center">john@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Putri Dina</td>
                <td class="text-center">Perempuan</td>
                <td class="text-center">085357889999</td>
                <td class="text-center">putrid@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
            </tbody>
          </table>
        </ion-card-content>
      </ion-card>
      <ion-card class="m-5 rounded">
        <ion-card-header class="ion-text-justify">
          <ion-row class="ion-justify-content-between">
            <ion-col size-xl="6" size-md="6" size-xs="12">
              <ion-card-title>
                <h4>Daftar Tenaga Kependidikan Non-Guru</h4>
              </ion-card-title>
            </ion-col>
            <ion-col size-xl="6" size-md="6" size-xs="auto">
              <a href="/pages/TambahTenagaKependidikan"><ion-button class="ion-float-right" color="success" fill="solid" size="small">Tambah</ion-button></a>
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Nama</th>
                <th scope="col" class="text-center">Jenis Kelamin</th>
                <th scope="col" class="text-center">No HP</th>
                <th scope="col" class="text-center">Email</th>
                <th scope="col" class="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Michael John</td>
                <td class="text-center">Laki-laki</td>
                <td class="text-center">085357889754</td>
                <td class="text-center">john@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Putri Dina</td>
                <td class="text-center">Perempuan</td>
                <td class="text-center">085357889999</td>
                <td class="text-center">putrid@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Michael John</td>
                <td class="text-center">Laki-laki</td>
                <td class="text-center">085357889754</td>
                <td class="text-center">john@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Putri Dina</td>
                <td class="text-center">Perempuan</td>
                <td class="text-center">085357889999</td>
                <td class="text-center">putrid@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Michael John</td>
                <td class="text-center">Laki-laki</td>
                <td class="text-center">085357889754</td>
                <td class="text-center">john@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
              <tr>
                <td scope="row">Putri Dina</td>
                <td class="text-center">Perempuan</td>
                <td class="text-center">085357889999</td>
                <td class="text-center">putrid@mail.com</td>
                <td class="text-center"><a href=""><button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold">Edit</button></a> <a href=""><button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold">Delete</button></a></td>
              </tr>
            </tbody>
          </table>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow,
  IonCard, IonCardContent, IonCardHeader, IonCardTitle
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

ion-searchbar {
  --border-radius: 12px;
  width: 40%;

}

a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

.text-overflow {
  white-space: nowrap;
}

.tab1 {
  tab-size: 1;
}

/* pre{
  font-size: 18px;
} */
.card-info {
  max-height: 120px;
  border-radius: 20px;
  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
}

ion-icon {
  color: black;
}

ion-card-title,
ion-card-subtitle {
  color: black;
  font-size: 13px;
}

@media only screen and (max-width: 425px) {
  .form {
    font-size: 10px;
  }
}

@media only screen and (max-width: 575px) {
  .goright {
    position: relative;
    left: 60px
  }
}
</style>
