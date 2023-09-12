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

class TestMain{
    public static void main(String args[]){

        First t3 = new First();
       
        Thread.currentThread().setPriority(9);
        First t1 = new First();

       //t1.setPriority(Thread.NORM_PRIORITY);
       //System.out.println("Before : "+t1.getPriority());
    
       Thread.currentThread().setPriority(10);
       First t2 = new First();
       
       System.out.println(" T1: "+t1.getPriority());
       System.out.println(" T2 : "+t2.getPriority());
       System.out.println(" T3 : "+t3.getPriority());
    }
}





