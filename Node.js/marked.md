# marked

在 `html` 裡面直接引用

``` js
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

用法
``` js
    document.getElementById('content').innerHTML =
      marked.parse('# Hello World\n\nRendered by **marked**.');
```

完整代碼

``` html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked in the browser</title>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    document.getElementById('content').innerHTML =
      marked.parse('# Hello World\n\nRendered by **marked**.');
  </script>
</body>
</html>
```