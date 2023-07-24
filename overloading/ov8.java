class Test{
    public void m1(int x, int y, int... z){
      System.out.println("x : "+x);
      System.out.println("y : "+y);
      for(int i=0; i<z.length; i++)
      System.out.println("z : "+z[i]);
    }
}

class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        obj.m1(10,20,30,40);
    }
}