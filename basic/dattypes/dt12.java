/*
  c/c++ : char x; // 1-byte  -- 8-bit -- 2^8 --- 256
  'A'----> 65
  'B'---->66
  2. ASCII (Americal Statndard Code For Information Interchage)
     8 bit wide

  Java: --char x; // 2-byte --16bit--2^16 ---65536
  2. Unicode (16-bit hexa decimal code)
 */
class Test{
    public static void main(String args[]){
      char x = 'a';
      // x = 'A'[65 ka binary / Hexa Decimal]
      System.out.println((int)x);
    
      int y = 'A';
      System.out.println("y : "+y);

      char ch1 = 'A', ch2 = 'B';
      
      int result = ch1 + ch2;
      /*
         ch1 + ch2
         'A' + 'B'
         65 + 66
        resylt =  131
       */
      System.out.println(result+"  "+((char)result));
      System.out.println((char)200);
    }
}