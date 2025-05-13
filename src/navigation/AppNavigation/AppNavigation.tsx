import {IonReactRouter} from '@ionic/react-router';
import {IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon} from '@ionic/react';
import {Redirect, Route} from 'react-router-dom';
import {Tasks, Settings} from '../../pages'
import {settingsOutline,listOutline} from "ionicons/icons";

import './AppNavigation.scss';

export function AppNavigation() {
  return (
    <IonReactRouter>
      <IonTabs className='navigation-ion-tabs'>
        <IonRouterOutlet>
            <Route exact path="/tasks" component={Tasks}/>
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/">
            <Redirect to='/tasks'/>
            </Route>
        </IonRouterOutlet>
        <IonTabBar slot='bottom' className='tab-bar'>
            <IonTabButton tab='tasks' href='tasks'>
                <IonIcon icon={listOutline}/>
            </IonTabButton>
            <IonTabButton tab='settings' href='settings'>
                <IonIcon icon={settingsOutline}/>
            </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}
