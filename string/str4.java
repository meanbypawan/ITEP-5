class Message{
    private String msg;
    public Message(String msg){
        this.msg = msg;
    }
    public String toString(){
        return msg;
    }
}
class TestMain{
    public static void main(String args[]){
        String s1 = new String("Cheeku");
        StringBuffer sb1 = new StringBuffer("Peeku");
        Message obj = new Message("Reenku");
        Message obj2 = new Message("Bla dfafd fdfdfdfd");
        System.out.println("s1 : "+s1); // s1.toString()
        System.out.println("sb1 : "+sb1); // sb1.toString()
        System.out.println("obj : "+obj); // obj.toString()
        System.out.println("obj2 : "+obj2);
    }
}