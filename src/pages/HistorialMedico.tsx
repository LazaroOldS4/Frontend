import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
} from "@ionic/react";

export function HistMed() {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2 className="ion-text-center">Historial Médico</h2>

        {/* Información General */}
        <IonCard className="ion-margin-top">
          <IonCardHeader>
            <IonCardTitle>Información General</IonCardTitle>
            <IonCardSubtitle>Datos básicos del paciente</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p><strong>Nombre:</strong> Juan Pérez</p>
            <p><strong>Edad:</strong> 45 años</p>
            <p><strong>Sexo:</strong> Masculino</p>
            <p><strong>Tipo de sangre:</strong> O+</p>
          </IonCardContent>
        </IonCard>

        {/* Enfermedades Crónicas */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Enfermedades Crónicas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>Diabetes tipo 2</li>
              <li>Hipertensión arterial</li>
            </ul>
          </IonCardContent>
        </IonCard>

        {/* Alergias */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Alergias</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>Penicilina</li>
              <li>Mariscos</li>
            </ul>
          </IonCardContent>
        </IonCard>

        {/* Medicamentos Actuales */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Tratamientos Actuales</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              <li>Metformina (850mg) - 1 vez al día</li>
              <li>Lisinopril (10mg) - 1 vez al día</li>
            </ul>
          </IonCardContent>
        </IonCard>

        {/* Notas del Doctor */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Notas del Doctor</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText color="medium">
              <p>
                El paciente debe mantener una dieta baja en sodio y azúcares. Se recomienda realizar análisis de sangre cada 3 meses para monitoreo.
              </p>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
