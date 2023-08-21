interface I{
    abstract class Inner{
        public void m1(){
            System.out.println("m1---");
        }
        abstract void m2();
    }
}

class TestMain{
    public static void main(String args[]){
       I.Inner obj = new I.Inner(){
           public void m2(){
            System.out.println("m2-called...");
           }
       };
       obj.m1();
       obj.m2();
    }
}