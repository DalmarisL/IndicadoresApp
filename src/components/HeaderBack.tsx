import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';


interface HeaderSProps {
    page: string;
}


export const HeaderS: React.FC<HeaderSProps> = ({ page }) => (
    <>
        <IonHeader>
            <IonToolbar color='primary' >
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" mode='md' />
                </IonButtons>
                <p> {page} </p>
            </IonToolbar>
        </IonHeader>
    </>
);

export default HeaderS;