class Test{
   public Test(){
     this(100);
   }
   public Test(int x){
      this();
   }
}
class TestMain{
    public static void main(String args[]){
        new Test();
    }
}