## Description

Random quote machine app

## How to use

- clone the repo `git clone git@git.epam.com:yevhen_horbunkov/quotty.git`
- install the dependencies `yarn` / `npm i`
- copy nginx config files `cp ./src/server/config/nginx/* /etc/nginx/ -r`
- build client app `yarn build`
- copy client build to directory served by nginx `cp ./dist/* /var/www/html/ -r`
- copy certificate and key `cp ./src/server/config/certificate/quotty.cert.pem /etc/ssl/certs/ && cp ./src/server/config/certificate/quotty.key.pem /etc/ssl/private`
- start nginx `systemctl start nginx`
- start backend service `yarn start:server`

## API endpoints reference

GET /api/quotes - returns (paginated, fixed ordered) quotes from the source database, to control the output `pageSize` (default 10 items) and `offset` (default 0) parameters may be passed

    *Example:* `fetch('http://localhost:9000/api/quotes?pageSize=10&offset=15')` would return 10 records starting from 15-th

GET /api/quotes/random - returns random quote, optionally query parameters may be passed in: `tags_contains` (tags contain given substring), `author_eq` (author attribute equals to given string), `author_substring` (author attribute contains given substring), `text_substring` (quote text contains given substring)

    *Example:* `fetch('http://localhost:9000/api/quotes/random?tags_contains=patience')` would return random quote with keyword `'patience'` contained in its tags

POST /api/quotes - creates new quote record in the source database, mandatory `author`, `text` have to be passed in

    *Example:* `fetch('http://localhost:9000/api/quotes', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({author: 'foo', text: 'bar'})})` would create DB-record with quote text 'bar' and quote author 'foo'

GET /aip/quotes/:id - returns the quote from the source DB by matching `id`

    *Example:* `fetch('http://localhost:9000/api/quotes/b2cb835c-5251-40cc-a477-1eefc676380c') would return the quote with corresponding `id`

PUT /api/quotes/:id - updates the DB-record by `id`

    *Example:* `fetch('http://localhost:9000/api/quotes/b2cb835c-5251-40cc-a477-1eefc676380c', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({tags: ['wisdom']})})` would append `'wisdom'` tag to the record with corresponding `id`

DELETE /api/quotes/:id - marks the DB-record as deleted (`isDeleted: true`) by `id`

    *Example:* `fetch('http://localhost:9000/api/quotes/b2cb835c-5251-40cc-a477-1eefc676380c', {method: 'DELETE'})` would mark the respective record as deleted

## Messaging

Sending quotes to arbitrary (potentially) email is implemented.

> **_Note:_** current account state is 'in sandbox' which allows only messaging from/to verified e-mail addresses

So, if you wish to drop me a message, hit the following API

<pre>
POST https://ozlcp024yj.execute-api.us-east-2.amazonaws.com/prod
content-type:application/json

{
    "email": "yevhen_horbunkov@epam.com",
    "quote": {
        "author": "Some Smart Dude",
        "text": "you never know what you don't know"
    }
}
</pre>
