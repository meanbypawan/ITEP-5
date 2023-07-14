class MinimumElementOfRow{
    public static void main(String args[]){
        int x[] = {2,2,2,7,3,8,9,9,9,9};
        int min=0,secondMin=0;
        int max=0,secondMax=0;
         for(int i=0; i<x.length-1; i++){
            for(int j=i+1; j<x.length; j++){
                if(x[i] > x[j]){
                    x[i] =x[i]+ x[j];
                    x[j] = x[i] - x[j];
                    x[i] = x[i] - x[j];
                }
            }
         }   
         min = x[0];
         max = x[x.length-1];
         boolean minFlag=true,maxFlag = true;
         for(int i=1; i<x.length ; i++){
             if(minFlag && x[i]!=min){
                secondMin = x[i];
                minFlag = false;
             }
             if(maxFlag && x[x.length-i]!=max){
                secondMax = x[x.length-i];
                maxFlag = false;
             }
            if(!(minFlag && maxFlag))
              break;
         }
         System.out.println("Minimum : "+min+" second Minimum : "+secondMin);
         System.out.println("Maximum : "+max+" second Maximum : "+secondMax);
    }
}