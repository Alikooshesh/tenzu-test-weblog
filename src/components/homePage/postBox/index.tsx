import { hslColorGen } from "@/utils/colorGen"
import Link from "next/link"

interface Iprops {
    title: string,
    publishDate: string,
    body: string,
    index: number
}

const PostBoxHomePage = ({ title, publishDate, body, index }: Iprops) => {
    return (
        <>
            <Link href={`/${title.split(" ").join("-")}`}>
                <div className="flex flex-col gap-[4px]">
                    <h1 className="inline-block text-transparent bg-clip-text font-black text-[1.75rem]" style={{ backgroundColor: hslColorGen(331,40,64,index) }}>
                        {title}
                    </h1>
                    <span className="text-[13px] text-gray-700 dark:text-gray-300">
                        {publishDate}
                    </span>
                    <p className="mt-1 text-black dark:text-white">
                        {body}
                    </p>
                </div>
            </Link>
        </>
    )
}

export default PostBoxHomePage