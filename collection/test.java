class Addition<T extends Number>{
    private T a;
    private T b;
    public Addition(T a, T b){
        this.a = a;
        this.b = b;
    }

    public void add(){
        System.out.println("Addition : "+(a.intValue()+b.intValue()));
    }
    public void add(T obj){}
    // public T getA(){
    //     if (a instanceof Integer)
    //       return (Integer)a;
    // }
    // public T getB(){
    //     if(b instanceof Integer)
    //       return (Integer)b;
    // }
}
class TestMain{
    public static void main(String args[]){
        Addition<Integer> obj = new Addition<Integer>(20,10); // obj: a=20,b=10(int)
        obj.add();
    }
}


