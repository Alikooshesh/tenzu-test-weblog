import { Ipost } from "@/interface/postInterface";
import { getPostData } from "@/services/postPage/postPageServices";
import { timestampToGre } from "@/utils/dateAndTimeHandlers";

export default async function PostPage({ params }: { params: { post: string } }) {

    const postId = +(params.post.split("-").at(-1) ?? 0)

    const postData: Ipost = await getPostData(postId)

    return (
        <>
            <article className="flex flex-col gap-[4px]">
                <h1 className="font-black text-[1.75rem] text-black dark:text-white">
                    {postData.title}
                </h1>
                <span className="text-[13px] text-gray-700 dark:text-gray-300">
                    {timestampToGre(postData.updated_at)}
                </span>
                <p className="mt-10 text-black dark:text-white">
                    {postData.body}
                </p>
            </article>
        </>
    )
}