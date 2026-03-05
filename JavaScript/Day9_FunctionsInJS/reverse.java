class reverse {
    public static void main(String[] args) {
        int n = 1234;
        int rev = 0;
        for (; n > 0; n = n / 10) {
            int ld = n % 10;
            // System.err.println(ld);
            rev = (rev * 10) + ld;
            // System.out.println(rev);
        }
        System.out.println(rev);

    }
}