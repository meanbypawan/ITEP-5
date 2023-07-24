class Test{
   public Test(){
    System.out.println("Default constructor called...");
   } 
   public Test(int x){
      System.out.println("Single int version");
   }
   public Test(float x){
    System.out.println("Single float version");
   }
   public Test(int x, int y){
    System.out.println("Int-Int version");
   }
}

class TestMain{
    public static void main(String args[]){
       Test ob1 = new Test(100);
    }
}