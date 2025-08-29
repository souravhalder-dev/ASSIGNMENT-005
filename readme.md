


 What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   
getElementById() Used to specifically find an HTML element by its id.getElementsByClassName() Finds multiple elements using a class name and allows you to work with them easily.querySelector() Finds the first element that matches a given CSS selector (id, class, tag, etc.).querySelectorAll() Used to find multiple elements (id, class, tag, etc.) and returns them as a NodeList.


 How do you **create and insert a new element into the DOM**?
Create with document.createElement('tag'), set attributes/content, and insert using parent.appendChild(element) or parent.insertBefore(element, reference).

What is **Event Bubbling** and how does it work?
When an event triggers on an element and propagates up through its parent elements in the DOM, triggering handlers on each.

 What is **Event Delegation** in JavaScript? Why is it useful?
 Attaching a single event listener to a parent element to handle events for its children, using event bubbling.
Why Useful: Reduces memory usage, simplifies code, and handles dynamically added elements.


What is the difference between **preventDefault() and stopPropagation()** methods?
preventDefault() Stops the default browser action (e.g., form submission, link navigation) without affecting event bubbling.
stopPropagation() Prevents the event from bubbling up or capturing down the DOM, but doesn’t stop default actions.
Example: e.preventDefault() stops a form submit; e.stopPropagation() stops parent handlers from firing.

