class RightDiagonal{
    public static void main(String args[]){
        int x[][] = {
            {1,2,3,100},
            {4,5,200,6},
            {7,300,8,9},
            {400,3,8,9}
        };
        /*
           00 01 02
           10 11 12
           20 21 22

           02 11 20 -> 3 5 7
         */

        for(int r=0; r<x.length; r++){
            for(int c=0; c< x.length; c++){
                 System.out.print("  "+x[r][c]);
            }
            System.out.println();
        }
        /*
        for(int r=0; r<x.length; r++){
            for(int c=0; c< x.length; c++){
                if((r+c)==x.length-1)
                 System.out.print("  "+x[r][c]);
            }
        }
        System.out.println();
        */
       for(int r=0; r<x.length; r++){
          System.out.print("  "+x[r][x.length-r-1]);
       }
       System.out.println();
    }
}