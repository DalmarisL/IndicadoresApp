import React from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardSubtitle } from '@ionic/react';
import HeaderBack from '../components/HeaderBack';
import Title from '../components/Titles';
import './Pages.css';

const ProfitabilityPage: React.FC = () => {
    return (
        <IonPage>
            <HeaderBack page="Nome do App" />
            <IonContent>
                <Title text='Indicadores de Rentabilidade' />
                <IonGrid>
                    <div className="container">
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/TRI" style={{ marginTop: '100px' }}>
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/expensive.png" />

                                        <p>Taxa de Retorno sobre Investimento</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/GA">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/exchange.png" />

                                        <p>Giro do Ativo</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/ML">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/money-box.png" />

                                        <p>Margem Líquida</p>

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
export default ProfitabilityPage;


