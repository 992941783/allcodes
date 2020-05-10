#include <stdio.h>
void oIf()
{
    int a,b;
    printf("输入一个数，判断是否为偶数！！\n");
    while(b=1){
        printf(">");
        scanf("%d",&a);
        if(a == 110){
            break;
        }else if(a%2==0){
            printf("是偶数\n");
        }else{
            printf("不是偶数\n");
        };
    };
}
