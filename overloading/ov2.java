class Test{
    public void m1(float x){
        System.out.println("Float version.....");
    }
    public void m1(int x){
        System.out.println("Int version......");
    }
}

class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        obj.m1(10); // Compiler m1--> 1--->int
    }
}