import java.util.HashMap;
import java.util.Set;
import java.util.Map;
class TestMain{
  public static void main(String ags[]){
     
     HashMap<Integer,String> hm = new HashMap<Integer,String>();
     hm.put(1001,"A");
     hm.put(1002,"B");
     hm.put(1003,"C");
     hm.put(1004,"D"); // 1004 ---> "D"
a     hm.put(1004,"E"); // 1004 --->"E"
     hm.put(1005,"A");
     hm.put(null,"F");
     hm.put(null,"G");
     
     for(Map.Entry<Integer,String> e : hm.entrySet()){
       System.out.println(e.getKey()+"  "+e.getValue());
     } 
  }

}






















