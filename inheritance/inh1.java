class J5{
    public void recevingCall(){
        System.out.println("Call received...");
    }
    public void rejectingCall(){
        System.out.println("Call rejected...");
    }
}
class J7 extends J5{
  public void camera(){
    System.out.println("Camera working....");
  }
}
class J11 extends J7{
    public void blueTooth(){
        System.out.println("Bluetooth connected...");
    }
}
class TestMain{
    public static void main(String args[]){
        // J5 j5 = new J5();
        // j5.recevingCall();
        // j5.rejectingCall();
        // J7 j7 = new J7();
        // j7.recevingCall();
        // j7.rejectingCall();
        // j7.camera();
        J11 j11 = new J11();
        j11.recevingCall();
        j11.rejectingCall();
        j11.camera();
        j11.blueTooth();
    }
}