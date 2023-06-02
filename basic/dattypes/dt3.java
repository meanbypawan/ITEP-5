/*
  possible lossy conversion from int to byte
*/
class Test{
   public static void main(String args[])
   {
     byte a,b;
     //int c;
     byte c;
     a = 20;
     b = 10;
     c = (byte)(a + b);
     /*
       process of converting one type of value into the another type
       is called type casting
     */
     System.out.println("Result : "+c);
   }
}
