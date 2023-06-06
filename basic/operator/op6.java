class Test{
    public static void main(String args[]){
       /* 
        int a,b,c,d;
        a = b = c = d = 10;
        boolean x = (a == b) == (c == d);
        System.out.println(x);
       */
      int x=5;
      boolean y;
      y = x++ > 5;
      /*
         y = x > 5
         x= x + 1
       */
      System.out.println("x : "+x);
      System.out.println("y : "+y);
    }
}