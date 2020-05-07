import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/react';


interface HeaderProps {
    page: string;
}


export const Header: React.FC<HeaderProps> = ({ page }) => (
    <>
        <IonHeader>
            <IonToolbar color='primary' mode='ios'>
                <p>{page}</p>
            </IonToolbar>
        </IonHeader>
    </>
);

export default Header;