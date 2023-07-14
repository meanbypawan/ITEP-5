class LowerTraingle{
    public static void main(String args[]){
        int x[][] = {
            {1,2,3},
            {4,5,6},
            {7,8,9}
        };
        /*
           00 01 02 03
           10 11 12 13
           20 21 22 23
           30 31 32 33

           10
           20 21
           30 31 32
           -------------
           01 02 03
              12 13
                 23
         */
         for(int r=0; r<x.length; r++){
            for(int c=0; c<x[r].length; c++){
                if(r==c || r > c)
                  continue;
                System.out.print(" "+x[r][c]);  
            }
            System.out.println();
         }
    }
}