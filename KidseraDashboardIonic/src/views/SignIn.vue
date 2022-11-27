<template>
  <ion-page>

    <ion-content :fullscreen="true">
      <ion-card class="container rounded-pill fixed-top z-index-sticky navbar-custom"
        style="width: 80%; margin-top: 2%; font-size: 12pt;">
        <ion-toolbar>
          <ion-grid>
            <ion-row clas="ion-justify-content-between">
              <ion-col size-lg="7">
                <a class="navbar-brand ms-lg-0 ms-3 title" href="#" style="color: #344767;"><strong>Kidsera
                    Dashboard</strong></a>
              </ion-col>
              <ion-col size-lg="4">
                <ion-row class="ion-justify-content-between">
                  <ion-col size-lg="7">
                    <a class="nav-link" aria-current="page" href="#"><i
                        class="fa fa-chart-pie opacity-6 me-1 d-inline-block"></i><span
                        class="d-none d-md-inline-block">Dashboard</span></a>
                  </ion-col>
                  <ion-col size-lg="4" style="right: 60px">
                    <a class="nav-link" href="../pages/sign-up.html"><i
                        class="fas fa-user-circle opacity-6 me-1 d-inline-block"></i><span
                        class="d-none d-md-inline-block">Daftar</span></a>
                  </ion-col>
                </ion-row>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-toolbar>
      </ion-card>
      <div id="container">
        <ion-grid>
          <ion-row class="ion-text-justify ion-justify-content-start">
              <ion-card class="card-background">
                <ion-card-header>
                  <ion-card-header>
                    <ion-card-title class="text-dark">
                      <h3 class="text-info text-gradient"><b>Masuk</b></h3>
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>Masukkan Email dan Password <br> untuk masuk</ion-card-content>
                </ion-card-header>

                <ion-card-content class="mb-3">
                  <ion-item lines="none">
                    <ion-label position="stacked" class="mb-3"><b>Email</b></ion-label>
                    <ion-item fill="outline" ref="item">
                      <ion-input type="email" placeholder="Email" @ionInput="validate" @ionBlur="markTouched" required>
                      </ion-input>
                      <ion-note slot="helper">Masukkan email yang valid</ion-note>
                      <ion-note slot="error">Email tidak valid</ion-note>
                    </ion-item>
                  </ion-item>
                  <ion-item lines="none">
                    <ion-label position="stacked" class="mb-3"><b>Password</b></ion-label>
                    <ion-item fill="outline">
                      <ion-input type="password" placeholder="Password" required></ion-input>
                    </ion-item>
                  </ion-item>

                  <ion-item lines="none">
                    <ion-toggle color="tertiary" :checked="true"></ion-toggle>
                    <ion-label>Ingatkan Saya</ion-label>
                  </ion-item>

                  <ion-button expand="block" shape="round" color="primary" href="javascript: doSomething()"
                    class="bg-gradient-info w-100 mt-4 mb-0 text-white">
                    <ion-label>Masuk</ion-label>
                  </ion-button>
                  <p class="mb-4 text-sm me-auto ms-5 mt-2">
                    Belum punya akun?
                    <a href="javascript:doSomething2();" class="text-info text-gradient"><b>Daftar</b></a>
                  </p>
                </ion-card-content>
              </ion-card>
            
              <div class="oblique position-absolute me-n8 d-none d-lg-block">
                <div class="bg-cover position-absolute fixed-top ms-auto z-index-0 ms-n6"
                  style="background-color: #857B7B; height: 115%;"></div>
              </div>
          </ion-row>
        </ion-grid>

        <ion-toolbar class="py-5" style="top: 5rem;">
          <ion-title>
            <p class="mb-0 text-center">
              Copyright © {{ year() }} Ilmu Komputer UNJ.
            </p>
          </ion-title>
        </ion-toolbar>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent, IonPage,
  IonTitle,
  IonCol, IonGrid, IonLabel, IonRow,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonItem, IonInput,
  IonToggle,
  IonNote
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SignIn',
  components: {
    IonContent,
    IonPage,
    IonTitle,
    IonCol, IonGrid, IonLabel, IonRow,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonInput,
    IonToggle,
    IonNote
  },
  methods: {
    validateEmail(email) {
      return email.match(/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
    },

    validate(ev) {
      const value = ev.target.value;

      this.$refs.item.$el.classList.remove('ion-valid');
      this.$refs.item.$el.classList.remove('ion-invalid');

      if (value === '') return;

      this.validateEmail(value)
        ? this.$refs.item.$el.classList.add('ion-valid')
        : this.$refs.item.$el.classList.add('ion-invalid');
    },

    markTouched() {
      this.$refs.item.$el.classList.add('ion-touched')
    },

    year() {
      return new Date().getFullYear();
    },
  },
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
  margin-top: 7rem;
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

.card-background {
  box-shadow: 0 0 0 0;
  z-index: 1;
  margin-left: 15rem;
}

.text-info {
  color: #17c1e8 !important;
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
}

.text-gradient.text-info {
  background-image: linear-gradient(310deg, #2152FF, #21D4FD);
}

.text-gradient.text-dark {
  background-image: linear-gradient(310deg, #141727, #3A416F);
}

ion-card-title.text-dark {
  margin-top: 3rem;
}

.bg-gradient-info {
  --background-image: linear-gradient(310deg, #2152ff 0%, #21d4fd 100%) !important;
  /* --background: image(linear-gradient(310deg, #2152ff 0%, #21d4fd 100%)) !important; */
}

.w-100 {
  width: 100% !important;
}

.oblique {
  transform: skewX(-10deg);
  overflow: hidden;
  width: 38.2rem;
  height: 115%;
  right: -5rem;
  border-bottom-left-radius: 0.75rem;
  /* margin-top: -6.2rem; */
  /* top: -4rem; */
  bottom: 0;
}


@media screen and (max-width: 1075px) {
  .oblique {
    right: -20rem;
  }
}

@media screen and (max-width: 763px) {
  .card-background {
    display: grid;
    align-items: center;
    margin: 8rem auto auto auto;
  }
}

@media screen and (max-width: 425px) {
  .title {
    font-size: 12px;
  }
}
</style>
