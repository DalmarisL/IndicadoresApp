import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonModal, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import HomeBack from '../../components/HeaderBack';
import HeaderHome from '../../components/HeaderHome';
import Title from '../../components/Titles';
import '../Pages.css';




const GA: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = (number! / number2!).toFixed(0);


    return (
        <IonPage>
            <HomeBack page='Nome do App' />
            <IonContent>
                <Title text='Giro do Ativo' />
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' style={{ marginTop: '150px' }}>
                                    <IonCardHeader mode='ios'>
                                        <img src="https://img.icons8.com/plasticine/48/000000/exchange.png" />

                                        <p>
                                            Qual a PRODUTIVIDADE, ou seja, qual a eficiência da utilização dos ativos da empresa na geração de faturamento?
                                       </p>

                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Vendas (N° de vendas)'
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
                                                    placeholder='Ativo Total'
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
                                                            O Ativo de sua empresa corresponde a <strong>{result}</strong> vezes as vendas realizadas por ela.
                                                    </p>

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
                                                    href='/ProfitabilityPage'> <p style ={{color: 'white'}}>Voltar</p>
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
export default GA;
