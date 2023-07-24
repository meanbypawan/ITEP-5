class Test{
    // Constructor Chaining
    private Test(){
        this(100);
        System.out.println("Default constructor called...");
    }
    private Test(int x){
      this(50,40);  
      System.out.println("int constructor called...");
    }
    private Test(int x, int y){
      System.out.println("int int constructor called...");
    }
}
class TestMain{
    public static void main(String args[]){
        new Test();
    }
}