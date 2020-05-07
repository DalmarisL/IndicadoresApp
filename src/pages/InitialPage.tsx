import React from 'react';
import { IonContent, IonPage, IonList, IonButton } from '@ionic/react';
import Header from '../components/HeaderHome';
import Menu2 from '../components/Menu';
import './Pages.css';


export const Initial: React.FC = () => {

    return (
        <IonPage>
            <Menu2/>
            <IonContent>
                
                
                <div className='container'>
                    <IonList>
                        <img src="https://img.icons8.com/plasticine/100/000000/estimate.png" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim blandit arcu eu tincidunt. Integer viverra justo vel orci eleifend facilisis. Nullam eu posuere felis, eu congue purus.
                    </p>
                    </IonList>
                    <IonList>
                        <IonButton shape="round"  size='default' href="/home">
                            <p style ={{color: 'white'}}>Iniciar</p>
                        </IonButton>
                    </IonList>
                </div>
            </IonContent>
        </IonPage>


    );
};

export default Initial;