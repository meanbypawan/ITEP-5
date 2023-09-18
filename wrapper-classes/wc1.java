class TestMain{
    public static void main(String args[]){
        /*
        int x  = 100;
        Integer iobj = new Integer(x);  // Boxing
        System.out.println("iobj : "+iobj);
        */
        Integer iobj2 = 100; // Auto Boxing
        System.out.println("iobj2 : "+iobj2);

   
        Float f = new Float(3.14f); // unBoxing
        float f1 = f; // Auto un-Boxing
        System.out.println("f1 : "+f1); 

        //float f2 = new Float(500.4f).floatValue();
        //System.out.println("f2 : "+f2); 
    }
}