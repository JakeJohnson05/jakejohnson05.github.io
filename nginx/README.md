# Website NGINX

We use NGINX to handle the two app upstreams, the client and server API.

The client is running on port 3000 while the API is running on port 3001. In
our nginx configuration, `http://localhost/` proxies to the client and
`http://localhost/api/` proxies to the API.
