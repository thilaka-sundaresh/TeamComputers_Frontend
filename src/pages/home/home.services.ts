import { Injectable,forwardRef} from "@angular/core";
import { Http, Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HomeService{
    createOrderRequest:any;
    getUserOrdersRequest:any;
    loginRequest:any;
    userId:any;

    constructor(private http:Http){}

    public getAllInventories(){
        const headers= new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/TeamComputers/order/getAllInventories',{headers: headers})
        .map(res=>res.json());
    }

    public createOrder(itemId,Quantity){
        this.userId=localStorage.getItem("userID");
        this.createOrderRequest='{	"itemId":"'+itemId+'",	"userId":"'+ this.userId+'",	"numberOfItems":'+Quantity+'}';
        console.log("createOrderRequest--> "+this.createOrderRequest);
        
        const headers= new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/TeamComputers/order/createOrder',this.createOrderRequest,{headers: headers})
        .map(res=>res.json());
    }

    public getUserOrders(userId){
        this.getUserOrdersRequest='{"userId":"'+userId+'"}';
        console.log("getUserOrdersRequest--> "+this.getUserOrdersRequest);
        
        const headers= new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/TeamComputers/order/getUserOrders',this.getUserOrdersRequest,{headers: headers})
        .map(res=>res.json());
    }

    public login(userName){
       
        this.loginRequest='{"username":"'+userName+'"}';
        console.log("login--> "+this.loginRequest);
        
        const headers= new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/TeamComputers/order/login',this.loginRequest,{headers: headers})
        .map(res=>res.json());
    }
}