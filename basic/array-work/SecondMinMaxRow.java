class SecondMinMaxRow{
    public static void main(String args[]){
        int x[][] = {
            {1,1,1,1}, // 4
            {2,2,2,2}, // 8
            {3,3,3,-3},// 6
            {3,3,3,1} // 10
        };
        int min = 2147483647,secondMin = 2147483647;
        int max = -2147483648, secondMax = -2147483648;
        int sum,secondMinRowIndex=0,secondMaxRowIndex=0; 
        int sumArray[] = new int[x.length];
        for(int r=0; r<x.length; r++){
            sum = 0;
            for(int c=0; c<x[r].length; c++){
               sum = sum + x[r][c];         
            }
            sumArray[r] = sum;  
        }
        int priviousMinIndex = 0, priviousMaxIndex=0;
        for(int i=0; i< sumArray.length; i++){
           if(min > sumArray[i]){
              secondMin  = min;
              min = sumArray[i]; 
              secondMinRowIndex = priviousMinIndex;
              priviousMinIndex = i;
           }
           else if(sumArray[i] < secondMin && min != sumArray[i]){
              secondMin = sumArray[i];
              secondMinRowIndex = i;
              secondMinRowIndex = priviousMinIndex;
              priviousMinIndex = i;
           }
           if(max < sumArray[i]){
            secondMax = max;
            max = sumArray[i];
            secondMaxRowIndex = priviousMaxIndex;
            priviousMaxIndex = i;
           }
           else if(sumArray[i] > secondMax && max != sumArray[i]){
             secondMax = sumArray[i];
             secondMaxRowIndex = priviousMaxIndex;
             priviousMaxIndex = i;
           }  
        }
        System.out.println("Minimum : "+secondMinRowIndex+"  "+priviousMinIndex);
        System.out.println("MAXIMUM : "+secondMaxRowIndex+"  "+priviousMaxIndex);
    }
}