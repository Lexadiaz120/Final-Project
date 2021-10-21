import axios from 'axios';
class NotebookService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/catalog`,
            withCredentials: true
        })
    }  
    getShops = (id) => this.instance.get(`/shops/${id}`);
    getNotebooks = () => this.instance.get("/notebooks")
    createNotebook = (name, shortdescription, shop, color) => this.instance.post("/notebooks", name, shortdescription, shop, color)   
    getOneNotebookCaracteristic = (id) => this.instance.get(`/caracteristicsnotebook/${id}`)
    CreateCaracteristics = (id, display, processor, CPU, StorageDevice, OperativeSystem, Laptopweight, image) => this.instance.post(`/caracteristicsnotebook/${id}`, { display, processor, CPU, StorageDevice, OperativeSystem, Laptopweight, image} )

  
}
export default NotebookService;
