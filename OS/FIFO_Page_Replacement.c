#include <stdio.h>
int main()
{
    int pages[50], frames[10];
    int n, f, i, j, k, flag, page_faluts = 0;
    printf("Enter number of pages: ");
    scanf("%d", &n);
    printf("Enter page sequence");

    for (i = 0; i < n; i++)
    {
        scanf("%d", &pages[i]);
    }
    printf("Enter number of frames: ");
    scanf("%d", &f);

    for (i = 0; i < f; i++)
    {
        frames[i] = -1;
    }

    k = 0;
    for (i = 0; i < n; i++)
    {
        flag = 0;
        for (j = 0; j < f; j++)
        {
            if (frames[j] == pages[i])
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
        {
            frames[k] = pages[i];
            k = (k + 1) % f;
            page_faluts++;
        }
    }

    printf("Total page fault: %d\n", page_faluts);

    return 0;
}