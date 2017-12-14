function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div div div div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  const firstList = lis[0]
  const secondList = lis[1]

  const lisArr1 = Array.from(firstList.children)

  lisArr1.forEach(function(el) {
     el.innerHTML = parseInt(el.innerHTML) + n;
  })

  const lisArr2 = Array.from(secondList.children)

  lisArr2.forEach(function(el) {
    el.innerHTML = parseInt(el.innerHTML) + n;
  })
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}















