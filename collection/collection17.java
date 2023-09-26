/*
  Iterable<--Collection<--Set<--SortedSet<--TreeSet
 */
import java.util.TreeSet;
import java.util.Comparator;
//import java.util.Comparable;
class Customer implements Comparable<Customer>{
    private int id;
    private String name;
    private int age;
    public Customer(int id, String name, int age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    public Customer(){}

    public String toString(){
        return id+"  "+name+"  "+age; 
    }
    public int getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public int getAge(){
        return age;
    }
    public int compareTo(Customer o){
        return this.id - o.id;
    }
}

class SortById implements Comparator<Customer>{
    public int compare(Customer o1, Customer o2){
        return o1.getId() - o2.getId();
    }
    
}

class SortByName implements Comparator<Customer>{
    public int compare(Customer o1 , Customer o2){
        return o1.getName().compareTo(o2.getName());
    }
}
class SortByAge implements Comparator<Customer>{

    public int compare(Customer o1 , Customer o2){
        int x =  o2.getAge() - o1.getAge();
        if(x == 0)
          return 1;
        return x;  
    }
}
class TestMain{
    public static void main(String args[]){
        //TreeSet<Customer> ts = new TreeSet<Customer>(new SortById());
        //TreeSet<Customer> ts = new TreeSet<Customer>(new SortByName()); 
        //TreeSet<Customer> ts = new TreeSet<Customer>(new SortByAge());
        TreeSet<Customer> ts = new TreeSet<Customer>();
        ts.add(new Customer(1,"A",24));
        ts.add(new Customer(2,"B",27));
        ts.add(new Customer(4,"G",23));
        ts.add(new Customer(3,"C",21));
        ts.add(new Customer(5,"E",19));
        ts.add(new Customer(7,"X",26));
        ts.add(new Customer(6,"H",25));
        ts.add(new Customer(8,"Y",25));
        for(Customer element : ts)
          System.out.println(element);
    }
}
