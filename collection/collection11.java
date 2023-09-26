import java.util.HashSet;
/*
                  13          13            
  Iteratble<---Collection<---Set
 */
class TestMain{
  public static void main(String args[]){
    HashSet<Integer> hs = new HashSet<Integer>();

    hs.add(10); 
    hs.add(5);
    hs.add(20);
    hs.add(30);
    hs.add(15);
    hs.add(15);
    hs.add(15);
    //hs.add(4,5000);
    for(Integer element : hs)
      System.out.println(element);
  }
}