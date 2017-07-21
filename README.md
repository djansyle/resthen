# resthen
Is a simple yet powerful tool for handling promises to callback.
There are modules that does not support async/await or promises,
**resthen** can solve that issue.


Example, koa-router method `param` does not support async/await or promises.
```javascript
    import Router from 'koa-router';
    import resthen from 'resthen';

    async function getUser(id) {
      // some async request to datasource
    }

    const router = new Router();
    router.param('user', (val, ctx, next) => {
      return resthen(getUser(val), (err, res) => {
        if (err) {
          throw err;
        }

        ctx[params] = res;
        next();
      });
    }
```
