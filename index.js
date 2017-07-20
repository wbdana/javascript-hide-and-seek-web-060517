function getFirstSelector(selector) {
  return document.querySelector(selector)
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function deepestChild() {
  let allDivs = [...document.querySelectorAll('#grand-node div')]
  let mapped = allDivs.map(function(div) {
    if (div.children.length === 0) {
      return div
    } else {
      return null
    }
  })
  return mapped.filter(function(item) {
    return item != null
  })[0]
};

function increaseRankBy(n) {
  let relLis = [...document.querySelectorAll('.ranked-list li')]
  relLis.map(function(x) {
    x.innerHTML = parseInt(x.innerHTML) + n
  })
};
