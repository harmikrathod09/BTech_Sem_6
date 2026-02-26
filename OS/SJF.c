#include<stdio.h>
int main(){
    int n,i;
    int br[20],wt[20],p[20];
    float avg_wt=0, avg_tat=0;

    printf("Enter number of processes: ");
    scanf("%d",&n);

    printf("Enter burst time for each process:\n");
    for(i=0;i<n;i++){
        printf("Process %d: ",i+1);
        scanf("%d",&br[i]);
        p[i] = i+1; 
    }

    for(i=0;i<n-1;i++){
        for(int j=0;j<n-i-1;j++){
            if(br[j]>br[j+1]){
                int temp = br[j];
                br[j] = br[j+1];
                br[j+1] = temp;

                temp = p[j];
                p[j] = p[j+1];
                p[j+1] = temp;
            }
        }
    }

    wt[0] = 0;
    for(i=1;i<n;i++){
        wt[i] = wt[i-1] + br[i-1];
    }

    printf("\nProcess: ");
    for(i=0;i<n;i++){
        int tat = br[i] + wt[i];
        avg_wt += wt[i];
        avg_tat += tat;
        printf("%d, ", p[i]);
    }
    printf("\nAverage Waiting Time: %.2f", avg_wt/n);
    printf("\nAverage Turnaround Time: %.2f", avg_tat/n);
}