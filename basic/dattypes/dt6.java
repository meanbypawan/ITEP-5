/*
  int --4 byte --- 32 bit
  -2^31 to 2^31-1
  -2147483648 to 2147483647

  byte x = 127;   ---> incoimpatible type:-loss conversion
  short x = 32767;--> incompatible type:- loss conversion
 */
class Test{
    public static void main(String args[]){
       int x = 2147483647;
       x = x + 1; // x = (int)(x+1)
       System.out.println("x : "+x);
    }
}