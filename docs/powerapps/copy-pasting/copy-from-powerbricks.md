---
sidebar_position: 3
---
# Copy from PowerBricks

## How to set the clipboard

###  TLDR;
How up to the **copy event**, the execute the **copy command** after having done the magic in bwtween.
```js
var ta = document.getElementById('myTA');
ta.addEventListener('copy', onCopyEvent);
   document.execCommand('copy')
```

### Full Source
http://jsfiddle.net/73v73p18/



```html
Enter some html code, select it and press ctrl+c:<br><br>
<textarea id="myTA" style="width:200px;height:100px"></textarea>


```
```css
```
div.content {
  all: default;
}
```js
var ta = document.getElementById('myTA');
ta.addEventListener('copy', onCopyEvent);
ta.value = '<b>xx</b>';

clipboardDiv = document.createElement('div');
clipboardDiv.style.fontSize = '12pt'; // Prevent zooming on iOS
// Reset box model
clipboardDiv.style.border = '0';
clipboardDiv.style.padding = '0';
clipboardDiv.style.margin = '0';
// Move element out of screen 
clipboardDiv.style.position = 'fixed';
clipboardDiv.style['right'] = '-9999px';
clipboardDiv.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
// more hiding
clipboardDiv.setAttribute('readonly', '');
clipboardDiv.style.opacity = 0;
clipboardDiv.style.pointerEvents = 'none';
clipboardDiv.style.zIndex = -1;
clipboardDiv.setAttribute('tabindex', '0'); // so it can be focused
clipboardDiv.innerHTML = '';
document.body.appendChild(clipboardDiv);

function onCopyEvent(e) {
  e.preventDefault();
  //copyTextToClipboard(getTextAreaSelection(e.target)); // copy text
  copyHtmlToClipboard(getTextAreaSelection(e.target)); // html
}

function copyHtmlToClipboard(html) {
  clipboardDiv.innerHTML=html;

  var focused=document.activeElement;
  clipboardDiv.focus();

  window.getSelection().removeAllRanges();  
  var range = document.createRange(); 
  range.setStartBefore(clipboardDiv.firstChild);
  range.setEndAfter(clipboardDiv.lastChild);
  window.getSelection().addRange(range);  

  var ok=false;
  try {
    if (document.execCommand('copy')) ok=true; else utils.log('execCommand returned false !');
  } catch (err) {
    utils.log('execCommand failed ! exception '+err);
  }

  focused.focus();
}

function getTextAreaSelection(elem)
{
  var selectedText;
  if (document.selection != undefined) // IE version
  {
    elem.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  }
  else if (elem.selectionStart != undefined) // Mozilla version
  {
    var startPos = elem.selectionStart;
    var endPos = elem.selectionEnd;
    selectedText = elem.value.substring(startPos, endPos)
  }
  return selectedText;
}



```


https://stackoverflow.com/questions/34191780/javascript-copy-string-to-clipboard-as-text-html