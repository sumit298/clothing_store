public class power{
    public static int Power(int x, int n){
        if(n==0){
            return 1;
        }
        
        int ans = Power(x, n/2);
        if(n%2!=0){
            return ans*ans*x;
        }
        else{
            return ans*ans;
        }
        
    }
    
    
    public static void main(String args[]){
        int answer = Power(4,5);
        System.out.println(answer);
    }
}