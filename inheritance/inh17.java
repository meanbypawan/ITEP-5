class Outer{
    public void m1(){
        System.out.println("Outer - m1 called...");
    }
    class Inner{
        public Inner(){
            System.out.println("Inner class const called...");
        }
        public void m2(){
            System.out.println("Inner - m2 called...");
        }
    }
}

class Child extends Outer.Inner{
   public Child(){
      new Outer().super();
   }
}

class TestMain{
    public static void main(String args[]){
        new Child().m2();
    }
}