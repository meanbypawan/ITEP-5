class TestMain{
    public static void main(String args[]){
        String s = "1  2  3  4  5";

        String item[] = s.split("  ");

        int sum = 0;
        for(String element : item){
            int x = Integer.parseInt(element);
            sum = sum + x;
        }

        System.out.println("Sum : "+sum);
    }
}