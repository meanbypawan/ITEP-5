import java.util.ArrayList;
class TestMain{
    public static void main(String args[]){
        ArrayList<Integer> al = new ArrayList<Integer>(10);

        al.add(10);
        al.add(20);
        al.add(15);

        al.add(40); 
        al.add(50);

        al.add(60);

        System.out.println(al);

        System.out.println("Size : "+al.size());

        System.out.println(al.contains(55));   
        System.out.println(al);
        al.add(3,500);
        System.out.println(al);
    
        al.add(9,600);
        System.out.println(al);
    }
    /*
      add(int index, Integer value){}
     */
}