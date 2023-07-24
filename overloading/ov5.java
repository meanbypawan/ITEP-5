class Test{
    // public void m1(int x){
    //     System.out.println("Integer version..."+x);
    // }
    public void m1(char x){
        System.out.println("Character version..."+x);
    }
}

class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        obj.m1(97); // 97 integer
        
    }
}