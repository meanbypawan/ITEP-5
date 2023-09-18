class Task{
    synchronized public void producingData(){
       try{
         System.out.println(Thread.currentThread().getName()+" got a lock and producting Data");
         for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" producing Data");
            Thread.sleep(1500);
         }
         notify();
       }
       catch(Exception e){
        e.printStackTrace();
       }
    }

    synchronized public void consumingData(){
      try{
         System.out.println(Thread.currentThread().getName()+ "got a lock and placing order to producer");
         Thread.sleep(1000);
         System.out.println(Thread.currentThread().getName()+" placed the order");
         Thread.sleep(500);
         System.out.println("Lock released ! "+Thread.currentThread().getName()+" is wating for Data");
         wait();//  
         for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" consuming Data");
            Thread.sleep(1500);
         }
       }
       catch(Exception e){
        e.printStackTrace();
       }
    }
}

class Producer extends Thread{
    Task task;
    public Producer(Task task){
        this.task = task;
    }
    public void run(){
        task.producingData();
    }
}

class Consumer extends Thread{
    Task task;
    public Consumer(Task task){
        this.task = task;
    }
    public void run(){
       task.consumingData();
    }
}

class TestMain{
    public static void main(String args[]) throws InterruptedException{
        Task task = new Task();
        Consumer c = new Consumer(task); 
        Producer p = new Producer(task);
        c.setName("Consumer ");
        p.setName("Producer ");

        c.start();
        c.join(1000);
        p.start();
    }
}