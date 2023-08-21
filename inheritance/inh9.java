/*
   Inner class
 */
class A{
   class B{
      public void m1(){
        System.out.println("B-m1 called....");
        m2();
      }
   }
   public void m2(){
     System.out.println("A-m2()....");
   }
}

class TestMain{
    public static void main(String args[]){
         A outer = new A();
         A.B inner = outer.new B();
         inner.m1();
    }
}
