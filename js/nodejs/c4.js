class A{
    m1(){
        console.log("A-m1()-executed...");
    }
}

class B extends A{
    m1(){
        console.log("B-m1()-executed....");
        super.m1();
    }
}

let obj = new A();
obj.m1();
