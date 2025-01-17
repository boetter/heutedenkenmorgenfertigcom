import Layout from "@/components/Layout";
import Main from "./Main";
import Content from "./Content";
import Posts from "@/components/Posts";

import { blogs } from "@/mocks/blogs";

const BlogPage = ({ id }: any) => {
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <Layout>
            <Main id={id} />
            <Content title={blog.contentTitle} content={blog.content} />
            <Posts items={blogs.slice(0, 2)} />
        </Layout>
    );
};

export default BlogPage;