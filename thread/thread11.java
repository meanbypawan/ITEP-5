class First implements Runnable{
    public void run(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println("First Thread");
            Thread.sleep(1000);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}

class Second implements Runnable{
    public void run(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println("Second Thread");
            Thread.sleep(1000);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}


class TestMain{
    public static void main(String args[]) throws InterruptedException{
         Runnable r1 = new First();
         Runnable r2 = new Second();
         new Thread(r1).start();
         new Thread(r2).start();
         for(int i=1; i<=5; i++){
            System.out.println("Main Thread");
            Thread.sleep(1000);
         }
    }
}