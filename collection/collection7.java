import java.util.ArrayList;
import java.util.Collections;
class Customer{
    private int id;
    private String name;
    private int age;

    public Customer(int id, String name, int age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class TestMain{
    public static void main(String args[]){
        Customer c1 = new Customer(1,"A",21);
        Customer c2 = new Customer(3,"C",23);
        Customer c3 = new Customer(2,"B",22);

        ArrayList<Customer> al = new ArrayList<Customer>();
        al.add(c1);
        al.add(c2);
        al.add(c3);

        Collections.sort(al);
    }
}

