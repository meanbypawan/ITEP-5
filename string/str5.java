/*
   package java.lang;
   class StringBuffer{
     String msg;
     public StringBuffer(String msg){
        this.msg = msg;
     }
     public String toString(){
        return msg;
     }
   }
 */
class TestMain{
    public static void main(String args[]){
        StringBuffer sb1 = new StringBuffer("Hello");
        StringBuffer sb2 = new StringBuffer("Hello");
        
        System.out.println(sb1.toString().equals(sb2.toString()));
        // System.out.println(sb1.equals(sb2)); // false
        // System.out.println(sb1 == sb2);
        // StringBuffer sb3 = sb2;
        // System.out.println(sb3 == sb2);
    }
}