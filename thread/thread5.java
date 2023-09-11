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
class TestMain{
    public static void main(String args[]) throws InterruptedException{
        System.out.println("Main Started...");
        First t1 = new First();
        t1.start();
        t1.join(5000); // 
        for(int i=1; i<=5; i++){
            System.out.println("Main-Thread...");
            Thread.sleep(1000);
        }
        System.out.println("Main Stopped....");
    }
}
