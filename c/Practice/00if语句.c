#include <stdio.h>
void oIf()
{
    int a,b;
    printf("����һ�������ж��Ƿ�Ϊż������\n");
    while(b=1){
        printf(">");
        scanf("%d",&a);
        if(a == 110){
            break;
        }else if(a%2==0){
            printf("��ż��\n");
        }else{
            printf("����ż��\n");
        };
    };
}
