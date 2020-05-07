import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonModal, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import HomeBack from '../../components/HeaderBack';
import HeaderHome from '../../components/HeaderHome';
import Title from '../../components/Titles';
import '../Pages.css';




const LC: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = (number! / number2!).toFixed(2);


    return (
        <IonPage>
            <HomeBack page='Nome do App' />
            <IonContent>
                <Title text='Liquidez Corrente' />
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' style={{ marginTop: '150px' }}>
                                    <IonCardHeader mode='ios'>
                                        <img src="https://img.icons8.com/plasticine/48/000000/general-ledger.png" />

                                        <p>
                                            Qual a CAPACIDADE DE PAGAMENTO A CURTO PRAZO (período de um ano) de minha empresa?
                                            </p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Ativo Circulante (R$)'
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
                                                    placeholder='Passivo Circulante (R$)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonRow>

                                                <IonModal isOpen={showModal}>

                                                    <HeaderHome page='Nome do App' />

                                                    <div className='container'>

                                                        <p>Para cada R$1,00 de dívida que deverá ser paga no curto prazo (prazo inferior a 01 ano), sua empresa possui <strong> R$ {result}</strong> de valores a receber também no curto prazo. </p>

                                                        <IonButton
                                                            shape="round"
                                                            size='default'
                                                            onClick={() => setShowModal(false)}
                                                            style={{ marginTop: '20px' }}
                                                        > <p style ={{color: 'white'}}>Fechar</p>
                                                    </IonButton>
                                                    </div>
                                                </IonModal>

                                                <IonButton
                                                    shape="round"
                                                    size='default'
                                                    onClick={() => setShowModal(true)}
                                                    style={{ marginTop: '20px' }}> <p style ={{color: 'white'}}>Calcular</p>
                                            </IonButton>
                                                <IonButton
                                                    shape="round"
                                                    color='danger'
                                                    size='default'
                                                    style={{ marginTop: '20px' }}
                                                    href='/LiquidityPage'> <p style ={{color: 'white'}}>Voltar</p>
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
export default LC;
