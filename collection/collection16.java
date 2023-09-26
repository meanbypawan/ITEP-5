/*
  Iterable<--Collection<--Set<--SortedSet<--TreeSet
 */
import java.util.TreeSet;
class TestMain{
    public static void main(String args[]){
        TreeSet<Integer> ts = new TreeSet<Integer>();

        ts.add(10);
        ts.add(20);
        ts.add(10);
        ts.add(50);
        ts.add(40);
        ts.add(35);
        for(Integer element : ts)
          System.out.println(element);
    }
}
