%option noyywrap
%{
#include <stdio.h>

int charCount = 0, lineCount = 0, wordCount = 0;
%}

%%
\n              { charCount++,lineCount++; }
[a-zA-Z0-9]+    { wordCount++,charCount += yyleng; }
.               { charCount++; }
%%

void main() {
    yyin=fopen("input.txt","r");
    yylex();
    printf("Characters: %d\n", charCount);
    printf("Words: %d\n", wordCount + 1);
    printf("Lines: %d\n", lineCount);
}
