// Exercise Level 1
// Exercise 1
const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent);

// Exercise 2
const secondParagraph = document.querySelector('#second');
const thirdParagraph = document.querySelector('#third');

// Exercise 3
const allParagraphs = document.querySelectorAll('p');

// Exercise 4
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

// Exercise 5
const fourthParagraph = allParagraphs[3];
fourthParagraph.textContent = "Fourth Paragraph";

// Exercise 6

// Set id and class attributes for the first paragraph
firstParagraph.id = "first";
firstParagraph.className = "my-class";

// Set id and class attributes for the second paragraph
secondParagraph.id = "second-id";
secondParagraph.classList.add("another-class");

// Set id and class attributes for the third paragraph
thirdParagraph.setAttribute("id", "third-id");
thirdParagraph.setAttribute("class", "third-class");

// Set id and class attributes for the fourth paragraph
fourthParagraph.id = "fourth-id";
fourthParagraph.classList.add("fourth-class");

// Exercise Level 2
// Exercise 1
const firstParagraphStyle = document.querySelector('#first');
const secondParagraphStyle = document.querySelector('#second');
const thirdParagraphStyle = document.querySelector('#third');
const fourthParagraphStyle = document.querySelector('#fourth');

// Change styles for the first paragraph
firstParagraphStyle.style.color = 'blue';
firstParagraphStyle.style.backgroundColor = 'lightgray';
firstParagraphStyle.style.border = '1px solid black';
firstParagraphStyle.style.fontSize = '18px';
firstParagraphStyle.style.fontFamily = 'Arial';

// Change styles for the second paragraph
secondParagraphStyle.style.color = 'red';
secondParagraphStyle.style.backgroundColor = 'yellow';
secondParagraphStyle.style.border = '2px dotted orange';
secondParagraphStyle.style.fontSize = '16px';
secondParagraphStyle.style.fontFamily = 'Helvetica';

// Change styles for the third paragraph
thirdParagraphStyle.style.color = 'green';
thirdParagraphStyle.style.backgroundColor = 'lightblue';
thirdParagraphStyle.style.border = '1px solid green';
thirdParagraphStyle.style.fontSize = '20px';
thirdParagraphStyle.style.fontFamily = 'Verdana';

// Change styles for the fourth paragraph
fourthParagraphStyle.style.color = 'purple';
fourthParagraphStyle.style.backgroundColor = 'pink';
fourthParagraphStyle.style.border = '2px solid purple';
fourthParagraphStyle.style.fontSize = '22px';
fourthParagraphStyle.style.fontFamily = 'Courier New';

// Exercise 2
allParagraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) {
        // Even index (0, 2) for first and third paragraphs
        paragraph.style.color = 'green';
    } else {
        // Odd index (1, 3) for second and fourth paragraphs
        paragraph.style.color = 'red';
    }
});

// Exercise 3
// Set text content, id, and class for each paragraph
firstParagraph.textContent = 'This is the first paragraph';
secondParagraph.textContent = 'This is the second paragraph';
thirdParagraph.textContent = 'This is the third paragraph';
fourthParagraph.textContent = 'This is the fourth paragraph';

firstParagraph.id = 'first';
firstParagraph.className = 'my-class';

secondParagraph.id = 'second';
secondParagraph.className = 'second-class';

thirdParagraph.id = 'third';
thirdParagraph.className = 'third-class';

fourthParagraph.id = 'fourth';
fourthParagraph.className = 'fourth-class';
