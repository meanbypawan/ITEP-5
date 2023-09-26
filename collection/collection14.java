import java.util.LinkedHashSet;
class TestMain{
    public static void main(String ars[]){
       LinkedHashSet<StringBuffer> lhs = new LinkedHashSet<StringBuffer>();
       lhs.add(new StringBuffer("B"));
       lhs.add(new StringBuffer("D"));
       lhs.add(new StringBuffer("A"));
       lhs.add(new StringBuffer("C"));
       lhs.add(new StringBuffer("F"));
       lhs.add(new StringBuffer("E"));
       lhs.add(new StringBuffer("A"));
       lhs.add(new StringBuffer("A"));

       for(StringBuffer element : lhs)
         System.out.println(element);  
    }
}