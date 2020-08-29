public class toh{
    public static void tower_of_hanoi(String src, String dest, String help, int n){
        if(n==0){
            return;
        }

        tower_of_hanoi(src, help, dest, n-1);
        System.out.println("Move "+ n + " th disk from " + src  + " to " + dest);
        tower_of_hanoi(help, src, dest, n-1);
    }
    public static void main(String[] args) {
        tower_of_hanoi("A", "B", "C", 4);
    }
}