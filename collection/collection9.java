import java.util.ArrayList;
import java.util.ListIterator;
class TestMain{
    public static void main(String args[]){
        ArrayList<String> al = new ArrayList<String>();
        al.add("B");
        al.add("D");
        al.add("A");
        al.add("C");
    
        ListIterator<String> lit = al.listIterator(2);
        while(lit.hasPrevious()){
           String element = lit.previous();
           System.out.println(element);
        }
       /*
        ListIterator<String> lit = al.listIterator(2);
        
        while(lit.hasNext()){
            String element = lit.next();
            System.out.println(element);
        }
       */ 
    }

}