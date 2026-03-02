# ph-b13-assignment4
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    1. Ans: 
    getElementById: It can specifically target a single node by using id. 
    getElementsByClassName: It can target multiple nodes by using where the same class name is applied. 
    querySelector: It can target only the first node by using node name/ id/ class.
    querySelectorAll: It can target all the nodes by using node name/ class. 

2. How do you create and insert a new element into the DOM?
    2. Ans: 
    document.createElement("element name")
3. What is Event Bubbling? And how does it work?
    3. Ans:
    Event Bubbling: It targets at first the child element and execute the code for child at first then moves toward parent elements. 
4. What is Event Delegation in JavaScript? Why is it useful?
    4. Ans:
    Event delegation is a process which find out the parent element and executes event handleing from parent. It is useful because of we don't need to create separate event handler for every child of parent. 

5. What is the difference between preventDefault() and stopPropagation() methods?
    5. Ans:
    
