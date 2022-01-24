//print fibonacci series
let n=5, n1=0,n2=1,nextterm;
console.log("fibonacci series");
for(i=1; i<= n; i++)
{
    console.log(n1);
    nextterm = n1+n2;
    n1 = n2;
    n2 = nextterm;
}