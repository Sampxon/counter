//

let count = 0;
const valueEl = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);
//nodelist is array like but not quite

// function (btn) {
//   console.log(btn);
//   btn.addEventListener()
// }

btns.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      valueEl.style.color = 'green';
    }
    if (count < 0) {
      valueEl.style.color = 'red';
    }
    valueEl.textContent = count;
  });
});
