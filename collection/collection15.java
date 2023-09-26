import java.util.LinkedHashSet;
class Customer{
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
    public int hashCode(){
       //System.out.println("hashCode()-called..."); 
       return id;        
    }
    public boolean equals(Object o){
       Customer c = (Customer)o;
       return this.id == c.id && this.name.equals(c.name);
    }
}

class TestMain{
   public static void main(String args[]){
    LinkedHashSet<Customer> lhs = new LinkedHashSet<Customer>();
    lhs.add(new Customer(1,"A",24));
    lhs.add(new Customer(2,"B",27));
    lhs.add(new Customer(3,"D",23));
    lhs.add(new Customer(4,"C",21));
    lhs.add(new Customer(5,"E",19));
    lhs.add(new Customer(1,"H",26));
    lhs.add(new Customer(1,"H",25));
   
    for(Customer c : lhs)
      System.out.println(c);
   }
}