class Customer{
    Integer id;
    String name;
    Integer age;
    /*
      consturcor

      getter & setter
     */
}

class TestMain{
    public static void main(String args[]){
      Customer c = new Customer(); // c:- id:100,name:"ABC",age:0
      c.setId(100);
      c.setName("ABC");
      //c.setAge(24);

      // Hibernate customer (id,name,age) --> 100  ABC null
    }
}