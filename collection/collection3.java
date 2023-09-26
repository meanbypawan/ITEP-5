import java.util.ArrayList;
/*
    IndexOutOfBoundsException (Collection)
      ArrayInexOutOfBoundsException (Array)
      StringIndexOutOfBoundsException (String)
 */
class TestMain{
    public static void main(String args[]){
        ArrayList<Integer> al = new ArrayList<Integer>(10);
        
        al.add(10);
        al.add(20);
        al.add(30);

        al.add(9,400);

        System.out.println(al);     
    }
    /*
      public void add(int index, Integer value){
        if(index > this.size())
          throw new IndexOutOfBoundsExceotion();
        else{
            
        }  
      }
     */
}