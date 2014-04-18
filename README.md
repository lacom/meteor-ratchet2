# Meteor Ratchet 2

[Ratchet](http://goratchet.com/) packaged for [Meteor](http://meteor.com).

## Installation

With [Meteorite](https://github.com/oortcloud/meteorite) installed:

```sh
$ mrt add ratchet2
```
## Usage

Add the following meta tags inside your project's ```<head>```
```HTML
<!-- Sets initial viewport load and disables zooming  -->
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

<!-- Makes your prototype chrome-less once bookmarked to your phone's home screen -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```
Fill in the ```<body>``` using Rachet's header and content classes. A basic page might look like this:

```HTML

<body>
  {{> header}}
  {{> content}}
</body>

<template name="header">
  <!-- Make sure all your bars are the first things in your <body> -->
  <header class="bar bar-nav">
    <h1 class="title">Ratchet</i></h1>
  </header>
</template>

<template name="content">
	<!-- Wrap all non-bar HTML in the .content div (this is actually what scrolls) -->
  <div class="content">
    <p class="content-padded">Thanks for downloading Ratchet. This is an example HTML page that's linked up to compiled Ratchet CSS and JS, has the proper meta tags and the HTML structure. Need some more help before you start filling this with your own content? Check out some Ratchet resources:</p>
    <div class="card">
      <ul class="table-view">
        <li class="table-view-cell">
          <a class="push-right" href="http://goratchet.com">
            <strong>Ratchet documentation</strong>
          </a>
        </li>
        <li class="table-view-cell">
          <a class="push-right" href="https://github.com/twbs/ratchet/">
            <strong>Ratchet on Github</strong>
          </a>
        </li>
        <li class="table-view-cell">
          <a class="push-right" href="https://groups.google.com/forum/#!forum/goratchet">
            <strong>Ratchet Google group</strong>
          </a>
        </li>
        <li class="table-view-cell">
          <a class="push-right" href="https://twitter.com/goratchet">
            <strong>Ratchet on Twitter</strong>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

```

For more information see: [Ratchet docs](http://goratchet.com/components/)
