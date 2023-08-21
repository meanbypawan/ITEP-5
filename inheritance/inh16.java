class Outer{
    public void m1(){
        System.out.println("Outer - m1 called...");
    }
    static class Inner{
        public void m2(){
            System.out.println("Inner - m2 called...");
        }
    }
}

class Child extends Outer.Inner{

}

class TestMain{
    public static void main(String args[]){
        new Child().m2();
    }
}