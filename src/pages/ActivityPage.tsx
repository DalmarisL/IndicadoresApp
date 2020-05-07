import React from 'react';
import { IonPage, IonContent, IonGrid, IonCard, IonRow, IonCol, IonCardContent } from '@ionic/react';
import HeaderBack from '../components/HeaderBack';
import Title from '../components/Titles';
import './Pages.css';

const ActivityPage: React.FC = () => {
    return (
        <IonPage>
            <HeaderBack page='Nome do App' />
            <IonContent>

                <Title text='Indicadores de Atividades' />

                <IonGrid>
                    <div className="container">
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/PMRV" style={{ marginTop: "100px" }}>
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/request-money.png" />

                                        <p>Prazo Médio de Recebimento de Vendas</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/PMPC">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/initiate-money-transfer.png" />

                                        <p>Prazo Médio de Pagamento de Compras</p>

                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' href="/PMRE">
                                    <IonCardContent>
                                        <img src="https://img.icons8.com/plasticine/48/000000/new-product.png" />

                                        <p>Prazo Médio de Renovação de Estoques</p>

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
export default ActivityPage;
