
import MobileForm from '../MobileForm/MobileForm' 
import NotebookForm from '../NotebookForm/NotebookForm' 
import '../AdminPanel/AdminPanel.css'  
import CaracteristicNotebookForm from '../NotebookPage/CaracteristicNotebookForm' 
import CaracteristicForm from '../MobilePage/CaracteristicMobileForm'   
import ProductId from '../ProductId/ProductId'



 export default function AdminPanel(){
     return(
        <>      
           <h3 className="createtitle">Product List</h3>
             <div className="container context-content">
                 <ProductId />
           </div>
             <h1 className="createtitle">Create  products</h1>
        <div className="backgroundadmin">
        <div className="container content-container">  
       
                 <MobileForm /> 
                 <NotebookForm/>
        </div>      
            <h3 className="createtitle">Create product caracteristics </h3>
             <div className="container content-container"> 
                 <CaracteristicForm/> 
                  <CaracteristicNotebookForm/> 

             </div> 
             </div>
        </>
     )
 }    