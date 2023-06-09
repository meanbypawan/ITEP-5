import java.util.Scanner;
class Test{
    public static void main(String args[]){
        int age;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Age in years");
        age = sc.nextInt();
        if(age >=18)
          System.out.println("You are Eligible For Voting..");
        else
         System.out.println("Not Eligible For Voting...");  

    }
}