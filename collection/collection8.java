import java.util.ArrayList;
import java.util.Iterator;
/*
  1. Iterator --> iterator() : Iterator (Iterable)
     a. iterator() method is available in collection so it is
        applicable on all child classes of Collection (AL, LL, Vec, Satck,
        HS, LHS, TS....)
     b. Iterator moves in forward direction only.
     
     c. Iterator itr = collectionObject.iterator();

  2. ListIterator-> listIterator() :ListIterator (List)
     a. listIterator() method is available in List collection
        so it is application on all child classes of List only
        (AL, LL, Vec, Stack)
     b. ListIterator can move in forward and backword direction both
     
     c. ListIterator lit = listObject.listIterator();
        ListIterator lit = listObject.listIterator(4);

 */
class TestMain{
    public static void main(String args[]){
        ArrayList<String> al = new ArrayList<String>();
        al.add("B");
        al.add("D");
        al.add("A");
        al.add("C");
        
        
        Iterator<String> itr = al.iterator();
        while(itr.hasNext()){
            String element = itr.next();
            System.out.println(element);
        }
        /*
        for(String element : al)
          System.out.println(element);
        */
    }

}