import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../components/pages/Login/Login';
import Profile from '../../components/pages/Profile/Profile';
import MobilePage from '../pages/MobilePage/MobilePage'; 
import MobileForm from '../pages/MobileForm/MobileForm'; 
import MobileDetails from '../pages/MobileDetails/MobileDetails';  
import CaracteristicMobileForm from '../pages/MobilePage/CaracteristicMobileForm';
const Routes = ({ storeUser, loggedUser }) => {
  return (
    <Switch> 
      <Route exact path="/createmobile" render={(props) => <MobileForm {...props} />} />  
      <Route exact path="/caracteristicsform" render={(props) => <CaracteristicMobileForm {...props} />} />
      <Route exact path="/caracteristics/:productId/:id" render={(props) => <MobileDetails {...props} />} />
      <Route exact path="/mobiles" render={(props) => <MobilePage {...props} />} /> 
      <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />
      <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />
    </Switch> 
  )
}

export default Routes



   