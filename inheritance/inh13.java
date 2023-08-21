class Arithmetic{
   class Addition{
    private int a;
    private int b;
    public Addition(int a, int b){
        this.a = a;
        this.b = b;
    }
    public void add(){
        System.out.println("Addition : "+(a+b));
    }
   }
   class Subtraction{
    private int a;
    private int b;
    public Subtraction(int a, int b){
        this.a = a;
        this.b = b;
    }
    public void sub(){
        System.out.println("Subtraction : "+(a-b));
    }
   }
}

class TestMain{
    public static void main(String args[]){
       Arithmetic airthmetic = new Arithmetic();
       
       Arithmetic.Addition obj = airthmetic.new Addition(20,10);
       obj.add();       
    
       Arithmetic.Subtraction obj2 = airthmetic.new Subtraction(20,10);
       obj2.sub();
    }
}