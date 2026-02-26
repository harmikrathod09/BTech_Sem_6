#include<stdio.h>
int main(){
    int n,i=0,remain;
    int br[20],rt[20],wt[20],p[20],tq;
    float avg_wt=0, avg_tat=0;
    
    printf("Enter number of processes: ");
    scanf("%d",&n);

    remain=n;
    printf("Enter burst time for each process:\n");
    for(i=0;i<n;i++){
        printf("Process %d: ",i+1);
        scanf("%d",&br[i]);
        rt[i] = br[i];
    }

    printf("Enter time quantum: ");
    scanf("%d",&tq);

    while (remain!=0)
    {
        for(i=0;i<n;i++){
            if(rt[i]>0){
                if(rt[i]>tq){
                    rt[i] -= tq;
                    wt[i] += tq;
                }
                else{
                    wt[i] += rt[i];
                    rt[i] = 0;
                    remain--;
                }
            }
        }
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