data-server-docs
================

API docs for the REST server

Install
-------

```cli
npm install apidoc -g
composer install
```

Build docs
----------

`apidoc -i vendor/chartblocks/data-server/ -o apidoc/`

Push docs to github pages
-------------------------

`git subtree push --prefix apidoc origin gh-pages`