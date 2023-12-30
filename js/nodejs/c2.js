function Message(){
    this.m1 = function(){
        console.log("m1() is executed...");
    }

    this.m2 = function(){
        console.log("m2() is executed....");
    }
    this.m3 = function(){
        console.log("m3() is executed....");
    }
}


let obj = new Message();

obj.m1();
obj.m2();
obj.m3();