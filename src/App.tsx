import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


import Home from './pages/Home';
import ActivityPage from './pages/ActivityPage';
import LiquidityPage from './pages/LiquidityPage';
import ProfitabilityPage from './pages/ProfitabilityPage';
import IndebtednessPage from './pages/IndebtednessPage';
import PMRV from './pages/Activity/PMRV';
import PMPC from './pages/Activity/PMPC';
import PMRE from './pages/Activity/PMRE';
import LG from './pages/Liquidity/LG';
import LC from './pages/Liquidity/LC';
import TRI from './pages/Profitability/TRI';
import GA from './pages/Profitability/GA';
import ML from './pages/Profitability/ML';
import PCT from './pages/Indebtedness/PCT';
import GCP from './pages/Indebtedness/GCP';
import CE from './pages/Indebtedness/CE';
import Initial from './pages/InitialPage';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/initial" component={Initial} exact={true} />
        <Route path="/ActivityPage" component={ActivityPage} exact={true} />
        <Route path="/LiquidityPage" component={LiquidityPage} exact={true} />
        <Route path="/ProfitabilityPage" component={ProfitabilityPage} exact={true} />
        <Route paht="/IndebtednessPage" component={IndebtednessPage} exact={true} />
        <Route path="/PMRV" component={PMRV} exact={true} />
        <Route path="/PMPC" component={PMPC} exact={true} />
        <Route path="/PMRE" component={PMRE} exact={true} />
        <Route path="/LG" component={LG} exact={true} />
        <Route path="/LC" component={LC} exact={true} />
        <Route path="/TRI" component={TRI} exact={true} />
        <Route path="/GA" component={GA} exact={true} />
        <Route path="/ML" component={ML} exact={true} />
        <Route path="/PCT" component={PCT} exact={true} />
        <Route path="/GCP" component={GCP} exact={true} />
        <Route path="/CE" component={CE} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/initial" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
