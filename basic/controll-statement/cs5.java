/*
   WAP to enter the basic salary of an employee if basic salary
   is greatern then 10000 then hra=10%, ta=5% and da = 3% of basic
   salary is given to the employee otherwise hra = 5% and ta = 3%
   of basic salary is givent to the employee. Calculate
   gross salary of an employee. 
 */
class Test{
    public static void main(String args[]){
      java.util.Scanner sc = new java.util.Scanner(System.in);

      System.out.println("Enter Basic Salary of An Employee..");
      int basicSalary = sc.nextInt();
      
      if(basicSalary >= 10000){
        float hra = (basicSalary*10)/100.0f;
        float ta = (basicSalary*5)/100.0f;
        float da = (basicSalary*3)/100.0f;
        float gs = basicSalary + hra + ta + da;
        System.out.println("HRA : "+hra);
        System.out.println("TA : "+ta);
        System.out.println("DA : "+da);
        System.out.println("Gross Salary : "+gs);
      }
      else{
        float hra = (basicSalary*5)/100.0f;
        float ta = (basicSalary*3)/100.0f;
        float gs = basicSalary + hra + ta;
        System.out.println("HRA : "+hra);
        System.out.println("TA : "+ta);
        System.out.println("Gross Salary : "+gs);
      }
    }
}