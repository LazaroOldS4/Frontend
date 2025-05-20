import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonSpinner
} from "@ionic/react";
import { useEffect, useState } from "react";
import { DoctorModel } from "../models";
import { DoctorsService } from "../services/doctores.service";

export function Doctores() {
  const [doctores, setDoctores] = useState<DoctorModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    DoctorsService.getAll()
      .then(data => setDoctores(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2 className="ion-text-center">Lista de Doctores</h2>

        {loading && (
          <div className="ion-text-center ion-margin">
            <IonSpinner name="crescent" />
          </div>
        )}

        {error && (
          <IonText color="danger">
            <p className="ion-text-center">{error}</p>
          </IonText>
        )}

        <IonList>
          {doctores.map((doctor) => (
            <IonCard key={doctor.id_usuario} className="ion-margin-bottom">
              <IonCardHeader>
                <IonCardTitle>{doctor.especialidad}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonLabel>
                  <p><strong>Biografía:</strong> {doctor.biografia}</p>
                  <p><strong>Disponible:</strong> {doctor.disponible ? 'Sí' : 'No'}</p>
                </IonLabel>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}
