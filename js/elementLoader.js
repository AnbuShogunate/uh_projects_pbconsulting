fetch('/page_elements/header.html')
  .then(data => data.text())
  .then(html => document.getElementById('header-loader').innerHTML = html);
