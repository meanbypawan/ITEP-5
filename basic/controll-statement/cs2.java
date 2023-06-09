import java.util.Scanner;
class Test{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 1st value");
        int a = sc.nextInt();

        System.out.println("Enter 2nd value");
        int b = sc.nextInt();

        System.out.println("Enter 3rd value");
        int c = sc.nextInt();

        // a,b,c :--- Relational (Binary)
        if(a > b && a > c)
          System.out.println(a+ " is greater");
        else{
            if(b > c)
              System.out.println(b+" is greater");
            else
              System.out.println(c+" is greater..");              
        }         
    }
}




