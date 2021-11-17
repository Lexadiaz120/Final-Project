import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import MobileService from '../../../services/mobile.service';
 
let array = ['star', 'star', 'star', 'star', 'star']; 


export default class CaracteristicForm extends Component { 
 


    state = {
        id: "",
        display: "", 
        description: "",  
        mobileimg: "",  
        mobilename: "",    
        rating: "",
        Hardwarepart: {
            OperativeSistem: "", 
            processormodel: "", 
            CPUfrequency: "", 
            corsNumber: "", 
            GraphicProcessor: "", 
            RAM: "", 
            BuiltMemory: "", 
            memorySpecification: "", 
            MemoryCardSlot: "", 
            cartNumber: "", 
            simType: ""
        },  
        mainCamera: {
            ObjectivesNumber: "", 
            mainObjective: "",  
            ultrawidelenth: "", 
            Auxillarylens: "", 
            Macrolens: "", 
            Slowmo: "", 
            HdShooting: "", 
            imageStabilization: "", 
            Flash:  ""
        }, 
        frontCamera: {
            FormFactor: "",
            MainObjective: "",
            ApertureRatio: "",
            ViewingAngel: "",
            fullHdShooting: "",
        }, 
        CommunicationsandPorts: {
            Communcationstandarts: "",
            Communications: "",
            ConnectionPorts: ""
        }, 
        FunctionAndNavigation: {
            FeaturesAndCapabilities: "",
            Navigation: ""
        }, 
        Power: {
            BatteryCapacity: "",
            FastChargingTechnology: "",
            ChargingPower: "",
            CharginTime: ""
        }, 
        General: {
            LuiqidColling: "" ,
            FrameCoverMaterial: "",
            Backcover: "",
            Equipment: "",
            Dimensions: "",
            Weight: "",
            oficialwebPage: "",
        }
    }   

    MobileService = new MobileService();
  
 

    handleChange = (e) => {
        const { value, name } = e.target;
          


        if (name !== 'id' && 
            name !== "mobileimg" &&
            name !== 'display' && 
            name !== 'mobilename', 
            name !== 'description')

            this.setState({
                Hardwarepart:  {
                    ...this.state.Hardwarepart,   
                   [name]: value,
                },     
               
            })    

         if (name !== 'Hardwarepart' &&
            name !== 'display' && 
             name !== "mobileimg" && 
             name !== 'mobilename'&&
            name !== 'description' && 
             name !== 'id')

            this.setState({
               

                mainCamera: {
                    ...this.state.mainCamera,
                    [name]: value
                }


            }) 


        if (name !== 'Hardwarepart' && 
            name!== 'mainCamera' && 
            name !== 'display' &&  
            name !== 'mobilename' &&
            name !== "mobileimg" &&
            name !== 'description' &&
            name !== 'id')

            this.setState({

                frontCamera: {
                    ...this.state.frontCamera,
                    [name]: value
                }


            }) 


        if (name !== 'Hardwarepart' &&
            name !== 'mainCamera' &&
            name !== 'frontCamera' && 
            name !== 'mobilename' &&
            name !== 'display' && 
            name !== "mobileimg" &&
            name !== 'description' &&
            name !== 'id')

            this.setState({

                CommunicationsandPorts: {
                    ...this.state.CommunicationsandPorts,
                    [name]: value
                }


            }) 
          
        if (name !== 'Hardwarepart' &&
            name !== 'mainCamera' &&
            name !== 'frontCamera' && 
            name !== 'mobilename' &&
            name !== 'display' &&
            name !== 'description' && 
            name !== "mobileimg" &&
            name !== 'CommunicationsandPorts' &&
            name !== 'id')

            this.setState({
                FunctionAndNavigation: {
                    ...this.state.FunctionAndNavigation,
                    [name]: value
                }
            }) 


        if (name !== 'Hardwarepart' &&
            name !== 'mainCamera' &&
            name !== 'frontCamera' && 
            name !== 'mobilename' &&
            name !== 'display' &&
            name !== 'description' &&
            name !== 'CommunicationsandPorts' &&  
            name !== 'FunctionAndNavigation' && 
            name !== "mobileimg" &&
            name !== 'id')

            this.setState({
                Power: {
                    ...this.state.Power,
                    [name]: value
                }
            }) 



        if (name !== 'Hardwarepart' &&
            name !== 'mainCamera' &&
            name !== 'frontCamera' &&
            name !== 'display' && 
            name !== 'mobilename' &&  
            name !== 'description' &&
            name !== 'CommunicationsandPorts' &&
            name !== 'FunctionAndNavigation' && 
            name !== 'Power' && 
            name !== 'mobileimg' &&
            name !== 'id')

            this.setState({
                General: {
                    ...this.state.General,
                    [name]: value
                }
            })


       else  
            this.setState({
                ...this.state,
                [name]: value
            })
    }
  
      

    handleSumbit = (e) => {
        e.preventDefault()
       this.MobileService.createMobileCaracteristic(this.state.id,  this.state.display, this.state.description, this.state.Hardwarepart, this.state.mainCamera, this.state.frontCamera, this.state.CommunicationsandPorts, this.state.FunctionAndNavigation, this.state.Power, this.state.General, this.state.mobileimg, this.state.mobilename) 
           .then(() => {
                this.setState({
                   id: "", 
                   display: "", 
                    description: "",   
                    mobileimg: "", 
                    mobilename: "", 
                    Hardwarepart: {
                        OperativeSistem: "",
                        processormodel: "",  
                        CPUfrequency: "",  
                        corsNumber: "",  
                        GraphicProcessor: "",  
                        RAM: "",  
                        BuiltMemory: "",  
                        memorySpecification: "",  
                        MemoryCardSlot: "",  
                        cartNumber: "",  
                        simType: ""
                    } , 
                    mainCamera: {
                        ObjectivesNumber: "",
                        mainObjective: "",
                        ultrawidelenth: "",
                        Auxillarylens: "",
                        Macrolens: "",
                        Slowmo: "",
                        HdShooting: "",
                        imageStabilization: "",
                        Flash: ""
                    }, 
                    frontCamera: {
                        FormFactor: "",
                        MainObjective: "",
                        ApertureRatio: "",
                        ViewingAngel: "",
                        fullHdShooting: "",
                    },  
                    CommunicationsandPorts: {
                        Communcationstandarts: "",
                        Communications: "",
                        ConnectionPorts: ""
                    }, 
                    FunctionAndNavigation: {
                        FeaturesAndCapabilities: "",
                        Navigation: ""
                    }, 
                    Power: {
                        BatteryCapacity: "",
                        FastChargingTechnology: "",
                        ChargingPower: "",
                        CharginTime: ""
                    }, 

                    General: {
                        LuiqidColling: "",
                        FrameCoverMaterial: "",
                        Backcover: "",
                        Equipment: "",
                        Dimensions: "",
                        Weight: "",
                        oficialwebPage: "",
                    }
                   

                    
                })
         })
            .catch(err => console.log(err))

    }


     render() {
        return (
            <>
                <Form  onSubmit={this.handleSumbit}>
                    <Form.Group className="mb-3" controlId="id">
                        <Form.Label>Id </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="id" value={this.state.id} type="text" placeholder={this} />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="mobileimg">
                        <Form.Label> Mobileimage </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="mobileimg" value={this.state.mobileimg} type="text" placeholder="Introduce mobileimg" />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="mobilename">
                        <Form.Label> MobileImage</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="mobilename" value={this.state.mobilename} type="text" placeholder="Introduce mobilename" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="display">
                        <Form.Label> Display </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="display" value={this.state.display} type="text" placeholder="Introduce display" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="OperativeSistem">
                        <Form.Label> Operative System </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="OperativeSistem" value={this.state.Hardwarepart.OperativeSistem} type="text" placeholder="Introduce Operative System" />
                    </Form.Group>
                       

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label> Description </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Introduce description" />
                    </Form.Group>   


                    <Form.Group className="mb-3" controlId="processormodel">
                        <Form.Label> Processor model </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="processormodel" value={this.state.Hardwarepart.processormodel} type="text" placeholder="Introduce description" />
                    </Form.Group>
                    

                    <Form.Group className="mb-3" controlId="CPUfrequency">
                        <Form.Label>  CPUfrequency </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="CPUfrequency" value={this.state.Hardwarepart.CPUfrequency} type="text" placeholder="Introduce  CPUfrequency" />
                    </Form.Group>
                   

                    <Form.Group className="mb-3" controlId="corsNumbe">
                        <Form.Label>  corsNumber</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="corsNumber" value={this.state.Hardwarepart.corsNumber} type="text" placeholder="Introduce  corsNumber" />
                    </Form.Group>
                    


                    <Form.Group className="mb-3" controlId="GraphicProcessor">
                        <Form.Label>  GraphicProcessor</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="GraphicProcessor" value={this.state.Hardwarepart.GraphicProcessor} type="text" placeholder="Introduce  corsNumber" />
                    </Form.Group> 


                    <Form.Group className="mb-3" controlId="RAM">
                        <Form.Label>  RAM:</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="RAM" value={this.state.Hardwarepart.RAM} type="text" placeholder="Introduce  RAM" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="BuiltMemory">
                        <Form.Label>  BuiltMemory</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="BuiltMemory" value={this.state.Hardwarepart.BuiltMemory} type="text" placeholder="Introduce  BuiltMemory" />
                    </Form.Group>
                     

                    <Form.Group className="mb-3" controlId="memorySpecification">
                        <Form.Label>   MemorySpecification</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="memorySpecification" value={this.state.Hardwarepart.memorySpecification} type="text" placeholder="Introduce  memorySpecification" />
                    </Form.Group>
                 
                    <Form.Group className="mb-3" controlId="MemoryCardSlot">
                        <Form.Label>  MemoryCardSlot</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="MemoryCardSlot" value={this.state.Hardwarepart.MemoryCardSlot} type="text" placeholder="Introduce  MemoryCardSlot" />
                    </Form.Group>
                     
                    <Form.Group className="mb-3" controlId="cartNumber">
                        <Form.Label>   cartNumber</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="cartNumber" value={this.state.Hardwarepart.cartNumber} type="text" placeholder="Introduce  cartNumber" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="simType">
                        <Form.Label>   simType</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="simType" value={this.state.Hardwarepart.simType} type="text" placeholder="Introduce  simType" />
                    </Form.Group>
                       
                       <h5>Main camera:  </h5>
                       


                    <Form.Group className="mb-3" controlId="ObjectivesNumber">
                        <Form.Label>  Objective number</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="ObjectivesNumber" value={this.state.mainCamera.ObjectivesNumber} type="text" placeholder="Introduce  ObjectivesNumbe" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mainObjective">
                        <Form.Label>  mainObjective</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="mainObjective" value={this.state.mainCamera.mainObjective} type="text" placeholder="Introduce mainObjective" />
                    </Form.Group>


                  
                    <Form.Group className="mb-3" controlId="ultrawidelenth">
                        <Form.Label> Ultrawidelenth </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="ultrawidelenth" value={this.state.mainCamera.ultrawidelenth} type="text" placeholder="Introduce  ultrawidelenth" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="Auxillarylens">
                        <Form.Label>  Auxillarylens </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Auxillarylens" value={this.state.mainCamera.Auxillarylens} type="text" placeholder="Introduce  Auxillarylens" />
                    </Form.Group> 
                    
                    <Form.Group className="mb-3" controlId="Macrolens">
                        <Form.Label>  Macrolens</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Macrolens" value={this.state.mainCamera.Macrolens} type="text" placeholder="Introduce  Macrolens" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="Slowmo">
                        <Form.Label>   Slowmo </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Slowmo" value={this.state.mainCamera.Slowmo} type="text" placeholder="Introduce  Slowmo" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="HdShooting">
                        <Form.Label>   HdShooting </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="HdShooting" value={this.state.mainCamera.HdShooting} type="text" placeholder="Introduce  HdShooting" />
                    </Form.Group>
                  
                    <Form.Group className="mb-3" controlId="imageStabilization">
                        <Form.Label>   imageStabilization </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="imageStabilization" value={this.state.mainCamera.imageStabilization} type="text" placeholder="Introduce  imageStabilization" />
                    </Form.Group> 


                    <Form.Group className="mb-3" controlId="Flash">
                        <Form.Label>   Flash </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Flash" value={this.state.mainCamera.Flash} type="text" placeholder="Introduce  Flash" />
                    </Form.Group>
              
                       <h5>Front Camara </h5> 
                           

                    <Form.Group className="mb-3" controlId="FormFactor">
                        <Form.Label>  FormFactor </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="FormFactor" value={this.state.frontCamera.FormFactor} type="text" placeholder="Introduce   FormFactor" />
                    </Form.Group>  
                    

                    <Form.Group className="mb-3" controlId="MainObjective">
                        <Form.Label>  MainObjective </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="MainObjective" value={this.state.frontCamera.MainObjective} type="text" placeholder="Introduce   MainObjective" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="ApertureRatio">
                        <Form.Label>  ApertureRatio </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="ApertureRatio" value={this.state.frontCamera.ApertureRatio} type="text" placeholder="Introduce   ApertureRatio" />
                    </Form.Group>
                       
                    <Form.Group className="mb-3" controlId="ViewingAngel">
                        <Form.Label>   ViewingAngel </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="ViewingAngel" value={this.state.frontCamera.ViewingAngel} type="text" placeholder="Introduce   ViewingAngel" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="fullHdShooting">
                        <Form.Label>   fullHdShooting </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="fullHdShooting" value={this.state.frontCamera.fullHdShooting} type="text" placeholder="Introduce  fullHdShooting  " />
                    </Form.Group>
                         

                    <h5>CommunicationsandPorts</h5> 
                       
                    <Form.Group className="mb-3" controlId="Communcationstandarts">
                        <Form.Label>  Communcationstandarts: </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Communcationstandarts" value={this.state.CommunicationsandPorts.Communcationstandarts} type="text" placeholder="Introduce  Communcationstandarts " />
                    </Form.Group>
                      

              

                    <Form.Group className="mb-3" controlId="Communications">
                        <Form.Label>  Communications: </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Communications" value={this.state.CommunicationsandPorts.Communications} type="text" placeholder="Introduce  Communcationstandarts" />
                    </Form.Group> 


                    <Form.Group className="mb-3" controlId="ConnectionPorts">
                        <Form.Label>   ConnectionPorts: </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="ConnectionPorts" value={this.state.CommunicationsandPorts.ConnectionPorts} type="text" placeholder="Introduce  ConnectionPorts " />
                    </Form.Group>

                        
                        <h5>Functions and navigations</h5> 
                   
                    <Form.Group className="mb-3" controlId="FeaturesAndCapabilities">
                        <Form.Label>  Communications: </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="FeaturesAndCapabilities" value={this.state.FunctionAndNavigation.FeaturesAndCapabilities} type="text" placeholder="Introduce FeaturesAndCapabilities" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="Navigation">
                        <Form.Label>  Communications: </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Navigation" value={this.state.FunctionAndNavigation.Navigation} type="text" placeholder="Introduce  Navigation" />
                    </Form.Group> 

                     <h5>Power:</h5> 
                      
                    <Form.Group className="mb-3" controlId="BatteryCapacity">
                        <Form.Label>   BatteryCapacity: </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="BatteryCapacity" value={this.state.Power.BatteryCapacity} type="text" placeholder="Introduce   BatteryCapacity" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="FastChargingTechnology">
                        <Form.Label>    FastChargingTechnology: </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="FastChargingTechnology" value={this.state.Power.FastChargingTechnology} type="text" placeholder="Introduce   FastChargingTechnology" />
                    </Form.Group>
                     
                    <Form.Group className="mb-3" controlId="ChargingPower">
                        <Form.Label>   ChargingPower:  </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="ChargingPower" value={this.state.Power.ChargingPower} type="text" placeholder="Introduce   ChargingPower" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="CharginTime">
                        <Form.Label>   ChargingTime:  </Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="CharginTime" value={this.state.Power.CharginTime} type="text" placeholder="Introduce  CharginTime" />
                    </Form.Group>  

                     <h5>General </h5> 
                       
                    <Form.Group className="mb-3" controlId="LuiqidColling">
                        <Form.Label>   LuiqidColling</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="LuiqidColling" value={this.state.General.LuiqidColling} type="text" placeholder="Introduce  LuiqidColling" />
                    </Form.Group>
                      
                    <Form.Group className="mb-3" controlId="FrameCoverMaterial">
                        <Form.Label>   FrameCoverMaterial</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="FrameCoverMaterial" value={this.state.General.FrameCoverMaterial} type="text" placeholder="Introduce   FrameCoverMaterial" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="Backcover">
                        <Form.Label>    Backcover</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Backcover" value={this.state.General.Backcover} type="text" placeholder="Introduce    Backcover" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="Equipment">
                        <Form.Label>    Equipment</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Equipment" value={this.state.General.Equipment} type="text" placeholder="Introduce    Equipment" />
                    </Form.Group>
                     

                    <Form.Group className="mb-3" controlId="Dimensions">
                        <Form.Label>  Dimensions</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Dimensions" value={this.state.General.Dimensions} type="text" placeholder="Introduce    Dimensions" />
                    </Form.Group> 
               
                    <Form.Group className="mb-3" controlId="Weight">
                        <Form.Label>  Weight</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="Weight" value={this.state.General.Weight} type="text" placeholder="Introduce   Weight" />
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="oficialwebPage">
                        <Form.Label>  oficialwebPage</Form.Label>
                        <Form.Control onChange={(e) => this.handleChange(e)} name="oficialwebPage" value={this.state.General.oficialwebPage} type="text" placeholder="Official web page link" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create mobile caracteristic
                    </Button>
                </Form>
            </>
        )
    }
}