abstract class A{
    public abstract void m1();
    public void m2(){
        System.out.println("m2-called.....");
    }
}
class B{
    public void wish(){
        System.out.println("GM....");
        A obj = new A(){
            public void m1(){
                System.out.println("m1-called...");
            }
        };
        obj.m1();
    }
}
class TestMain{
    public static void main(String args[]){
        // A obj = new A(){
        //     public void m1(){
        //         System.out.println("m1-called....");
        //     }

        // };
        B obj2 = new B();
        // obj.m1();
        // obj.m2();
        obj2.wish();
    }
}