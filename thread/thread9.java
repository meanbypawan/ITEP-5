class First extends Thread{
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
class Second extends Thread{
    public void run(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println("Second Thread");
            Thread.sleep(1500);
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
            System.out.println("Third Thread");
            Thread.sleep(1700);
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
        First t1 = new First();
        Second t2 = new Second();
        Third t3 = new Third();
    
        t1.setPriority(2); // priority : 2

        t1.setPriority(1); // priority : 1
        System.out.println(t1.getPriority());
        t2.setPriority(5);
        t3.setPriority(11);

        t1.start();
        t2.start();
        t3.start();
      }
      catch(IllegalArgumentException e){
        e.printStackTrace();
      } 
    }
}
