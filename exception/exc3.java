class Test{
    public int m1(){
       try{
         /*
           --
           --
          */
         //int c = 10/0;
         System.out.println("Inside Try..");
       }
       catch(Exception e){
          System.out.println("Exception Caught...");
       }
       finally{
         System.out.println("Finally Executed...");
       }
       return 400;
    }
}
class TestMain{
   public static void main(String argss[]){
     Test obj = new Test();
     int x = obj.m1();
     System.out.println("Result : "+x);
   }
}