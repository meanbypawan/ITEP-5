import java.util.ArrayList;
class TestMain{
    public static void main(String ars[]){
      ArrayList<String> al1 = new ArrayList<String>();
    
      al1.add("Cheeku");
      al1.add("B");
      al1.add("C");

      ArrayList<String> al2 = new ArrayList<String>();
      al2.add("Cheeku");
      al2.add("D");
      al2.add("E");

      ArrayList<String> al3 = new ArrayList<String>();
      al3.add("Cheeku");
      al3.add("F");
      al3.add("G");


      al1.addAll(al2); //
      al1.addAll(al3);

      System.out.println(al1);

      //al1.removeAll(al2);
      al1.retainAll(al2);
      
      System.out.println(al1);
    }
}