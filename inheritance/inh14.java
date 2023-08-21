interface I{
    void wish();
}
class Outer{
    class A{
        public void m1(){
            System.out.println("m1() executed...");
        }
    }
    class B extends A implements I{
       public void wish(){
        System.out.println("GM...");
       }
    }
}
class TestMain{
    public static void main(String args[]){
        I obj = new Outer().new B();
        obj.wish();
    }
}