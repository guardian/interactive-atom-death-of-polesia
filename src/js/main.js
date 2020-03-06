var el = document.createElement('script');

el.src = '<%= path %>/app.js';
document.body.appendChild(el);

document.body.classList.add('header-atom');

let parentDoc = window.parent.document;
// let styleAll = document.querySelectorAll('style');
// let newStyle = styleAll[(styleAll.length - 1)].cloneNode(true);
// parentDoc.body.appendChild(newStyle);

parentDoc.body.dataset.deploy = '930';

let newStyleLink = document.createElement('link');
newStyleLink.setAttribute('rel', 'stylesheet');
newStyleLink.setAttribute('href', 'https://uploads.guim.co.uk/2020/03/06/main.css');
parentDoc.body.appendChild(newStyleLink);


// Apps stuff
let apps = parentDoc.querySelector('body.ios, body.android');
if (apps) {
  let seriesTag = apps.querySelector('.tone--special.garnett--type-immersive .article__series');
  let seriesTagText = apps.querySelector('.garnett--type-immersive .article__header-info .article__series-copy > a > span');
  let headerBg = apps.querySelector('.garnett--type-immersive .article__header-info');
  let seriesBagde = apps.querySelector('.garnett--type-immersive .article-badge');
  let articleHeader = apps.querySelector('.article__header');
  let articleBody = apps.querySelector('.article__body');

  articleHeader.style = 'background-color: #fff';
  articleBody.style = 'background-color: #fff';
  seriesTag.style = 'background-color: #ffe500';
  seriesTagText.style = 'background-color: #ffe500';
  seriesTagText.style = 'color: #3f464a;font-weight: bold; font-size: 18px';
  seriesBagde.style = 'width: 42px;margin-bottom: 6px;'
  headerBg.style = 'background-color: #041F4A';

} else {


}

// THIS IS A .find() Polyfill
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function (predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length"))
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    }
  });
}
