#include <stdio.h>
//比大小
int max(int num1, int num2){
    return num1>num2 ? num1:num2;
}
//求两数和
int sum(int num1,int num2){
    int c;
    c = num1 +num2;
    return c;
}
//x-y的累加和
int acc(int num1,int num2){
    int c = 0;
    for(int i = num1; i < num2; i++){
        c += i;
    }
    return c;
}
