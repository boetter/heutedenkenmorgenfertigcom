import Link from "next/link";
import cn from "classnames";
import styles from "./Blogs.module.sass";
import Blog from "@/components/Blog";

import { BlogsType } from "@/types/index";

type BlogsProps = {
    items: BlogsType[];
};

const Blogs = ({ items }: BlogsProps) => (
    <div className={cn("section-black section-pd128", styles.section)}>
        <div className={"container"}>
            <div className={styles.head}>
                <div className={cn("label", styles.label)}>EKSPERIMENTER</div>
                <div className={cn("h5", styles.title)}>
                    Den bedste måde at forstå ny teknologi på, er ved at afprøve den.
                </div>
            </div>
            <div className={styles.list}>
                {items.slice(0, 4).map((blog) => (
                    <Blog item={blog} key={blog.id} light />
                ))}
            </div>
            <div className={styles.btns}>
                <Link
                    className={cn("button-light", styles.button)}
                    href="/blogs"
                >
                    SE ALLE EKSPERIMENTER
                </Link>
            </div>
        </div>
    </div>
);

export default Blogs;
