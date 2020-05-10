#include <stdio.h>
int main()
{
    char a,b[10];
    printf("输入班级: ");
    scanf("%c",&a);
    printf("输入姓名：");
    scanf("%s",&b);
    printf("欢迎%c班%s同学",a,b);
}
