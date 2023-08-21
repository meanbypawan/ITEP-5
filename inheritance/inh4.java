interface I{
   void wish();   
}
interface Arithmetic{
    int operation(int x, int y);
}
class TestMain{
    public static void main(String args[]){
        Arithmetic obj1 = (a,b)-> a + b;
        Arithmetic obj2 = (a,b)-> a - b;
        Arithmetic obj3 = (a,b)->{
          if(a > b)
            return a;
          return b;  
        };

        System.out.println(obj1.operation(20,10));
        System.out.println(obj2.operation(20,10));
                System.out.println(obj3.operation(20,10));

        // I obj = ()->System.out.println("GM...");
        // I obj2 = ()->System.out.println("GN...");

        // obj.wish();
        // obj2.wish();
    }
}