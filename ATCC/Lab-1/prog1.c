#include <stdio.h>

int main()
{
    FILE *fp;
    int chars = 0, newLine = 0, space = 0, tab = 0;
    int ch;
    char filename[] = "demo.txt";

    fp = fopen(filename, "r");

    if (fp == NULL) {
        printf("Unable to open file.\n");
        return 1;
    }

    ch = fgetc(fp);

    while (ch != EOF)
    {
        if (ch == '\t')
            tab++;
        else if (ch == '\n')
            newLine++;
        else if (ch == ' ')
            space++;
        else
            chars++;

        ch = fgetc(fp);
    }
    
    printf("Tabs: %d\n", tab);
    printf("Lines: %d\n", newLine);
    printf("Spaces: %d\n", space);
    printf("Characters: %d\n", chars);

    fclose(fp);
    return 0;
}
