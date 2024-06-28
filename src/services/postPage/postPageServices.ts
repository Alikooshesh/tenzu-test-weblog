import { Ipost } from "@/interface/postInterface";
import { createRandomTimeStamp } from "@/utils/fakeData";

export async function getPostData(postId: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts/${postId}`);

    if (!res.ok) {
        throw new Error(res.statusText)
    }

    let result:Ipost = await res.json()
    result.updated_at = createRandomTimeStamp()

    return result;
}