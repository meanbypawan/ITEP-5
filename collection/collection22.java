import java.util.*;
class TestMain{
    public static void main(String args[]){
        TreeMap<String,ArrayList<String>> tm = new TreeMap<String,ArrayList<String>>();
        
        ArrayList<String> mpList = new ArrayList<String>();
        mpList.add("Indore");
        mpList.add("Jabalpur");
        mpList.add("Ratlam");

        ArrayList<String> upList = new ArrayList<String>();
        upList.add("Agra");
        upList.add("Lucknow");
        upList.add("Vrindavan");

        ArrayList<String> mhList = new ArrayList<String>();
        mhList.add("Pune");
        mhList.add("Mumbai");
    
        tm.put("MP",mpList);
        tm.put("UP",upList);
        tm.put("MH",mhList);

        for(Map.Entry<String,ArrayList<String>> e :tm.entrySet()){
            System.out.println(e.getKey()+"\n-------------------------");
            ArrayList<String> cityList = e.getValue();
            for(String city: cityList)
              System.out.println(city);
        }
    }
}