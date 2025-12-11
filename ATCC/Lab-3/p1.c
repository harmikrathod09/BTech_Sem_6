#include <stdio.h>

int main() {
    FILE *fpr = fopen("read.txt", "r");
    FILE *fpw = fopen("temp.txt", "w");

    int c, next;

    while ((c = fgetc(fpr)) != EOF) {

        if (c == '/') {
            next = fgetc(fpr);

            if (next == '/') {
                while ((c = fgetc(fpr)) != EOF && c != '\n');
                fputc('\n', fpw); 
                printf("Single-line comment removed\n");
                continue;
            }

            else if (next == '*') {
                int prev = 0;
                while ((c = fgetc(fpr)) != EOF) {
                    if (prev == '*' && c == '/')
                        break;
                    prev = c;
                }
                printf("Multi-line comment removed\n");
                continue;
            }

            else {
                fputc(c, fpw);
                ungetc(next, fpr);
                continue;
            }
        }

        fputc(c, fpw);
    }

    fclose(fpr);
    fclose(fpw);

    return 0;
}
