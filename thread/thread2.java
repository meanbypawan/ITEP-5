class First extends Thread{
   public void run(){
    try{
      for(int i=1; i<=5; i++){
        System.out.println("GM....");
        Thread.sleep(3000);
      }
    }
    catch(InterruptedException e){
        e.printStackTrace();
    }  
   }
}
class Second extends Thread{
    public void run(){
     try{   
       for(int i=1; i<=5; i++){
        System.out.println("GE....");
        Thread.sleep(1700);
      } 
     }
     catch(InterruptedException e){
        e.printStackTrace();
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