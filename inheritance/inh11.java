class Outer{
    static{
        System.out.println("Outer Block");
    }
    class Inner{
        {
            System.out.println("Initalizer Block called...");
        }
        public void m1(){
            System.out.println("Inner -m1()");
        }
    }

    public void m2(){
        System.out.println("Outer - m2");
    }
}

class Child extends Outer{

}

class TestMain{
    public static void main(String args[]){
      Child child = new Child();
      Child.Inner ref = child.new Inner();
      child.m2();        
      ref.m1();
    }
}