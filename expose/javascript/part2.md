1. The code prints 3 since the for loop increments i until it is not less than 3. It is accessible at line 12 since it has function scope.  
2. It is printed as 150. Since it is a var it is accessible at line 13 so it prints(150). This is because after the last iteration discountedPrice is set to 300*0.5=150.  
3. It is printed as 150. Since finalPrice is a var it is accessible at line 14. After the last iteration of the for loop it is set to 150.  
4. It returns [50,100,150]. Since it returns the prices array rounded and discoutned by 0.50  
5. Error .Since is is a let variable it is only accessible in the for loop from lines 6-10 then at line 12 i is not defined.  
6. Error. Since discoutnedprice is a let variable it is only accessible in the for loop from lines 7-10 so at line 13 it is not defined.
7. 150 is printed. finalPrice is also a let variable but it is defined in the function block so it is accessible through the function (lines 4-17)  
8. It returns [50,100,150] since it is defined in the function scope it is returnable in the function.  
9. Error. I is a let variable so it is only defined in for loop lines 6-9. Not defined in line 11.  
10. 3 is printed. Since length is defined in the function scope it is accessible in line 12.  
11. [50,100,150] is returned. It simply applies the discount of 0.5 to every price in the prices array and puts it in a discounted array.  
12.  
A. student.name  
B. student.['Grad Year']  
C. student.greeting()  
D. student["Favorite Teacher"].name  
E. student.courseLoad[0]  
13.  
A.'32' since integers map to their string representation  
B. 1 string converted to number  
C. 3 since null is 0  
D. '3null' concatenates null to 3  
E. 4 since true is 1  
F. 0 since both values are 0  
G. 3undefined since it concatenates the values  
H. NaN since undefined becomes NaN as an integer.  
14.  
A. true '2' becomes number  
B. false since both become numbers  
C. true since both values are 2 as numbers  
D. false since they aren't of the same type  
E. false since true equals 1  
F. true same type and value  
15.   
== checks equality with type conversion === checks equality without type conversion.  
17. [2,4,6] It will first create the new array then go through the for loop. It will then call do something on every element in the array multiplying the elements by 2.  
19. 
1  
4  
3  
2  
