import { IonPage, IonContent, IonInput, IonButton, IonCard, IonCardContent, IonSpinner } from "@ionic/react";
import { useState } from "react";
import { AuthService } from "../services/auth.service";
import { useHistory } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    if (!email || !password) {
      alert('Por favor, completa todos los campos');
      return;
    }

    setLoading(true);
    try {
      const response = await AuthService.login({ Email: email, Password: password });
      localStorage.setItem('token', response.token);
      history.push('/tasks');
    } catch (err) {
      alert('Credenciales incorrectas');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding ion-text-center">
        <h1 className="ion-margin-top">Bienvenido</h1>
        <p className="ion-margin-bottom">Inicia sesión para continuar</p>

        <IonCard className="ion-padding" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <IonCardContent>

            <IonInput
              label="Correo electrónico"
              labelPlacement="floating"
              fill="outline"
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
              className="ion-margin-bottom"
            />

            <IonInput
              label="Contraseña"
              labelPlacement="floating"
              fill="outline"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
              className="ion-margin-bottom"
            />

            <IonButton expand="block" fill="solid" color="primary" onClick={handleLogin} disabled={loading}>
              {loading ? <IonSpinner name="dots" /> : 'Iniciar sesión'}
            </IonButton>

            <IonButton fill="clear" routerLink="/registro" className="ion-margin-top">
              ¿No tienes cuenta? Regístrate
            </IonButton>

            <IonButton fill="clear" routerLink="/registro-doctor">
              ¿Eres doctor? Regístrate aquí
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
