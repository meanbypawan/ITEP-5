class TestMain{
    public static void main(String rs[]){
       String s = "3.14f"; // only and only f/F is allowed

       float x = Float.parseFloat(s);

       System.out.println(x);

       String s2 = "2147483648";

       long i = Long.parseLong(s2);
       System.out.println(i);
    }
}