#include <stdio.h>
//�ȴ�С
int max(int num1, int num2){
    return num1>num2 ? num1:num2;
}
//��������
int sum(int num1,int num2){
    int c;
    c = num1 +num2;
    return c;
}
//x-y���ۼӺ�
int acc(int num1,int num2){
    int c = 0;
    for(int i = num1; i < num2; i++){
        c += i;
    }
    return c;
}
