#include <stdbool.h>
#include <stdio.h>

int main() {
    int n = 29;
    int cnt = 0;

    // If number is less than/equal to 1,
    // it is not prime
    if (n <= 1)
        printf("%d is NOT prime", n);
    else {

        /* Count the all divisors of 
        given number */
        for (int i = 1; i <= n; i++) {

            // Check n is divided by
            // i or not
            if (n % i == 0)
                cnt++;
        }

        /* If n is divisible by more than 2 numbers 
        then it is not prime*/
        if (cnt > 2)
            printf("%d is NOT prime", n);

        // else it is prime
        else
            printf("%d is prime", n);
    }
    return 0;
}