#include <stdio.h>
#include <ctype.h>
#include <string.h>

int n;                  
char prod[20][20];      
char first[20][20];     
int firstCount[20];     

void findFirst(char, int);

int main() {
    int i;
    char ch;

    printf("Enter number of productions: ");
    scanf("%d", &n);

    printf("Enter productions (use # for epsilon):\n");
    for (i = 0; i < n; i++) {
        scanf("%s", prod[i]);
        firstCount[i] = 0;
    }

    for (i = 0; i < n; i++) {
        findFirst(prod[i][0], i);
    }

    printf("\nFIRST sets:\n");
    for (i = 0; i < n; i++) {
        printf("FIRST(%c) = { ", prod[i][0]);
        for (int j = 0; j < firstCount[i]; j++) {
            printf("%c ", first[i][j]);
        }
        printf("}\n");
    }

    return 0;
}

void findFirst(char c, int index) {
    int i, j;

    if (!isupper(c)) {
        first[index][firstCount[index]++] = c;
        return;
    }

    for (i = 0; i < n; i++) {
        if (prod[i][0] == c) {
            if (prod[i][2] == '#') {
                first[index][firstCount[index]++] = '#';
            } else {
                for (j = 2; prod[i][j] != '\0'; j++) {
                    if (!isupper(prod[i][j])) {
                        first[index][firstCount[index]++] = prod[i][j];
                        break;
                    } else {
                        findFirst(prod[i][j], index);
                        break;
                    }
                }
            }
        }
    }
}
