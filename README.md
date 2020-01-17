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
    - React Hook -> it cannot be used with classes

### Clean URLs with Dynamic Routing
- [DynamicRoutes](https://nextjs.org/docs/routing/dynamic-routes)
- 動的ルーティングはブラウザ履歴でうまく機能する