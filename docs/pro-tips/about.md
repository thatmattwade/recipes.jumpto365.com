---
sidebar_position: 399
---

# About
Hi, I'm Niels ...

![](2022-09-29-21-06-03.png)

Make the taste just right 

## Experimental stuff

### Hexatown
[Hexatown](../devops/hexatown/get-started.md)


### Fx code highlighting
```xlsx
//Create a collection
ClearCollect(myTestScores31a,
{FullName:"David Jones", Age: 32, TestScore: 78},
{FullName:"Anne Lisbon", Age: 45, TestScore: 92},
{FullName:"Penelope Parra", Age: 26, TestScore: 56}
);

//Create a Row
Set(
    myTestScores31b,
    {FullName:"Harold Reimer", Age: 50, TestScore: 65}
);

//Insert a new row into collection code
ClearCollect(mySolution31,myTestScores31a);
Collect(mySolution31,myTestScores31b);

//Alternate solution
ClearCollect(mySolution31,myTestScores31a);
Patch(

```