class database{
    connect(){
        console.log("connceted to db");
    }
}
class  mySqlDb{
    connect(){
        console.log("Connected to mysql database");
    }
}
class  mongoDb{
    connect(){
        console.log("Connected to mongoDb database");
    }
}
class dataService{
    constructor(database){
        this.database=database;
    }
    getData(){
        this.database.connect();
        console.log(`fetchong data from  ${this.database}`);
    }
}
const mysql=new mySqlDb();
const mongo=new mongoDb();
const dataservice=new dataService(mysql);
dataservice.getData();