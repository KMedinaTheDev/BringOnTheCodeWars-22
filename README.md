![.:.Remove Duplicate From List..:.](.png)

## CodeWars Challenge- 22


*Description:*

Complete the function that removes duplicates from a list of numbers.

The order of the sequence needs to stay the same.

*Test Case:*


1. Test.assertSimilar(distinct([1]), [1]);
2. Test.assertSimilar(distinct([1,2]), [1,2]);
3. Test.assertSimilar(distinct([1,1,2]), [1,2]);
4. Test.assertSimilar(distinct([1,1,1,2,3,4,5]), [1,2,3,4,5]);
5. Test.assertSimilar(distinct([1,2,2,3,3,4,4,5,6,7,7,7]), [1,2,3,4,5,6,7]);


## Solved Using:

1. JavaScript

## My Solution:

In my initial answer I create a new array to hold the answer which will have no duplicates. I iterate through the current array and while doing so I check for duplicates.

By using the indexOf method I check if the element is found, if it is not,( -1 is returned), the element gets pushed into the new array, which is later returned.

*One Line Solution*
While researching different objects I learned about the Set object which stores unique values, by default, which is perfect for this problem. By using the spread operator I can return the Set as an array, since initially it was converted to a Set, to create a Set of unique values. 
