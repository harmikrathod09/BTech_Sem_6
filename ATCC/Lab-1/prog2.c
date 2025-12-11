#include <stdio.h>
#include <ctype.h>


int main()
{
    FILE *fpr = fopen("read.txt", "r");
    FILE *fpw = fopen("temp.txt", "w");

    char c, p;
    while (c = fgetc(fpr) != EOF)
    {
        if (c == '/')
        {
            c = fgetc(fpr);
            if (c == '/')
            {
                do
                {
                    c = fgetc(fpr);
                } while (c != '\n');
                printf("Single line comments");
            }
            else if (c == '*')
            {
                do
                {
                    c = fgetc(fpr);
                    p = fgetc(fpr);
                } while (c != '*' && p != '/');
                printf("Multiline comments");
            }
            else
            {
                fputc('/', fpw);
                fputc(c, fpw);
            }
        }
        else
        {
            fputc(c, fpw);
        }
        fclose(fpr);
        fclose(fpw);

        return 0;
    }
}