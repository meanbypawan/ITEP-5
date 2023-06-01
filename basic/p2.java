/*
  javac p2.java
     compilation
        GreetUser.class
 ---------------------------------------------------
  java  GreetUser
    jvm GreetUser.main()
        Gm friends...      
        Ge friend...
        Gn friends...   
*/
class GreetUser{
  public static void main(String args[]){
      System.out.println("<html><body></body></html>");
      System.out.println("Ge friends...");
      System.out.println("Gn friends...");
      System.out.print("123");
      System.out.print("456\n");
      System.out.printf("Wow        \n         Friends.....");
      System.err.println("It is an error message....");     
      System.out.println("1\t2\t3");
      System.out.println("1234567890");
      System.out.println("\tA");
  }  
}
