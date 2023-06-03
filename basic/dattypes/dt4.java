class Test{
    public static void main(String args[]){
        // -128 to 127
        byte x = 127;
        //x = (byte)(x + 1); 
        x = (byte)(x+300000); 
        System.out.println(x);
    }
}