#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int sum=1;
int f1(int,int,int);
int main()
{
    /* int a,b,sum;
    scanf("%d,%d",&a,&b);
    sum=Add(a,b);
    printf("%d\n",sum); */;
    s(2);
}

int f1(int num1,int num2,int num3){
    int max;
    max = num1 > num2 ? num1 : num2;
    max = max > num3 ? max : num3;
    return max;
}

int Add(int x,int y){
    int s=0;
    s=x+y;
    return s;
}
/* Ô²Ãæ»ý */
float s(float re){
    const float PI = 3.1415926;
    return re*re*PI;
}

