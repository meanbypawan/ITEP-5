import java.util.LinkedHashSet;
class TestMain{
    public static void main(String ars[]){
       LinkedHashSet<String> lhs = new LinkedHashSet<String>();
       lhs.add("B");
       lhs.add("D");
       lhs.add("A");
       lhs.add("C");
       lhs.add("F");
       lhs.add("E");
       lhs.add("A");
       lhs.add("A");

       for(String element : lhs)
         System.out.println(element);  
    }
}