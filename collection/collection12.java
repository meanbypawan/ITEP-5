import java.util.LinkedHashSet;

class TestMain{
  public static void main(String args[]){
    LinkedHashSet<Integer> hs = new LinkedHashSet<Integer>();

    hs.add(10); 
    hs.add(5);
    hs.add(20);
    hs.add(30);
    hs.add(15);
    hs.add(15);
    hs.add(15);
    //hs.add(5,3000); Error
    hs.remove(new Integer(20));
    for(Integer element : hs)
      System.out.println(element);
  }
}