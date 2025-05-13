import { IonPage, IonContent } from "@ionic/react";
import { Avatar, TasksInfo, MenuOptions } from "../components/profile";

export function Settings() {
  return (
    <IonPage>
      <IonContent>
        <Avatar />
        <TasksInfo/>
        <MenuOptions/>
      </IonContent>
    </IonPage>
  );
}
