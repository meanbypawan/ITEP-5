/*
  Map :- Whenever we have to represent group of <Key,Value> pair
  as a single unit.
  Collection (add,size, contains, remove, clear........)

  Map<----HashMap<---LinkedHashMap
  Map<---SortedSet<----NavigableMap<----TreeMap
  Map<---Hastable<---Properties
 
 LinkedHashSet<Integer> lhs = new LinkedHashSet<Integer>();

 lhs.add(100);

 public void add(Integer value){
   Map<Integer,Object> map = new HashMap<Integer,Object>();
   map.put(value,PRESENT)
 }
 <1001,"A"> ----> Entry
 interface Map{

     interface Entery{

     }
 }
 */
import java.util.HashMap;
import java.util.Set;
import java.util.Map;
class TestMain{
  public static void main(String ags[]){
     
     HashMap<Integer,String> hm = new HashMap<Integer,String>();
     hm.put(1001,"A");
     hm.put(1002,"B");
     hm.put(1003,"C");
     hm.put(1004,"D");
     
     Set<Map.Entry<Integer,String>> s =  hm.entrySet();
  
     for(Map.Entry<Integer,String> e : s){
       System.out.println(e.getKey()+"  "+e.getValue());
     } 
  }

}






















