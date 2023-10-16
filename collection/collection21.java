import java.util.*;
class TestMain{
    public static void main(String args[]){
        TreeMap<Integer,String> tm = new TreeMap<Integer,String>();
        tm.put(1001,"A");
        tm.put(1006,"B");
        tm.put(1002,"C");
        tm.put(1004,"F");
        tm.put(1005,"G");
        tm.put(1003,"E");
        tm.put(1007,"D");
        tm.put(null,"H");
        for(Map.Entry<Integer,String> e : tm.entrySet())
          System.out.println(e.getKey()+"  "+e.getValue());
    }
}