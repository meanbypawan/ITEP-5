class Task{
   synchronized public void m1(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" executing m1()");
            Thread.sleep(1300);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}

class First extends Thread{
   private Task task;
   public First(Task task){
    this.task = task;
   }
   public void run(){
     task.m1();
   }   
}
class TestMain{
    public static void main(String args[]){
        Task t = new Task();
        
        First t1 = new First(t);
        First t2 = new First(t);

        t1.setName("Cheeku");
        t2.setName("Peeku");

        t1.start();
        t2.start();
    }
}