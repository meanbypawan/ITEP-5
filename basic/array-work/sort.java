class ArraySorting{
    public static void main(String args[]){
        int x[] = {10,5,9,12,4,-100,-101};
        for(int i=0; i<x.length-1; i++){
            for(int j=i+1; j<x.length; j++){
                if(x[i]>x[j]){
                    x[i] =x[i] ^ x[j];
                    x[j] = x[i] ^ x[j];
                    x[i] = x[i] ^ x[j];
                }
            }
        }
        System.out.println("Sorted Array");
        for(int i=0; i<x.length; i++)
          System.out.println(x[i]);
    }
}