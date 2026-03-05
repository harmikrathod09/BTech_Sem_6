#include <stdio.h>

int main()
{
    int pages[50], frames[10];
    int n, f, i, j, k, pos, page_faults = 0;

    printf("Enter number of pages: ");
    scanf("%d", &n);

    printf("Enter page sequence: ");
    for (i = 0; i < n; i++)
        scanf("%d", &pages[i]);

    printf("Enter number of frames: ");
    scanf("%d", &f);

    for (i = 0; i < f; i++)
        frames[i] = -1;

    for (i = 0; i < n; i++)
    {
        int found = 0;

        for (j = 0; j < f; j++)
        {
            if (frames[j] == pages[i])
            {
                found = 1;
                break;
            }
        }

        if (!found)
        {
            page_faults++;

            int farthest = i, index = -1;

            for (j = 0; j < f; j++)
            {
                for (k = i + 1; k < n; k++)
                {
                    if (frames[j] == pages[k])
                    {
                        if (k > farthest)
                        {
                            farthest = k;
                            index = j;
                        }
                        break;
                    }
                }

                if (k == n)
                {
                    index = j;
                    break;
                }
            }

            if (index == -1)
                index = 0;

            frames[index] = pages[i];
        }
    }

    printf("Total Page Faults: %d\n", page_faults);

    return 0;
}