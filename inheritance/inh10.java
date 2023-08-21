/*
   Inner class
 */
class A{
   class B{
      public void m1(){
        System.out.println("B-m1 called....");
      }
   }
   public void m2(){
     System.out.println("A-m2()....");
     m1();
   }
}

class TestMain{
    public static void main(String args[]){
         A outer = new A();
         outer.m2();
    }
}
