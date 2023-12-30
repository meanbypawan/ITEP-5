class Addition{
   
    constructor(a,b){
        console.log("consturcotr called......");
        this.a = a;
        this.b = b;
    }
    
    add(){
        console.log("Addition : "+(this.a + this.b));
    }
}


let obj = new Addition(20,10); // obj--> a:20, b:10
obj.add();
console.log(obj.a);