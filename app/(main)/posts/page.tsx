import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";

export default function PostPage() {
    return (
        <>
            <BackButton text={'Go Back'} link={'/'} />
            <PostsTable/>
            <PostPagination />
        </>
    )
}