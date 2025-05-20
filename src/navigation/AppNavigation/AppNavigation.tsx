import {IonReactRouter} from '@ionic/react-router';
import {IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon} from '@ionic/react';
import {Redirect, Route} from 'react-router-dom';
import {Tasks, Settings, Doctores, Pacientes, HistMed} from '../../pages'
import {settingsOutline,listOutline, medkitOutline, chatbubbleOutline, peopleOutline} from "ionicons/icons";

import './AppNavigation.scss';

export function AppNavigation() {
  return (
    <IonReactRouter>
      <IonTabs className='navigation-ion-tabs'>
        <IonRouterOutlet>
            <Route exact path="/tasks" component={Tasks}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/doctores" component={Doctores}/>
            <Route exact path="/pacientes" component={Pacientes}/>
            <Route exact path="/historial" component={HistMed}/>
            <Route exact path="/">
            <Redirect to='/tasks'/>
            </Route>
        </IonRouterOutlet>
        <IonTabBar slot='bottom' className='tab-bar'>
            <IonTabButton tab='tasks' href='tasks'>
                <IonIcon icon={listOutline}/>
            </IonTabButton>
            <IonTabButton tab='doctores' href='/doctores'>
                <IonIcon icon={medkitOutline}/>
            </IonTabButton>
            <IonTabButton tab='historial' href='/historial'>
                <IonIcon icon={chatbubbleOutline}/>
            </IonTabButton>
            <IonTabButton tab='pacientes' href='/pacientes'>
                <IonIcon icon={peopleOutline}/>
            </IonTabButton>
            <IonTabButton tab='settings' href='settings'>
                <IonIcon icon={settingsOutline}/>
            </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}
