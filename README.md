# nextjs-getting-started
Next.js tutorial

https://nextjs.org/learn/basics/getting-started

https://github.com/zeit/next-learn-demo


## memo

### Navigate Between Pages
- client-side navigation
    - Nuxt.js's `Link` component
    - `next/link`
        - `location.history` handling

### Using Shared Components
- `pages` directory
- common header component and use it in multiple pages
- componentを入れるディレクトリ名は何でもいい
- 特別なディレクトリは、 `/pages`,`/public`
- `pages`ディレクトリにcomponentを入れることもできる
    - componentへの直接的なURLが必要ない場合は`pages`ディレクトリに入れない
- common layout component


### Create Dynamic Pages

- クエリ文字列を介してデータを渡す
- [useRouter](https://nextjs.org/docs/api-reference/next/router#userouter) hook
    - `router` object access
        - query取得したり
    - React Hook -> it cannot be used with classes

### Clean URLs with Dynamic Routing
- [DynamicRoutes](https://nextjs.org/docs/routing/dynamic-routes)
- 動的ルーティングはブラウザ履歴でうまく機能する

### Fetching Data for Pages
- standard API to fetch data for pages
- async function called `getInitialProps`
- `getInitialProps` needs to work on both server and client
    - you can add into any page in your app.
    - fetch data and send them as props to our page
    - server側でfetchしてデータを取得している場合は、clientでサイド取りに行くことはない（reloadしたとき)
- Fetch Data in Client Side
    - `<Link>` componentはbrowserないで遷移。serverにrequest送らない
    - 直接post pageに遷移したときは、server側がデータを取りに行く
- [Data fetching](https://nextjs.org/docs/basic-features/data-fetching)
    - [Static Generation](https://nextjs.org/docs/basic-features/data-fetching#static-generation)

### Styling Components
- `<style jsx>`
    - Styles should go inside template strings
- Nested Component
    - CSS rules have no effect on elements inside of a child component
        - Componentの中に styleを入れればよい