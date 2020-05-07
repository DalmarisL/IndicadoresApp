import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonModal, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import HomeBack from '../../components/HeaderBack';
import HeaderHome from '../../components/HeaderHome';
import Title from '../../components/Titles';
import '../Pages.css';




const ML: React.FC = () => {

    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [showModal, setShowModal] = useState(false);

    const result = (number! / number2!).toFixed(2);


    return (
        <IonPage>

            <HomeBack page='Nome do App' />

            <IonContent>
                <Title text = 'Margem Líquida' />
                <IonGrid>
                    <div className='container'>
                        <IonRow>
                            <IonCol>
                                <IonCard className= 'card' style={{ marginTop: '150px' }}>
                                    <IonCardHeader mode='ios'>
                                        <img src="https://img.icons8.com/plasticine/48/000000/money-box.png" />
                                       
                                        <p>
                                            Qual a LUCRATIVIDADE de minha empresa para cada R$ 1,00 vendido? Ou seja, quanto resta após a dedução de todas as despesas?
                                       </p>
                                        
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonList>
                                            <IonItem>
                                                <IonInput
                                                    className='input'
                                                    type='number'
                                                    value={number}
                                                    placeholder='Lucro Líquido (R$)'
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
                                                    placeholder='Vendas Líquidas (R$)'
                                                    inputmode='numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                >
                                                </IonInput>
                                            </IonItem>
                                            <IonRow>

                                                <IonModal isOpen={showModal}>
                                                    <HeaderHome page = 'Nome do App'/>
                                                    
                                                    <div className='container'>

                                                        <p>
                                                            A cada R$ 1,00 vendido, sua empresa tem o lucro de <strong>R$ {result}</strong>.
                                                        </p>

                                                        <IonButton
                                                            shape="round"
                                                            size= 'default'
                                                            onClick={() => setShowModal(false)}
                                                            style={{ marginTop: '20px' }}
                                                        > <p style ={{color: 'white'}}>Fechar</p>
                                                    </IonButton>
                                                    </div>
                                                </IonModal>

                                                <IonButton
                                                    shape="round"
                                                    size= 'default'
                                                    onClick={() => setShowModal(true)}
                                                    style={{ marginTop: '20px' }}> <p style ={{color: 'white'}}>Calcular</p>
                                            </IonButton>
                                                <IonButton
                                                    shape="round"
                                                    color='danger'
                                                    size='default'
                                                    style={{ marginTop: '20px' }}
                                                    href='/ProfitabilityPage'><p style ={{color: 'white'}}>Voltar</p>
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
export default ML;
