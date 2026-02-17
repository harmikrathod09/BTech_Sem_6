#include <stdio.h>
#include <ctype.h>
#include <string.h>

#define MAX 100

char stack[MAX];
int top = -1;

void push(char item) {
    if (top >= MAX - 1)
        printf("Stack Overflow\n");
    else
        stack[++top] = item;
}

char pop() {
    if (top < 0) {
        printf("Stack Underflow\n");
        return -1;
    } else {
        return stack[top--];
    }
}

int precedence(char symbol) {
    switch(symbol) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
        default:
            return 0;
    }
}

void infixToPostfix(char infix[], char postfix[]) {
    int i, j = 0;
    char item;
    char x;

    push('(');
    strcat(infix, ")");

    for (i = 0; i < strlen(infix); i++) {
        item = infix[i];

        if (isalnum(item)) {
            postfix[j++] = item;
        }
        else if (item == '(') {
            push(item);
        }
        else if (item == ')') {
            while ((x = pop()) != '(') {
                postfix[j++] = x;
            }
        }
        else {
            while (precedence(stack[top]) >= precedence(item)) {
                postfix[j++] = pop();
            }
            push(item);
        }
    }

    postfix[j] = '\0';
}

int main() {
    char infix[MAX], postfix[MAX];

    printf("Enter Infix Expression: ");
    scanf("%s", infix);

    infixToPostfix(infix, postfix);

    printf("Postfix Expression: %s\n", postfix);

    return 0;
}
