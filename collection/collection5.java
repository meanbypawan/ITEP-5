import java.util.ArrayList;
class TestMain{
    public static void main(String ars[]){
        ArrayList<Integer> al = new ArrayList<Integer>();
        al.add(4); // 0
        al.add(1); // 1
        al.add(5); // 2
        al.add(9); // 3
        al.add(3); // 4
        al.add(2); // 5
        al.add(7); // 6
        al.add(8); // 7
        al.add(3); // 8
        al.add(3); // 9
        System.out.println(al);
        al.remove(new Integer(3));
        System.out.println(al); 
    }
}