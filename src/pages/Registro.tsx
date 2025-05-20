import { IonPage, IonContent, IonInput, IonButton } from "@ionic/react";
import { useState } from "react";
import { AuthService } from "../services/auth.service";
import { useHistory } from "react-router-dom";

export function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    try {
      await AuthService.registerPaciente({
        nombre,
        apellidos,
        email,
        password
      });
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      history.push('/login');
    } catch (err) {
      alert('Error al registrar. Intenta con otro correo.');
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Registro de Paciente</h2>
        <IonInput placeholder="Nombre" value={nombre} onIonChange={e => setNombre(e.detail.value!)} />
        <IonInput placeholder="Apellidos" value={apellidos} onIonChange={e => setApellidos(e.detail.value!)} />
        <IonInput placeholder="Email" value={email} onIonChange={e => setEmail(e.detail.value!)} />
        <IonInput placeholder="Contraseña" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        <IonButton fill="clear" routerLink="/login">¿Ya tienes cuenta? Inicia sesión</IonButton>
        <IonButton expand="block" onClick={handleRegister}>Registrarse</IonButton>
      </IonContent>
    </IonPage>
  );
}