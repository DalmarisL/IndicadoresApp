import React from 'react';
import { IonContent, IonFooter, IonToolbar, IonButton } from '@ionic/react';
import './Components.css';

interface TitleProps {
    text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => (
    <>
        <IonContent>
            <h1>{text}</h1>
        </IonContent>
    </>
);
export default Title;