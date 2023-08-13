let myLi = document.querySelector("li.start-here"); // allows to select and retrieve the first element that matches a specific CSS selector within the document.
myLi.textContent = "main title";
myLiNextSibling = myLi.nextElementSibling; // It allows to access the element that comes immediately after a specified element within the same parent element.
myUl = myLiNextSibling.firstElementChild;
//4. Adding a New Sub Title:
newSubTitle = document.createElement("li");
subTitleText = document.createTextNode("sub title 4");
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);

newSubTitle1 = document.createElement("li");
subTitleText1 = document.createTextNode("sub title 5");
newSubTitle1.appendChild(subTitleText1);
myUl.appendChild(newSubTitle1);

//5. Removing the Last Title:
myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();
//test
newSubTitle1.remove();

//title = document.head.querySelector("title");
//title.textContent = "DOM Master";
document.head.querySelector("title").textContent = "DOM Master";

//7. Updating Paragraph Content:
div = myLiParent.nextElementSibling;
p = div.firstElementChild;
p.textContent = "Now I know how to traverse the DOM :D";
