// import Layout from '../components/MyLayout';

// const Index = () => (
//     <Layout>
//         <p>Hello Next.js</p>
//     </Layout>
// );

// export default Index

import withLayout from '../components/MyLayout';

const Page = () => <p>Hello Next.js</p>;

export default withLayout(Page);