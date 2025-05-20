import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonText,
  IonList,
  IonItem,
  IonLabel
} from "@ionic/react";

export function Pacientes() {
  // Simulación de pacientes (puedes conectarlo a tu base después)
  const pacientes = [
    {
      id: 1,
      nombre: "María González",
      edad: 52,
      sexo: "Femenino",
      condicion: "Hipertensión"
    },
    {
      id: 2,
      nombre: "Carlos Ramírez",
      edad: 36,
      sexo: "Masculino",
      condicion: "Asma"
    },
    {
      id: 3,
      nombre: "Luisa Herrera",
      edad: 28,
      sexo: "Femenino",
      condicion: "Sin condiciones actuales"
    }
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2 className="ion-text-center">Lista de Pacientes</h2>

        {pacientes.length === 0 ? (
          <IonText color="medium" className="ion-text-center">
            <p>No hay pacientes registrados.</p>
          </IonText>
        ) : (
          <IonList>
            {pacientes.map((paciente) => (
              <IonCard key={paciente.id} className="ion-margin-bottom">
                <IonCardHeader>
                  <IonCardTitle>{paciente.nombre}</IonCardTitle>
                  <IonCardSubtitle>{paciente.condicion}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonLabel>
                    <p><strong>Edad:</strong> {paciente.edad} años</p>
                    <p><strong>Sexo:</strong> {paciente.sexo}</p>
                  </IonLabel>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
}
