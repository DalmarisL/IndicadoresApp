import React, { useState } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonInput, IonModal, IonToolbar, IonTitle, IonButton, IonPage } from '@ionic/react';
import HomeBack from '../../components/HeaderBack';
import HeaderHome, { Header } from '../../components/HeaderHome';
import Title from '../../components/Titles';
import '../Pages.css';




const LG: React.FC = () => {
    
    const [number, setNumber] = useState<number>();
    const [number2, setNumber2] = useState<number>();
    const [number3, setNumber3] = useState<number>();
    const [number4, setNumber4] = useState<number>();
    const [showModal, setShowModal] = useState(false); 

    const result = ((number! + number2!) / (number3! + number4!)).toFixed(2);


    return(
        <IonPage>
            <HomeBack page = 'Nome do App'/>
        <IonContent>
            <Title text =' Liquidez Geral'/>
            <IonGrid>
                <div className = 'container'>
                    <IonRow>
                        <IonCol>
                            <IonCard className= 'card' style ={{marginTop: '200px'}}>
                                <IonCardHeader mode = 'ios'>

                                    <img src="https://img.icons8.com/plasticine/48/000000/sales-performance.png"/>
                                    
                                    <p>
                                       Qual a CAPACIDADE TOTAL DE PAGAMENTO de minha empresa, considerando tudo que ela converterá em dinheiro a curto e longo prazo, com tudo que já assumiu como dívida?
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
                                                color = 'primary'
                                                inputmode = 'numeric'>    
                                        </IonInput>
                                        </IonItem>

                                        <IonItem>
                                            <IonInput
                                                    className='input'
                                                    color = 'primary' 
                                                    type = 'number' 
                                                    value = {number2} 
                                                    placeholder = 'Ativo Realizável a Longo Prazo(R$)' 
                                                    inputmode = 'numeric'
                                                    onIonChange={e => setNumber2(parseInt(e.detail.value!, 10))}
                                                    >
                                            </IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput
                                                    className='input'
                                                    color = 'primary' 
                                                    type = 'number' 
                                                    value = {number3} 
                                                    placeholder = 'Passivo Circulante (R$)' 
                                                    inputmode = 'numeric'
                                                    onIonChange={e => setNumber3(parseInt(e.detail.value!, 10))}
                                                    >
                                            </IonInput>
                                        </IonItem>
                                        <IonItem>
                                            <IonInput
                                                    className='input'
                                                    color = 'primary' 
                                                    type = 'number' 
                                                    value = {number4} 
                                                    placeholder = 'Passivo Não Circulante (R$)' 
                                                    inputmode = 'numeric'
                                                    onIonChange={e => setNumber4(parseInt(e.detail.value!, 10))}
                                                    >
                                            </IonInput>
                                        </IonItem>
                                        <IonRow>

                                            <IonModal isOpen = {showModal}>

                                                <HeaderHome page = 'Nome do App'/>

                                                <div className = 'container'>
                                                    <p>
                                                        Para cada R$1,00 de dívida que deverá ser paga (no curto e longo prazo), sua empresa possui <strong> R$ {result} </strong> de valores a receber (no curto e longo prazo).
                                                    </p>
                                                    
                                                    <IonButton
                                                            shape="round"
                                                            size = 'default'
                                                            onClick = {( ) => setShowModal(false)}
                                                            style ={{marginTop: '20px'}}
                                                             > <p style ={{color: 'white'}}>Fechar</p>
                                                    </IonButton>
                                                </div>
                                            </IonModal>

                                            <IonButton 
                                                    shape="round"
                                                    size = 'default'
                                                    onClick = {() =>setShowModal(true)}
                                                    style = {{marginTop: '20px'}}> <p style ={{color: 'white'}}>Calcular</p>
                                            </IonButton>
                                            <IonButton
                                                        shape="round"
                                                        color = 'danger'
                                                        size = 'default'
                                                        style = {{ marginTop: '20px'}}
                                                        href = '/LiquidityPage'> <p style ={{color: 'white'}}>Voltar</p>
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
export default LG;
