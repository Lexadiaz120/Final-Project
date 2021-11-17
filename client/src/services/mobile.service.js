import axios from 'axios';
class MobileService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/catalog`,
            withCredentials: true
        })
    } 
    
    createComments = (id, title, description, user) => this.instance.post(`/comments/${id}`, { title, description, user });  
    deleteComments = (id) => this.instance.delete(`/delete/${id}`);
    getFavorites = () => this.instance.get("/favs")
    addtoFavorites = (id) => this.instance.post(`/favs/${id}`)   
    createRating = (rating) => this.instance.post('/rating', rating)
    getMobiles = () => this.instance.get("/mobiles");
    createMobile = (name, shortdescription, shop, color, price, image) => this.instance.post("/mobiles", name, shortdescription, shop, color, price, image);
    getOneMobileCaracteristic = (id) => this.instance.get(`/caracteristicsmobile/${id}`)
    createMobileCaracteristic = (id, display, description, Hardwarepart, mainCamera, frontCamera, CommunicationsandPorts,
        FunctionAndNavigation, Power, General, mobilename, mobileimg) => this.instance.post(`/caracteristicsmobile/${id}`, {
            display, description, Hardwarepart, mainCamera, frontCamera, CommunicationsandPorts,
            FunctionAndNavigation, Power, General, mobileimg, mobilename
        });
    getComments = (id) => this.instance.get(`/mobilecomments/${id}`)
    getShops = (id) => this.instance.get(`/shops/${id}`);


}
export default MobileService;






