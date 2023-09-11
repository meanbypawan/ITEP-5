class First extends Thread{
   public void run(){
      for(int i=1; i<=5; i++){
        System.out.println("GM....");
      }
   }
}
class Second extends Thread{
    public void run(){
       for(int i=1; i<=5; i++){
        System.out.println("GE....");
      } 
    }
}
class TestMain{
    public static void main(String args[]){
        First t1 = new First(); // t1:- thread
        Second t2 = new Second();

        t1.start(); // t1 : Runnable
        t2.start(); // t2 : Runnable
    }
}