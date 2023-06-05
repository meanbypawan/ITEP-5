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
        int a = 20; // Decimal Interger
        int b = 027; // Octal Integer
        int c = 0x14;// Hexa Decimal 
        System.out.println("a : "+a);
        System.out.println("b : "+b);
        System.out.println("c : "+c);
    }
}