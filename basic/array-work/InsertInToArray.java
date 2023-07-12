import java.util.Scanner;
class InsertInToArray{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Array Size");
      int n = sc.nextInt();
      int x[] = new int[n+1];
      for(int i=0; i<n; i++){
        System.out.println("Enter "+(i+1)+" element");
        x[i] = sc.nextInt();
      }
      System.out.println("Given Array");
      for(int i=0; i<n; i++)
        System.out.print(" "+x[i]);
      System.out.println("----------------------------------------------");

      System.out.println("Enter Position and Element to be insert");
      int pos = sc.nextInt();
      int ele = sc.nextInt();

      for(int i = n-1; i>=pos-1; i--){
          x[i+1] = x[i];
      }  
      System.out.println("After Down Shifting...");
      x[pos-1] = ele;
      n = n + 1;
      for(int i=0; i<n; i++)
        System.out.print(" "+x[i]);
      System.out.println("----------------------------------------------");
    }
}