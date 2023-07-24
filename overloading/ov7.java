class Test{
    public void m1(double... x){
      for(int i=0; i<x.length; i++)
        System.out.println(x[i]);
    }
}

class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        double x[] = {1.1,2.2,3.3};
        obj.m1(x);
    }
}