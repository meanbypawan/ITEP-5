/*
   DRY (Donot Repeat Yourself)
   KISS (Kepp it Simple & Short)
 */
class Test{
    public static void main(String args[]){
      java.util.Scanner sc = new java.util.Scanner(System.in);

      System.out.println("Enter Basic Salary of An Employee..");
      int basicSalary = sc.nextInt();
      float hra=0,ta=0,da=0,gs;
      
      if(basicSalary >= 10000){
        hra = (basicSalary*10)/100.0f;
        ta = (basicSalary*5)/100.0f;
        da = (basicSalary*3)/100.0f;
      }
      else{
        hra = (basicSalary*5)/100.0f;
        ta = (basicSalary*3)/100.0f;
      }

      gs = basicSalary + hra + ta + da;
      System.out.println("HRA : "+hra);
      System.out.println("TA : "+ta);
      if(da!=0)
        System.out.println("DA : "+da);
      System.out.println("Gross Salary : "+gs);
      
    }
}