/*
   public interface Runnable{
      public void run();
   }
 */
class TestMain{
    public static void main(String args[]){
       Runnable r1 = ()->{
           try{
             for(int i=1; i<=5; i++){
                System.out.println("Hello..");
                Thread.sleep(1000);
             }
           }
           catch(Exception e){
            e.printStackTrace();
           }
       };

       Runnable r2 = ()->{
           try{
             for(int i=1; i<=5; i++){
                System.out.println("World..");
                Thread.sleep(1400);
             }
           }
           catch(Exception e){
            e.printStackTrace();
           }
       };

       new Thread(r1).start(); // r1 :- run
       new Thread(r2).start(); // 
    }
}