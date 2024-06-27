async function getPostData(postId : number) {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${postId}`);
  
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    
    return res.json();
  }

export default async function PostPage({params} : { params: { post: string } }) {

    const postId = +(params.post.split("-").at(-1) ?? 0)

    const postData = await getPostData(postId)

    return(
        <>
        <div className="flex flex-col gap-[4px]">
                    <h1 className="inline-block text-transparent bg-clip-text font-black text-[1.75rem] text-black dark:text-white">
                        {postData.title}
                    </h1>
                    <span className="text-[13px] text-gray-700 dark:text-gray-300">
                        {/* {publishDate} */}
                    </span>
                    <p className="mt-1 text-black dark:text-white">
                        {postData.body}
                    </p>
                </div>
        </>
    )
}