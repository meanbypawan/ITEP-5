/*
  Operator:-
    It is symobile which perform the operation on the operand(data)

    20 + 10
    20 and 10: operand
    + operator
    instanceOf
    ------------------------------------
    Unary (-, ++, --, ~)
    Binary( +, -, *, / ......)
    Ternery (conditional operator
    ------------------------------)
    1. Airthmetic operator (+, -, *, /, %)
    2. Realation Op (>, <, >=, <=, ==, !=)
    3. Logical  (&&, ||, !)
    4. Increment/Decrement (++ , --)
    5. Assignment (=)
    6. Bitwise (&, |, !, <<, >>, ^, ~)
    7. Conditional Op ( ? : )
    8.Shorthand (+=, -=, *=,......)
    9. intanceOf
 */   
class Test{
    public static void main(String args[]){
      System.out.println("7/2 : "+(7/2));
      System.out.println("2/7 : "+(2/7));
      System.out.println("-7/2 : "+(-7/2));
      System.out.println("7/-2 : "+(7/-2));
      System.out.println("7%2 : "+(7%2)); // 1
      System.out.println("-7%2 : "+(-7%2)); // -1
      System.out.println("7%-2 : "+(7%-2)); // 1
      System.out.println("-7%-2 : "+(-7%-2)); //-1
      System.out.println("2%7 : "+(2%7)); // 2 
      System.out.println("7.5%2 : "+(7.5%2));
      //System.out.println("7/0 : "+(7/0)); // AE
      System.out.println("7.5/0 : "+(7.5/0));
      System.out.println("-7.5/0 : "+(-7.5/0));
      //System.out.println("7%0 : "+(7%0));
      System.out.println("7.5%0 : "+(7.5%0)); // NaN
     

    }
}