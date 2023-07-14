class SecondMinMax{
    public static void main(String args[]){
        int x[] = {-2,-2,2,2,2,7,-3,-3,3,3,3,3,8,9,9,9,9};
        int min = 2147483647,secondMin = 2147483647;
        int max = -2147483648, secondMax = -2147483648; 
        for(int i=0; i< x.length; i++){
           if(min > x[i]){
              secondMin  = min;
              min = x[i]; 
           }
           else if(x[i] < secondMin && min != x[i]){
              secondMin = x[i];
           }

           if(max < x[i]){
            secondMax = max;
            max = x[i];
           }
           else if(x[i] > secondMax && max != x[i])
             secondMax = x[i];
        }
        System.out.println("Max : "+max+" Second Max : "+secondMax);
        System.out.println("Min : "+min+" Second Min : "+secondMin);
    }
}