interface I{
    void m1();
    static void wish(){
        System.out.println("Gm...");
    }
}

class TestMain{
    public static void main(String ags[]){
       I obj = (x)->System.out.println("m1-called...");
       obj.m1();
       I.wish();
    }
}