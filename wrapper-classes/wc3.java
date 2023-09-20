class TestMain{
    public static void main(String args[]){
        // primitive --> String
        
        /*
        int x = 500;
        Integer iobj = x; // Auto-Boxing
        String s = iobj.toString();

        System.out.println(s);
       */
    
       /*
       int x = 500;
       String s =  Integer.toString(x);
       System.out.println(s);
       */

       int x = 500;
       String s = ""+x;     
       System.out.println(s);
    }
}