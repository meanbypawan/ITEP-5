class Task{
    synchronized public void m1(){
        try{
            for(int i=1;i<=5; i++){
                System.out.println(Thread.currentThread().getName()+" in m1()");
                Thread.sleep(1000);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class First extends Thread{
    Task task;
    public First(Task task){
        this.task = task;
    }
    public void run(){
      task.m1();
    }
}
class TestMain{
    public static void main(String args[]){
          Task task = new Task();
          
          First t1 = new First(task);
          First t2 = new First(task);

          t1.setName("Thread - 1");
          t2.setName("Thread - 2");

          t1.start();
          t2.start();
    }
}