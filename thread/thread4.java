class CalculateSum extends Thread{
   public void run(){
      try{
        System.out.println("Calculating Sum : Please Wait");
        Thread.sleep(5000);
        int sum = 0;
        for(int i=1; i<=10; i++){
            sum = sum + i;
        }
        System.out.println("Sum : "+sum);
      }
      catch(Exception e){
        e.printStackTrace();
      }
   }
}

class Factorial extends Thread{
   int n;
   public Factorial(int n){
     this.n = n;
   }  
   public void run(){
    try{
      Thread.sleep(3000);
      System.out.println("Calculating Factorial : please wait");
      int result = 1;
      for(int i=1; i<=n; i++){
        result = result * i;
      }
      System.out.println("Factorail : "+result);
    }
    catch(Exception e){
        e.printStackTrace();
    }  
   }  
}

class TestMain{
   public static void main(String args[]){
      CalculateSum sumThread = new CalculateSum();
      Factorial factorialThread = new Factorial(5); 
   
      sumThread.start();
      factorialThread.start();
   }
}









