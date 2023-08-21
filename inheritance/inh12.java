class Outer{
    static class Inner{
        {
            System.out.println("Initalizer called...");
        }
        static{
            System.out.println("Inner Block");
        }
        public void m1(){
            System.out.println("m1-called....");
        }
    }
}

class TestMain{
    public static void main(String args[]){
        Outer.Inner ref = new Outer.Inner();
        ref.m1();
    }
}