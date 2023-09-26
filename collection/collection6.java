import java.util.ArrayList;
import java.util.Collections;
class TestMain{
    public static void main(String args[]){
       
        ArrayList<Integer> al = new ArrayList<Integer>();
        
        al.add(1);
        al.add(4);
        al.add(2);
        al.add(3);

        Collections.sort(al); // sort(List)
        for(Integer element : al) 
          System.out.println(element);
        
        /*
        ArrayList<String> al = new ArrayList<String>();
        
        al.add("A");
        al.add("Peeku");
        al.add("C");
        al.add("D");

        Collections.sort(al); // sort(List)
        for(String element : al) 
          System.out.println(element);
        */
    }
}