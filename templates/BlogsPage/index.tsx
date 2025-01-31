import { useRef } from "react";
import Layout from "@/components/Layout";
import Listing from "@/components/Listing";
import Blogs from "./Blogs";

import { linksBlogs } from "@/mocks/links";
import { blogs } from "@/mocks/blogs";

const BlogsPage = () => {
    const scrollToRef = useRef<any>(null);

    return (
        <Layout>
            <Listing
                title="Den bedste måde at forstå ny teknologi på, er ved at afprøve den."
                links={linksBlogs}
                scrollToRef={scrollToRef}
            />
            <Blogs items={blogs} scrollToRef={scrollToRef} />
        </Layout>
    );
};

export default BlogsPage;
