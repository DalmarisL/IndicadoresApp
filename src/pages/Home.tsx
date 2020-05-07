import React from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';
import Header from '../components/HeaderHome';
import Title from '../components/Titles';
import './Pages.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header page='Classe de Indicadores' />
      <IonContent>

        <IonGrid>
          
          <div className='container'>

            <IonRow>
              <IonCol>
                <IonCard className= 'card' href='/ActivityPage'>
                  <IonCardContent>
                    <img src="https://img.icons8.com/plasticine/48/000000/receive-cash.png" />

                    <p>Indicadores de Atividades</p>

                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol>
                <IonCard  className= 'card' href='/LiquidityPage'> 
                  <IonCardContent>
                    <img src="https://img.icons8.com/plasticine/48/000000/money.png" />

                    <p> Indicadores de Liquidez </p>

                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonCard className= 'card' href='/ProfitabilityPage'>
                  <IonCardContent>
                    <img src="https://img.icons8.com/plasticine/48/000000/economic-improvement.png" />

                    <p>Indicadores de Rentabilidade</p>

                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol>
                <IonCard  className= 'card' href='/IndebtednessPage'>
                  <IonCardContent>
                    <img src="https://img.icons8.com/plasticine/48/000000/tax.png" />

                    <p>Indicadores de Endividamento</p>

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
export default Home;