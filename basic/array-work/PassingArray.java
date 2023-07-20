class Test{
   public void m1(int x[]){
       for(int i=0; i<x.length; i++)
         x[i] = x[i]+1;
   }
   public int[] m2(int x[]){
      int evenArray[] = new int[x.length];
      int k=0;
      System.out.println("Inside Method m2");
      for(int i=0; i<x.length; i++)
        if(x[i]%2==0)
          evenArray[k++] = x[i];
      
      return evenArray;
   }
}
class TestMain{
    public static void main(String ars[]){
        int x[] = {10,20,30,40,50};
        Test obj = new Test();
        
        obj.m1(x);
        for(int i=0; i<x.length; i++){
            System.out.println(x[i]);
        }
        int evenArray[] = obj.m2(new int[]{1,2,3,4,5});
        for(int i=0;i<evenArray.length; i++)
          System.out.println(evenArray[i]);
    }
}