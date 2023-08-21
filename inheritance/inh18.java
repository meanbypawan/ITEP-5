class Outer{
    interface I{
        void m1();
    }
}

class Child implements Outer.I{
    public void m1(){
        System.out.println("m1-called....");
    }
}
class TestMain{
    public static void main(String args[]){
        Outer.I obj = new Child();
        obj.m1();
    }
}