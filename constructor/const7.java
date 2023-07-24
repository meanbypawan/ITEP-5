// POJO -> Plain Old Java Object
class Addition{
    private int a, b;
    public Addition(int a, int b){
        this.a = a;
        this.b = b;
    }
    public Addition(){
    }
    public void setA(int a){
        this.a = a;
    }
    public void setB(int b){
        this.b = b;
    }
    public int getA(){
        return a;
    }
    public int getB(){
        return b;
    }
    public void add(){
        System.out.println("Add : "+(a+b));
    }
    public void sub(){
        System.out.println("Sub : "+(a-b));
    }
}
class TestMain{
    public static void main(String args[]){
        java.util.Scanner sc = new java.util.Scanner(System.in);
        while(true){
        System.out.println("Press 1 for addition");
        System.out.println("Press 2 for subtraction");
        System.out.println("Press 3 for change a");
        System.out.println("Press 4 for chane b");
        System.out.println("Press 5 for exit");
        System.out.println("Enter Your choice");
        int choice = sc.nextInt();
        Addition obj = new Addition();// obj-->a=0,b=0
        System.out.println("Enter 2 number");
        a = sc.nextInt();
        b = sc.nextInt();
        obj.setA(a);
        obj.setB(b);
        switch(choice){
            case 1: 
                    obj.add();
                    break;
            case 2: System.out.println("Enter 2 number");
                    a = sc.nextInt();
                    b = sc.nextInt();
                    obj.setA(a);
                    obj.setB(b);
                    obj.sub();
                    break; 
            case 3: System.out.println("Enter value of a");
                     a = sc.nextInt();
                    obj.setA(a);
                    break;
            case 4: System.out.println("Enter value of b");
                     b = sc.nextInt();
                     obj.setB(b);
                     break;
            case 5: System.exit(0);
            default : System.out.println("Invalid choice plz re-enter");                                
        }
        }
    }
}