import {Server} from './api/server.js';


const app = Server();

app.listen(app.get("port"),()=>{
    
    console.log(`server on port ${app.get("port")}`);

}); //ejecutar servidor por port, hacer un callback
