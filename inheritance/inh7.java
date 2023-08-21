interface I{
   default void m1(){
    System.out.println("I----m1--called....");
   }
}
class Test implements I{
    public void m1(){
        System.out.println("Test-m1=--called....");
        super.m1();
    }
}

class TestMain{
    public static void main(String args[]){
      I obj = new Test();
      obj.m1();
    }
}