#include <stdio.h>
#include <ctype.h>

int main() {
    FILE *fp_in, *fp_out;
    int ch, prev = ' ';

    fp_in = fopen("demo.txt", "r");
    fp_out = fopen("capitalize.txt", "w");

    if (fp_in == NULL || fp_out == NULL) {
        printf("Error opening file.");
        return 1;
    }

    while ((ch = fgetc(fp_in)) != EOF) {
        if (prev == ' ' || prev == '\n' || prev == '\t') {
            ch = toupper(ch);
        }

        fputc(ch, fp_out);
        prev = ch;
    }

    fclose(fp_in);
    fclose(fp_out);

    printf("Successfully capitalized first letter of each word\n");

    return 0;
}
