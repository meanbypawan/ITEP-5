class BubbleSorting{
    public static void main(String args[]){
        int x[] = {100,10,5,9,12,4,50,60};
        //int n = x.length-1;
        for(int i=0; i<x.length; i++){
          for(int j=0;j < x.length-i-1; j++){
             if(x[j] > x[j+1]){
                  x[j] = x[j] + x[j+1];
                  x[j+1] = x[j] - x[j+1];
                  x[j] = x[j]  - x[j+1];
             }
          }
        }
        for(int i=0; i<x.length; i++)
          System.out.println(x[i]);
    } 
}