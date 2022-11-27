<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kidsera DashBoard</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="card-inside card banner h-50 p-3">
        <ion-grid class="container fixed-top z-index-sticky navbar-custom"
          style="width: 80%; margin-top: 2%; font-size: 12pt; color:white">
          <ion-row class="ion-justify-content-between align-items-center">
            <ion-col size-lg="7">
              <a class="navbar-brand  ms-lg-0 ms-3 title" href="#" style="color: white;"><strong>Kidsera
                  Dashboard</strong></a>
            </ion-col>
            <ion-col size-xs="6" size-lg="4">
              <ion-row class="ion-justify-content-center toptopan">
                <ion-col size-lg="7">
                  <a class="nav-link" aria-current="page" href="#"><i
                      class=" fa fa-chart-pie opacity-6 me-1 d-inline-block"></i><span
                      class="bawahnyatop d-none d-md-inline-block">Dashboard</span></a>
                </ion-col>
                <ion-col size-lg="4" style="right: 60px">
                  <a class="nav-link" href="../pages/sign-up.html"><i
                      class="fas fa-user-circle opacity-6 me-1 d-inline-block"></i><span
                      class="d-none d-md-inline-block">Masuk</span></a>
                </ion-col>
              </ion-row>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-title class="text-center" style="margin-top: 20px;">
              <h1>Daftar</h1>
            </ion-title>
          </ion-row>
        </ion-grid>
      </div>

      <div id="container">
        <ion-card class='card-middle' color="white" mode="md">
          <ion-card-header>
            <ion-card-title>Daftar</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-center">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input name="username" placeholder="User Name"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input name="fname" placeholder="First Name"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-center">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input name="lname" placeholder="Last Name"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input name="email" placeholder="Email"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-item fill="outline">
                    <ion-input name="password" placeholder="Password" type="password"></ion-input>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-item>
                    <ion-checkbox slot="start" ></ion-checkbox>
                    <ion-label class="ionlebel">
                      <p>Saya setuju dengan <b>Syarat dan Ketentuan</b></p>
                    </ion-label>
                  </ion-item>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <div class="button-regis">
                    <ion-button expand="block" color="=" style=" background-image: linear-gradient(to right, #3A416F, #141727);">
                      Registrasi
                    </ion-button>
                  </div>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col>
                  <ion-label>
                    <p>Sudah Mempunyai Akun? <a class="sabeb" href="../pages/SignIn"><b>Masuk</b></a> </p>
                  </ion-label>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonInput, IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignUp',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonInput, IonItem, IonCheckbox, IonLabel, IonButton
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-checkbox {
  --size: 20px;
  --background-checked: #2348f0;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #2348f0;
}

.card-middle {
  width: 30%;
  height: 125%;
  margin: auto;
  background-color: white;
  border-radius: 12px;
}
.sabeb{
  text-decoration: none;
  color: linear-gradient(to right, #3A416F, #141727);
}
.card-inside {
  margin: 15px 30px 0;
  background-color: #857B7B;
  margin-top: 22px;
}

.button-regis {}

@media only screen and (max-width: 1025px) {
    .card-middle {
        width: 50%;
    }
}

@media only screen and (max-width: 769px) {

  .toptopan{
    margin-left: 30px;
    /* display: grid; */
    gap: 5px;
    margin-right: 30px;
  }
  .bawahnyatop{
    margin-right:
  }
  .card-inside{
      margin: 0px;
      border-radius: 0px;
    }
  .card-middle {
        width: 60%;
        font-size: 10px;
    }
}

@media only screen and (max-width: 426px) {
    .card-middle {
        width: 85%;
        font-size: 10px;
        
    }
    .ionlebel{
      font-size: 2px;
    }
    .card-inside{
      margin: 0px;
      border-radius: 0px;
    }
}
</style>
