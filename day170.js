// Given this array of DOM elements represented as objects:
//Use filter to get only h1 elements. Use map to get only the text content of all elements.
const elements = [
  { id: 1, tag: "h1", text: "Title" },
  { id: 2, tag: "p", text: "Paragraph" },
  { id: 3, tag: "h1", text: "Another Title" },
  { id: 4, tag: "p", text: "Another Paragraph" },
];

const takeH = elements.filter((n) => n.tag == "h1");
console.log(takeH);

const content = elements.map((n) => n.text);

console.log(content);
