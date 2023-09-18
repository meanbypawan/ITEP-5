class Task{
    synchronized public void producingData(){
       try{
         System.out.println(Thread.currentThread().getName()+" got a lock and producting Data");
         for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" producing Data");
            Thread.sleep(1500);
         }
         notifyAll();
       }
       catch(Exception e){
        e.printStackTrace();
       }
    }

    synchronized public void consumingData(){
      try{
         System.out.println(Thread.currentThread().getName()+ "got a lock and placing order to producer");
         Thread.sleep(3000);
         System.out.println(Thread.currentThread().getName()+" placed the order");
         Thread.sleep(3000);
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
        Consumer c1 = new Consumer(task);
        Consumer c2 = new Consumer(task);
        Consumer c3 = new Consumer(task);
        Consumer c4 = new Consumer(task);

        Producer p = new Producer(task);
        c1.setName("Consumer-1 ");
        c2.setName("Consumer-2 ");
        c3.setName("Consumer-3 ");
        c4.setName("Consumer-4 ");
        
        p.setName("Producer ");

        c1.start();
        c1.join(10000);
        
        c2.start();
        c2.join(10000);
        
        c3.start();
        c3.join(10000);
        
        c4.start();
        c4.join(10000);
        
        
        p.start();
    }
}