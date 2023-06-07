class Test{
    public static void main(String args[]){
        int a,b,c;
        a = 20;
        b = 120;
        c = 25;

        int max = ( a>b && a > c) ? a : (b>c) ? b : c;
        System.out.println("Maximum : "+max);
    }
}