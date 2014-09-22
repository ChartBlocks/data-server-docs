Getting started
===============

Making requests
---------------

The ChartBlocks API is hosted at https://api.chartblocks.com/v1/. The API is 
REST based, providing access to chart, set, data and user information.

To generate charts dynamically, please see the Image API.

SDK's
------

To get you up and running with the API as quickly as possible we've implemented 
an SDK for PHP (https://github.com/ChartBlocks/php-rest-sdk). Other languages 
will be available shortly.

Authorization
-------------

The majority of API calls must be made as an authorized user. An ACCESS_TOKEN and
SECRET_KEY can be generated from your ChartBlocks profile page. Together these 
are used to sign requests.

### Authorizing a request

We'd suggest using one our pre-built SDKs if you're new to development, but to
authenticate requests in your own clients, please read on.

The signature is stored in the HTTP Authorization header, like so:
> **Authorization**: ACCESS_TOKEN:SIGNATURE

Your SECRET_KEY is never sent in the request, only the ACCESS_TOKEN. The 
SECRET_KEY is used to generate the SIGNATURE, using the body of your request, as 
outlined below.

#### Generating a signature

This snippet of psuedo code describes how to generate a signature. It should be
possible to implement this in your language of choice.

```js
  var key1 = sha1(body);
  var key2 = key1 . SECRET_KEY;
  var key3 = sha1(key2);
  var signature = base64_encode(key3);
```

The **body** variable is your request body. For a GET request this would be your 
query parameters in the format:

> param1=val&param2=val

For POST, PUT and PATCH requests this would be your request body, normally a
JSON document, i.e.:

> { name: 'My Chart', isPublic: true }

The SECRET_KEY is obtained along with the ACCESS_TOKEN from the profile page
of your ChartBlocks account.


Chart config
------------

The chart config object can end up rather large, and contains enough parameters
to warrant its own documentation page. Please reference the Chart Config
documentation separately for more information on how to format your config 
object.