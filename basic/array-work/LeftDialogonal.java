class LeftDiagonal{
    public static void main(String args[]){
        int x[][] = {
            {1,2,3}, // 0
            {4,5,6}, // 1
            {7,8,9}  // 2
        };
        /*
           00 01 02
           10 11 12
           20 21 22
         */

        System.out.println("Given Matrix");
        for(int r=0; r<x.length; r++){
            for(int c=0; c<x[r].length; c++){
                System.out.print(" "+x[r][c]);
            }
            System.out.println();
        }
        int numberOfInteration = 0;
        /*
        for(int r=0; r<x.length; r++){
            for(int c=0; c< x[r].length; c++){
               numberOfInteration++; 
               if(r == c){
                System.out.print(x[r][c]+" ");
                break;
               } 
            }
        }
        */
        for(int r=0; r<x.length; r++)
            System.out.println(x[r][r]);
        
        System.out.println("\nTotal Number Of Iteration : "+numberOfInteration);
    }

}