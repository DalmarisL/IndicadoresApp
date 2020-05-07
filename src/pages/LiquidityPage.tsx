import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle } from '@ionic/react';
import HeaderBack from '../components/HeaderBack';
import Title from '../components/Titles';
import './Pages.css';

const LiquidityPage: React.FC = () => {
    return (
        <IonPage>
            <HeaderBack page="Nome do App" />
            <IonContent>
                <Title text='Indicadores de Liquidez' />
                <IonGrid>
                    <div className="container">
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/LG">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/sales-performance.png" />

                                        <p>Liquidez Geral</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/LC">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/general-ledger.png" />

                                        <p>Liquidez Corrente</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                    </div>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default LiquidityPage;