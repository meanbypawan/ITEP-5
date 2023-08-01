class Distance{
    private int km,meter;
    public Distance(int km, int meter){
        this.km = km;
        this.meter = meter;
    }
    public Distance(){}
    public Distance addDistance(Distance d){
        Distance temp = new Distance();
        temp.km = this.km + d.km;
        temp.meter = this.meter + d.meter;
        if(temp.meter >=1000){
            temp.km++;
            temp.meter -= 1000;
        }
        return temp;
    }
    public void addDistance(Distance temp1, Distance temp2){
         this.km = temp1.km + temp2.km;
         this.meter = temp1.meter + temp2.meter;
         if(this.meter >=1000){
            this.km++;
            this.meter -= 1000;
         }
    }
    public void display(){
        System.out.println(km+" km "+meter+" meter");
    }
}
class TestMain{
    public static void main(String args[]){
        Distance d1 = new Distance(7,600);
        Distance d2 = new Distance(2,700);
        d1.display();
        d2.display();
        /*
        Distance d3 = d1.addDistance(d2);
        d3.display();
        */
       Distance d3 = new Distance(); // d3->km=0,meter=0
       d3.addDistance(d1,d2);
       d3.display();
    }
}