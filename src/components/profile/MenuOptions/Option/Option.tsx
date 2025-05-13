import {IonIcon} from '@ionic/react';
import {chevronForwardCircleOutline} from 'ionicons/icons';
import {OptionTypes} from './Option.type'
import './Option.scss';

export function Option(props: OptionTypes.Props) {
    const {title,icon,onClick}=props;
  return (
    <div className='option' onClick={onClick}>
        <div>
           <IonIcon icon={icon}/>
           <span>{title}</span>
        </div>
        <IonIcon icon={chevronForwardCircleOutline}/>
    </div>
  )
}
