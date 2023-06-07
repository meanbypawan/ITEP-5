class Test{
    public static void main(String shalini[]){
      int a = 200;
      int b = 30;
      int c = 55;
      int d = 45;

      int x = (a > b) ? a : b;
      int y = (c > d) ? c : d;

      int max = (x > y) ? x : y;
      System.out.println("Maximum value : "+max);
    }
}