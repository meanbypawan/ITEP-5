class First extends Thread{
    public void run(){
        try{
           for(int i=1; i<=5; i++){
             System.out.println("First-Thread");
             Thread.sleep(3000);
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
             Thread.sleep(1100);
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
             Thread.sleep(1500);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class TestMain{
    public static void main(String args[]) throws InterruptedException{
        System.out.println("Main Started...");
        First t1 = new First();
        Second t2 = new Second();
        Third t3 = new Third();
        
        t1.start();
        t2.start(); 
        t1.join(); // main stopped
        t3.start();
        for(int i=1; i<=5; i++){
            System.out.println("Main-Thread...");
            Thread.sleep(1000);
        }
        System.out.println("Main Stopped....");
    }
}
