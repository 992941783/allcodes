#include <stdio.H>
#include <string.h>
int a(){
    for(int i=1; i<=4; i++){
        for(int j=1; j<=4; j++){
            for(int k=1; k<=4; k++){
                for(int l=1; l<=4; l++){
                    printf("%d\n",i*1000+j*100+k*10+l);
                }
            }
        }
    }
}
