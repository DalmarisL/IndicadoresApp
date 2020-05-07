import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonModal, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import HomeBack from '../../components/HeaderBack';
import HeaderHome from '../../components/HeaderHome';
import Title from '../../components/Titles';
import '../Pages.css';


const PMPC: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = ((number! * 360) / number2!).toFixed(0);


    return (
        <IonPage>
            <HomeBack page='Nome do App' />
            <IonContent>
                <Title text='Prazo Médio de Pagamento de Compras' />
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className='card' style={{ marginTop: '150px' }}>
                                    <IonCardHeader>
                                        <img src="https://img.icons8.com/plasticine/48/000000/initiate-money-transfer.png" />

                                        <p>Quantos dias, em média, minha empresa demora para PAGAR AS COMPRAS?</p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    required={true}
                                                    type='number'
                                                    value={number}
                                                    placeholder='Fornecedores (Dias)'
                                                    onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
                                                    color='primary'
                                                    inputmode='numeric'>

                                                </IonInput>
                                            </IonItem>

                                            <IonItem>
                                                <IonInput className='input'
                                                    required={true}
                                                    color='primary'
                                                    type='number'
                                                    value={number2}
                                                    placeholder='Compras (Dias)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonRow>

                                                <IonModal isOpen={showModal}>
                                                    <HeaderHome page='Nome do App' />

                                                    <div className='container'>
                                                        <p>Sua empresa precisa pagar suas compras, em média, <strong> {result} </strong> dias . </p>

                                                        <IonButton
                                                            shape="round"
                                                            size='default'
                                                            onClick={() => setShowModal(false)}
                                                            style={{ marginTop: '20px' }}
                                                        > <p style={{ color: 'white' }}>Fechar</p>
                                                        </IonButton>
                                                    </div>
                                                </IonModal>

                                                <IonButton
                                                    shape="round"
                                                    size='default'
                                                    onClick={() => setShowModal(true)}
                                                    style={{ marginTop: '20px' }}> <p style={{ color: 'white' }}>Calcular</p>
                                                </IonButton>
                                                <IonButton
                                                    shape="round"
                                                    color='danger'
                                                    size='default'
                                                    style={{ marginTop: '20px' }}
                                                    href='/ActivityPage'> <p style={{ color: 'white' }}>Voltar</p>
                                                </IonButton>
                                            </IonRow>

                                        </IonList>
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
export default PMPC;
