%option noyywrap
%{
#include <stdio.h>
%}

%%
\/\/.*\n { printf("It is a single-line comment.\n"); }
\/\*(.*\n)*.*\*\/   { printf("It is a multi-line comment.\n"); }
%%

int main()
{
    yyin=fopen("prime.c","r");
    yylex();
    return 0;
}