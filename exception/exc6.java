/*
  throws :-
    1. It is used decleare the exception.
    2. Used with the method declarator and constructor
    3. throws propogate the exception to the calling methods
 
   Types Of Exception
    a. Checked 
    b. Unchecked
 
 */
class IBE extends Exception{ // Checked
  public IBE(){
     super("Insufficient Balance Exception");
  }
}
class ICICI{
    public void withdrawal(int amount) throws IBE{
     if(amount > 10000)
       throw new IBE();
     System.out.println("Withdrawal Success....");
    }
}
class TestMain{
    public static void main(String args[]) throws IBE{
        ICICI obj = new ICICI();
        obj.withdrawal(1000);
    }
}