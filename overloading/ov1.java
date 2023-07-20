class Test{
    public void m1(){
        System.out.println("Default version of m1");
    }
    public void m1(int x){
        System.out.println("Int version of m1"); 
    }
    public void m1(float x){
        System.out.println("Float version of m1");
    }
}

class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        obj.m1();
        obj.m1(100);
        obj.m1(3.4f);  
    }
}