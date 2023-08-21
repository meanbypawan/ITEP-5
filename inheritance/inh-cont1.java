class A{
 /* 
  public A(){
    System.out.println("A-default...");
  }
  */
  public A(String x){
    System.out.println("A-parameter....");
  }
}
class B extends A{
   public B(){
    super("Hello");
    System.out.println("B-default....");
   }
   public B(int x){
    super("Hello...");
    System.out.println("B-parameter....");
   }
}

class TestMain{
    public static void main(String args[]){
        new B();
    }
}