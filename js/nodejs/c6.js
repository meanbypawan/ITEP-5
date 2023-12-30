class AA{
   static BB = class{
     m1(){
        console.log("BB-m1()called....");
     }
   }
}

let obj = new AA();

new AA.BB().m1();