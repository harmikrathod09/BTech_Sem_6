#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char tokens[100][10];
int index_pos = 0;
char lookahead[10];

void E();
void E1();
void T();
void T1();
void F();
void Match(char *t);
void Error();
void next_token();


void next_token() {
    strcpy(lookahead, tokens[index_pos++]);
}

void Match(char *t) {
    if (strcmp(lookahead, t) == 0) {
        printf("Match(%s)\n", t);
        next_token();
    } else {
        Error();
    }
}

void Error() {
    printf("Error\n");
    exit(0);
}


void F() {
    if (strcmp(lookahead, "id") == 0) {
        printf("F → id\n");
        Match("id");
    } else {
        Error();
    }
}

void T1() {
    if (strcmp(lookahead, "*") == 0) {
        printf("T' → * F T'\n");
        Match("*");
        F();
        T1();
    } else {
        printf("T' → ε\n");
    }
}

void T() {
    printf("T → F T'\n");
    F();
    T1();
}

void E1() {
    if (strcmp(lookahead, "+") == 0) {
        printf("E' → + T E'\n");
        Match("+");
        T();
        E1();
    } else {
        printf("E' → ε\n");
    }
}

void E() {
    printf("E → T E'\n");
    T();
    E1();
}


int main() {
    char input[100];
    printf("Enter input string (space-separated tokens, end with $):\n");
    fgets(input, sizeof(input), stdin);

    char *token = strtok(input, " \n");
    int i = 0;
    while (token != NULL) {
        strcpy(tokens[i++], token);
        token = strtok(NULL, " \n");
    }

    index_pos = 0;
    strcpy(lookahead, tokens[index_pos++]);

    E();

    if (strcmp(lookahead, "$") == 0) {
        printf("Parsing Successful ✅\n");
    } else {
        Error();
    }

    return 0;
}