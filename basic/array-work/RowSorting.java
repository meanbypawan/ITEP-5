class RowSorting{
    public static void main(String args[]){
        int x[][] = {
            {8,7,3},
            {9,5,12},
            {13,15,4}
        };
        /*
           3 7 8
           5 9 12
           4 13 15
         */
        for(int r=0; r<x.length; r++){
           //int arr[] = x[r];
           for(int i=0; i<x[r].length-1; i++){
            for(int j=i+1; j<x[r].length; j++){
                if(x[r][i] >x[r][j]){
                    x[r][i] =x[r][i]+ x[r][j];
                    x[r][j] = x[r][i] - x[r][j];
                    x[r][i] = x[r][i] - x[r][j];
                }
            }
           }       
        }

        System.out.println("Output Matrix.....");
        for(int r=0; r<x.length; r++){
            for(int c=0; c<x[r].length; c++){
                System.out.print(" "+x[r][c]);
            }
            System.out.println();
        }
    }
}