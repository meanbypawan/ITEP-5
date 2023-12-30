class A{
   constructor(){
     console.log("A-constructor...");
   }
}

class B extends A{
   constructor(){
    super();
    console.log("B-constructor.....");
    //super();
   }
}


new B();