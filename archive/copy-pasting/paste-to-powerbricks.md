---
sidebar_position: 4
---
# Paste to PowerBricks

1. Open PowerApps studio
2. Use the keyboard to copy and element
3. Head over to [codepen](https://codepen.io/niegrejoh/live/qBYaxrE/549c70249463cc97f91c9bab932b01e6) and use keyboard to paste


```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Clipboard API: event demonstration</title>
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" href="./css/main.css" />
<body>


  <h2>Paste</h2>

  <form action="#">

    <p>
      <label for="field1" class="block">Paste here using <kbd>Ctrl</kbd>|<kbd>Cmd</kbd> + <kbd>V</kbd>:</label><br/>
      <textarea id="field1" rows="10" cols="40"></textarea>
    <pre id="htmlcode"> 
    here comes the HTcode from clipboard
    </pre>
    </p>

    <button type="reset">clear</button>

    

  </form>

<script type="module">
const body = document.body;

document.getElementById('field1').addEventListener('paste', pasteEvent);

// paste event handler
function pasteEvent(e) {
var html = e.clipboardData.getData('text/html');
  
  console.log(html)
  var dest = document.getElementById('htmlcode')
    debugger
  dest.innerHTML = html.replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#39;");  
  const paste = 'pasted:\n' + (e.clipboardData || window.clipboardData).getData('text');


  
  

  e.preventDefault();
}

</script>
</body>
</html>

```