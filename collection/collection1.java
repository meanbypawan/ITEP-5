/*
  In Java each and eveny collection class is generic by default.
  Collection :-
    a. With Type safety
    b. Without type safety
  
  Generic class
*/
import java.util.ArrayList;
class TestMain{
    public static void main(String args[]){
      /*
      ArrayList al = new ArrayList(); // IC :- 10
      al.add(100); // 0
      al.add("Hello");// 1
      al.add(true);
      al.add(false);

      System.out.println(al);
      */
     ArrayList<Integer> al = new ArrayList<Integer>();
     al.add(10);
     al.add(30);
     al.add(40);
     
     al.add("Hello...");
     System.out.println(al);
    }
    /*
    public boolean add(Object o){}

    public boolean add(Integer o){}

    public boolean add(Float o){}
    */
}