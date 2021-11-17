import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../../components/pages/Login/Login';
import Profile from '../../components/pages/Profile/Profile';
import MobilePage from '../pages/MobilePage/MobilePage'; 
import MobileForm from '../pages/MobileForm/MobileForm'; 
import MobileDetails from '../pages/MobileDetails/MobileDetails';   
import HomePage from '../pages/HomePage/HomePage';
import CaracteristicMobileForm from '../pages/MobilePage/CaracteristicMobileForm'; 
import NotebookForm from '../pages/NotebookForm/NotebookForm'    
import NoteBookPage from '../pages/NotebookPage/NotebookPage'; 
import CaracteristicNotebookForm from '../pages/NotebookPage/CaracteristicNotebookForm'; 
import NotebookDetails from '../pages/NotebookDetails/NotebookDetails';  
import ProductSearch from '../pages/ProductsSearch/ProductsSearch';
import Search from '../pages/Search/Search';
import Signup from '../pages/Signup/Signup' 
import AdminPanel from '../pages/AdminPanel/AdminPanel' 
import ProductId from '../pages/ProductId/ProductId';  
import Favorites from '../pages/Favorites/Favorites';   
import Rating from '../pages/Rating/Rating';




const Routes = ({ storeUser, loggedUser }) => {
  return (
    <Switch>   
      <Route exact path="/" render={(props) => <HomePage {...props} />} /> 
    
      <Route exact path="/register" render={(props) => <Signup {...props} />} /> 
      <Route exact path="/adminpanel" render={(props) => <AdminPanel {...props} />} />
      <Route exact path="/rating" render={(props) => <Rating {...props} />} />
      <Route exact path="/search" render={(props) => <Search {...props} />} />
      <Route exact path="/createmobile" render={(props) => <MobileForm {...props} />} />   
      <Route exact path="/productsearch" render={(props) => <ProductSearch {...props} />} />
      <Route exact path="/notebooks" render={(props) => <NoteBookPage {...props} />} />
      <Route exact path="/favorites" render={(props) => <Favorites {...props} />} />
      <Route exact path="/createnotebook" render={(props) => <NotebookForm {...props} />} /> 
      <Route exact path="/caracteristicsnotebook/:productId/:id" render={(props) => <NotebookDetails {...props} />} />
      <Route exact path="/caracteristicsnoteform" render={(props) => <CaracteristicNotebookForm {...props} />} />
      <Route exact path="/caracteristicsform" render={(props) => <CaracteristicMobileForm {...props} />} />
      <Route exact path="/caracteristicsmobile/:productId/:id" render={(props) => <MobileDetails {...props} />} />
      <Route exact path="/mobiles" render={(props) => <MobilePage {...props} />} /> 
      <Route exact path="/start-session" render={(props) => <Login storeUser={storeUser} {...props} />} />
      <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />
    </Switch> 
  )
}

export default Routes



   