package day11;

public class hello {
    public static void main(String[] args) {
        int a = 10;
        int b = 10;
        add(a, b);
        add(a);
    }

    public static void add(int a, int b) {
        System.out.println(a + b);
    }

    public static void add(int a) {
        System.out.println(a);
    }
}
