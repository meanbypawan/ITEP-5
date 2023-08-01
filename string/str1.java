class Test{
    public int countLetter(String s,char x){
        int counter = 0;
        for(int i=0; i < s.length(); i++){
            char ch = s.charAt(i);
            if(x == ch)
              counter++;
        }
        return counter;
    }
    public static void main(String args[]){
        // int x = "hello".length();
        // System.out.println("Length : "+x);

        String s1 = "hello";
        String s2 = s1.toUpperCase();
        String s3 = "HELLO";
        System.out.println(s2 == s3);

        //           01234567890123456789
        String s4 = "     InfoBeans Foundation       ";
        char x = s4.charAt(3);
        System.out.println("Chat at 3rd index : "+x);
    
        //int index = s4.indexOf("a");
        int index = s4.lastIndexOf("a"); // -1
        System.out.println("index : "+index);
     
        System.out.println("@"+s4+"@");
        String s5 = s4.trim();
        System.out.println("@"+s5+"@");

        int counter = new Test().countLetter(s5,'a');
        System.out.println(counter);
        //           01234567890123456789012345678901234567890
        String s6 = "Information Technology Excellence Program";
        String s7 = s6.substring(5,11);
        System.out.println(s7);
    }
}