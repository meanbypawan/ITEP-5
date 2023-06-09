/*
   n
   n > 0 :---- +ve
   n < 0 :-----ve
   n==0  : zero
 */
class Test{
    public static void main(String args[]){
      java.util.Scanner sc = new java.util.Scanner(System.in);
      System.out.println("Enter Integer Number");
      int n = sc.nextInt();
      if(n > 0)
       System.out.println("+ve");
      else if(n < 0)
             System.out.println("-ve");
           else
             System.out.println("Neither +ve Nor -ve");       
    }
}