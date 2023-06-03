/*
  Integer  ----->(byte,short,int,long)
  Floating-Point->(float,double)
  Char---------->(char)
  Boolean------->(boolean)

       No Typecasting
  ------------------------------------>
    1         2          4         8
   byte ---- short ----- int ---- long
 <-------------------------------------
         Typecasting required
 */
class Test{
    public static void main(String args[]){
        int x;
        x = 2/7;
        System.out.println(x);
    }
}