#include <stdio.h>

int main()
{
    int pages[50], frames[10], time[10];
    int n, f, i, j, pos, page_faults = 0, counter = 0;

    printf("Enter number of pages: ");
    scanf("%d", &n);

    printf("Enter page sequence: ");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &pages[i]);
    }

    printf("Enter number of frames: ");
    scanf("%d", &f);

    for (i = 0; i < f; i++)
    {
        frames[i] = -1;
        time[i] = 0;
    }

    for (i = 0; i < n; i++)
    {
        int found = 0;

        for (j = 0; j < f; j++)
        {
            if (frames[j] == pages[i])
            {
                counter++;
                time[j] = counter;
                found = 1;
                break;
            }
        }

        if (found == 0)
        {
            page_faults++;
            pos = 0;

            for (j = 0; j < f; j++)
            {
                if (time[j] < time[pos])
                {
                    pos = j;
                }
            }

            frames[pos] = pages[i];
            counter++;
            time[pos] = counter;
        }
    }

    printf("Total page faults: %d\n", page_faults);

    return 0;
}