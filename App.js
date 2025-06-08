// first i slected the body 
// because we'll have to make all the changes in the body 
// only
const body = document.body;

// then i had to made the bigbox in which the main color will be displayed
const bigBox = document.createElement('div');
bigBox.id = 'bigBox';
bigBox.style.marginBottom = '20px';
body.appendChild(bigBox);

// then i created a area where small boxes will be displayed
// and made it to flex so that we can display it in straight line using wrap
const smallBoxesArea = document.createElement('div');
smallBoxesArea.id = 'smallBoxesArea';
smallBoxesArea.style.display = 'flex';
smallBoxesArea.style.flexWrap = 'wrap';
smallBoxesArea.style.gap = '10px';
body.appendChild(smallBoxesArea);

// then i created buttons that'll be used to filter on the basis of color
const filterColors = ['All', 'Red', 'Green', 'Blue'];
//then a small area where all the buttons will be stored
const buttonArea = document.createElement('div');
buttonArea.style.marginBottom = '10px';
// then i created all the buttons 
// and added them into btnarea
filterColors.forEach(color => {
  const btn = document.createElement('button');
  btn.innerText = color.toUpperCase();
  btn.style.marginRight = '10px';
  btn.style.padding = '6px 12px';
  btn.style.cursor = 'pointer';
  btn.onclick = () => showFilteredBoxes(color.toLowerCase());
  buttonArea.appendChild(btn);
});

body.insertBefore(buttonArea, bigBox);

// then after btnarea i created a dropdown which'll 
// again display the name of colors
const dropdown = document.createElement('select');
dropdown.style.marginBottom = '20px';
dropdown.style.padding = '6px';
// then created a options inside that dropdown
filterColors.forEach(color => {
  const option = document.createElement('option');
  option.value = color.toLowerCase();
  option.innerText = color.toUpperCase();
  dropdown.appendChild(option);
});

dropdown.onchange = () => showFilteredBoxes(dropdown.value);
body.insertBefore(dropdown, bigBox);

// then i created an array of colors 
// which store the name and code of the color
const colorData = [
  { color: 'blue', code: '#5DADE2' },
  { color: 'blue', code: '#2980B9' },
  { color: 'blue', code: '#21618C' },
  { color: 'blue', code: '#2874A6' },
  { color: 'blue', code: '#1F618D' },
  { color: 'red', code: '#E74C3C' },
  { color: 'red', code: '#C0392B' },
  { color: 'red', code: '#F1948A' },
  { color: 'green', code: '#27AE60' },
  { color: 'green', code: '#2ECC71' },
  { color: 'green', code: '#82E0AA' },
  { color: 'green', code: '#58D68D' }
];

// this function will display the 
// small boxes down the big box 
// where you can select which color to display int big box
function createSmallBox(data) {
  const box = document.createElement('div');
  box.style.width = '80px';
  box.style.height = '80px';
  box.style.backgroundColor = data.code;
  box.style.display = 'flex';
  box.style.alignItems = 'center';
  box.style.justifyContent = 'center';
  box.style.cursor = 'pointer';
  box.style.border = '2px solid transparent';
  box.innerText = data.color.toUpperCase();

  // this onclick display 
  // the color present in the smallbox in the bigbox
  box.onclick = () => showBigBox(data);
  return box;
}

// this function will display the bigbox in the bigbox area created above
function showBigBox(data) {
  bigBox.innerHTML = '';
  const big = document.createElement('div');
  big.style.width = '300px';
  big.style.height = '300px';
  big.style.backgroundColor = data.code;
  big.style.display = 'flex';
  big.style.alignItems = 'center';
  big.style.justifyContent = 'center';
  big.style.fontSize = '24px';
  big.style.color = '#fff';
  big.style.border = '3px solid black';
  big.innerText = data.color.toUpperCase();
  bigBox.appendChild(big);
}

// in this function we'll filter as of what color we want to show
function showFilteredBoxes(colorToShow) {
  smallBoxesArea.innerHTML = '';
  let result = colorData;

  if (colorToShow !== 'all') {
    result = colorData.filter(item => item.color === colorToShow);
  }

  result.forEach(item => {
    const smallBox = createSmallBox(item);
    smallBoxesArea.appendChild(smallBox);
  });

 // if no item is selected it'll show the firstItem byDefault
  if (result.length > 0) {
    showBigBox(result[0]);
  }
}

// and if no no filtering is there it'll show all the items by default 
showFilteredBoxes('all');
