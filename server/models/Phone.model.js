const {model , Schema} = require('mongoose'); 

const PhoneSchema =  new Schema({ 
    mobileimg:{
        type: String,
    }, 
    mobilename: {
        type: String
    }, 
   display: {
       type: String, 
   },   
   description:{
       type: String
   }, 
    Hardwarepart: {
        OperativeSistem: String, 
        processormodel: String, 
        CPUfrequency: String, 
        corsNumber: Number, 
        GraphicProcessor: String, 
        RAM: Number, 
        BuiltMemory: String,
        memorySpecification: String, 
        MemoryCardSlot: String, 
        cartNumber: Number, 
        simType: String
   }, 
   testResults: {
        type: String
   }, 
   mainCamera: { 
       ObjectivesNumber: Number, 
       mainObjective: String, 
       ultrawidelenth: String, 
       Auxillarylens: String, 
       Macrolens: String, 
       Slowmo: String, 
       HdShooting: String, 
       imageStabilization: String, 
       Flash: String
   }, 

   frontCamera: {
       FormFactor: String, 
       MainObjective: String, 
       ApertureRatio: String, 
       ViewingAngel: String, 
       fullHdShooting: String, 
   }, 
   CommunicationsandPorts:{
       Communcationstandarts: String, 
       Communications: String, 
       ConnectionPorts: String
   }, 

   FunctionAndNavigation: {
       FeaturesAndCapabilities: String, 
       Navigation: String
   }, 
   Power: {
       BatteryCapacity: String, 
       FastChargingTechnology: String, 
       ChargingPower: String, 
       CharginTime: String
   }, 
   General: {
       LuiqidColling: String, 
       FrameCoverMaterial: String, 
       Backcover: String, 
       Equipment: String, 
       Dimensions: String , 
       Weight: String, 
       oficialwebPage: String, 
   }, 
 
}, 
{
    timestamps: true
}) 


const PhoneProduct = model("PhoneSchema", PhoneSchema);  


module.exports = PhoneProduct;