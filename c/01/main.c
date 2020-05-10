#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a=0;
    float sum=0;
    printf("输入用电度数:");
    scanf("%d",&(a));
    if(a>=0 && a<=200){
        sum = a*0.6;
    }else if(a>=201 && a<=350){
        sum = a*0.65;
    }else if(a>350){
        sum = a*1;
    };
    printf("费用时%.1f元",sum);
}
