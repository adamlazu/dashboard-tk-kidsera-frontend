<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-grid>
          <ion-row class="ion-justify-content-between">
            <ion-col size="3">
              <ion-title size="small"><span style="opacity: 50%;">Pages</span> / {{ $route.params.id }}</ion-title>
              <ion-subtitle></ion-subtitle>
            </ion-col>
            <ion-col size="7">
              <ion-row class="ion-align-items-center ion-justify-content-end" style="margin-right: 20px;">
                <ion-searchbar placeholder="Type Here..."></ion-searchbar>
                <a href=""><ion-icon src="assets/icon/home.svg"></ion-icon>&nbsp;Sign In</a>
                <a href=""><ion-icon src="assets/icon/settings-sharp.svg"> </ion-icon></a>
                <a href="">
                  <ion-icon src="icon/notifications.svg"> </ion-icon>
                </a>
              </ion-row>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <p>zz <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
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

ion-searchbar{
  --border-radius: 12px;
  width: 40%;
}

a{
  color: white;
  text-decoration: none;
  margin-left: 20px;
}
</style>
