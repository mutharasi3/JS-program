//print factorial series
let i,j,n=2,sum=0,fact=1;
for(i=1; i<=n; i++)
{
    fact=1;
    for(j=1; j<=i+1; j++)
    fact= fact*j;
    sum = sum+i/fact;
    
}
    console.log("sum of series",sum);
