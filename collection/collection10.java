/*
   Collection<----List<----LinkedList

   ArrayList v/s LinkedList

   ArrayList
    a. DA
   ---------------------------------
   LinkedList
    a. Doubly Linked List
 */
import java.util.LinkedList;
class TestMain{
   public static void main(String args[]){
    LinkedList<Integer> ll = new LinkedList<Integer>();
    ll.add(100);
    ll.add(50);
    ll.add(70);
    ll.add(90);

    for(Integer element : ll)
      System.out.println(element);
   }
}