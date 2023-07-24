class Test{
    // Constructor Chaining
    public Test(){
        this(20,10);
        System.out.println("Default constructor called...");
    }
    public Test(int x){
      System.out.println("int constructor called...");
    }
    public Test(int x, int y){
      System.out.println("int int constructor called...");
    }
}
class TestMain{
    public static void main(String args[]){
        new Test();
    }
}