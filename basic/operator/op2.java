/*
  Operator :- 5
 */
class Test{
    public static void main(String arg[]){
       int x = 3457;

       int r = x%10;
       x = x/10;
       System.out.println("Lucky Number : "+r);
       System.out.println("Last Digit Removed : "+x);
    }
}