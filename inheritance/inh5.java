interface I{
    void m1();
    default void wish(){
        System.out.println("Gm...");
    }
}
// class Test implements I{
//    public void wish(){
//     System.out.println("GN....");
//    }
// }
class TestMain{
    public static void main(String args[]){
       I obj = ()->{System.out.println("m1-called...");};
       obj.m1();
       obj.wish();
    }
}