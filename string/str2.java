class Test{
    public static void main(String args[]){
        
        // Regular Expression :- . $
        String s1 = "java/is/very/simple";
        // "java" "is" "very" "simple"
        //String parts[] = s1.split("@");
        String parts[] = s1.split("/");
        for(String item : parts)
          System.out.println(item);
    
    }
}