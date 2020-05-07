import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonInput, IonModal, IonButton, IonPage } from '@ionic/react';
import HomeBack from '../../components/HeaderBack';
import HeaderHome from '../../components/HeaderHome';
import Title from '../../components/Titles';
import '../Pages.css';




const PCT: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = (number! / (number! + number2!)).toFixed(2);


    return (
        <IonPage>

            <HomeBack page='Participação de Capital de Terceiros' />

            <IonContent>
                <Title text='Participação de Capital de Terceiros' />

                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' style={{ marginTop: '150px' }}>
                                    <IonCardHeader mode='ios'>
                                        <img src="https://img.icons8.com/plasticine/48/000000/fund-accounting.png" />

                                        <p>
                                            Quanto para cada R$ 1,00 do ATIVO de minha empresa (os bens e direitos) é ADQUIRIDO ATRAVÉS DE RECURSOS DE TERCEIROS (créditos, empréstimos, financiamentos)?
                                        </p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Exigível Total (R$)'
                                                    onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}
                                                    color='primary'
                                                    inputmode='numeric'>
                                                </IonInput>
                                            </IonItem>

                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    color='primary'
                                                    type='number'
                                                    value={number2}
                                                    placeholder='Patrimonio Líquido (R$)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>

                                            <IonRow>

                                                <IonModal isOpen={showModal}>
                                                    <HeaderHome page='Nome do App' />

                                                    <div className='container'>
                                                        <p>
                                                            Para cada R$1,00 existente de Ativos (bens e direitos), <strong>R$ {result}</strong>> foi adquirido através de obrigações adquiridas com terceiros (empréstimos, financiamentos, créditos)?
                                                        </p>

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
                                                    href='/IndebtednessPage'> <p style={{ color: 'white' }}>Voltar</p>
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
export default PCT;
