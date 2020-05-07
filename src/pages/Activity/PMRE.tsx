import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonModal, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import HomeBack from '../../components/HeaderBack';
import HeaderHome from '../../components/HeaderHome';
import Title from '../../components/Titles';
import '../Pages.css';




const PMRE: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = ((number! * 360) / number2!).toFixed(0);


    return (
        <IonPage>
            <HomeBack page='Nome do App' />
            <IonContent>
                <Title text='Prazo Médio de Renovação de Estoque' />
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' style={{ marginTop: '150px' }}>
                                    <IonCardHeader mode='ios'>
                                        <img src="https://img.icons8.com/plasticine/48/000000/new-product.png" />

                                        <p>Quantos dias, em média, minha empresa leva para VENDER O ESTOQUE?</p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Estoques (Dias)'
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
                                                    placeholder='CMV (Dias)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonRow>

                                                <IonModal isOpen={showModal}>

                                                    <HeaderHome page='Nome do App' />

                                                    <div className='container'>

                                                        <p>Sua empresa vende/renova seus estoques, em média, <strong> {result} </strong>. </p>

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
                                                    href='/ActivityPage'> <p style ={{color: 'white'}}>Voltar</p>
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
export default PMRE;
