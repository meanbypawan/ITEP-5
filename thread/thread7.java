class First extends Thread{
    public void run(){
        try{
           for(int i=1; i<=5; i++){
             System.out.println("First-Thread");
             Thread.sleep(500);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class Second extends Thread{
    public void run(){
        try{
           for(int i=1; i<=5; i++){
             System.out.println("Second-Thread");
             Thread.sleep(110);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class Third extends Thread{
    public void run(){
        try{
           for(int i=1; i<=5; i++){
             System.out.println("Third-Thread");
             Thread.sleep(400);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class TestMain{
    public static void main(String args[]){
      try{  
        System.out.println("Main Started...");
        First t1 = new First();
        Second t2 = new Second();
        Third t3 = new Third();
        
        t1.start();
        t1.join(2000);

       
        t3.start();
        t3.join(1000);

        for(int i=1; i<=5; i++){
            System.out.println("Main-Thread...");
            Thread.sleep(1000);
        }
        System.out.println("Main Stopped....");


        t2.start();
      }
      catch(Exception e){
        e.printStackTrace();
      }  
    }
}
