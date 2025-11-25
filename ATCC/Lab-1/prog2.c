#include <stdio.h>

int main() {
    FILE *fp_in, *fp_out; 
    int ch;

    fp_out = fopen("demo2.txt", "r");
    fp_in = fopen("demo.txt", "a");

    if (fp_out == NULL || fp_in == NULL) {
        printf("Error opening file.");
        return 1;
    }

    ch = fgetc(fp_out);

    while (ch != EOF)
    {
        fputc(ch, fp_in);
        ch = fgetc(fp_out);   
    }
    
    fclose(fp_out);
    fclose(fp_in);

    printf("Successfully appended file");

    return 0;
}
