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