import { useRef, useState } from "react";
import Layout from "@/components/Layout";
import Listing from "@/components/Listing";
import Blogs from "./Blogs";

import { linksBlogs } from "@/mocks/links";
import { blogs } from "@/mocks/blogs";

const BlogsPage = () => {
    const scrollToRef = useRef<any>(null);
    const [activeFilter, setActiveFilter] = useState<string>("all-blogs");

    const filteredBlogs = activeFilter === "all-blogs"
        ? blogs
        : blogs.filter((b) => b.category === activeFilter);

    return (
        <Layout>
            <Listing
                title="Den bedste måde at forstå ny teknologi på, er ved at afprøve den."
                links={linksBlogs}
                scrollToRef={scrollToRef}
                onFilter={setActiveFilter}
            />
            <Blogs items={filteredBlogs} scrollToRef={scrollToRef} />
        </Layout>
    );
};

export default BlogsPage;
