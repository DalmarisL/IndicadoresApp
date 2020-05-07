import React from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle } from '@ionic/react';
import HeaderBack from '../components/HeaderBack';
import Title from '../components/Titles';
import './Pages.css';

const IndebtednessPage: React.FC = () => {
    return (
        <IonPage>
            <HeaderBack page="Nome do App" />
            <IonContent>
                <Title text='Indicadores de Endividamento' />
                <IonGrid>
                    <div className="container">
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/PCT" style={{ marginTop: '100px' }}>
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/fund-accounting.png" />

                                        <p>Participação de Capital de Terceiros</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/GCP">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/finance-medal.png" />

                                        <p>Garantia de Capital Próprio ao Capital de Terceiros </p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/CE">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/transaction-list.png" />

                                        <p>Composição de Endividamento </p>

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
export default IndebtednessPage;