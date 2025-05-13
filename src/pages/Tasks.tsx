import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import {ListTasks} from '../components/Task';

import { Header } from "../components";

export function Tasks() {
  return (
    <IonPage>
      <Header />
    
        <IonContent fullscreen>
         {/*  <IonHeader collapse="fade">
            <IonToolbar>
              <IonTitle size="large">Lista de tareas</IonTitle>
            </IonToolbar>
          </IonHeader> */}
          <IonContent>
            <ListTasks/>
          </IonContent>
        </IonContent>
    </IonPage>
  );
}
