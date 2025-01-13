//5 Create a simple event emitter class that allows registering event listeners and emitting events with data.

class evnts{

    on (data){
        this.emit(data);
    }
    Off(data){
        this.emit(data);
    }
    emit(data){
        console.log(data);
    }
}

let results = new evnts();
let clk = false;

if(clk){
    results.on("on");
}
else{
    results.Off("off");
}    
