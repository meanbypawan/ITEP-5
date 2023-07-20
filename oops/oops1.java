import java.util.Scanner;
/*
   access-modifier return-type functionname(arg11, arg2....){

   }
 */
class Addition{
    public int add(int a, int b){
        int c = a + b;
        return c;
    }
}

class TestMain{
    public static void main(String rgs[]){
      /*
        ---
        ---
       */
      int a=10,b=5;
      int result = new Addition().add(a,b);
      System.out.println("Result : "+result);
    }
}