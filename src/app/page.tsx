import PostBoxHomePage from "@/components/homePage/postBox";
import { Ipost } from "@/interface/postInterface";
import { getPosts } from "@/services/homePage/homePageServices";
import { timestampToGre } from "@/utils/dateAndTimeHandlers";

export default async function HomePage() {
  let postList: Ipost[] = []

  try {
    postList = await getPosts()
  } catch (err) {
    return (
      <div className="w-full mt-20 justify-center">
        <p className="error-message text-[3rem] font-black text-red-600 text-center">
          there is a problem
        </p>
        <p>
          try later
        </p>
      </div>
    )
  }


  return (
    <>
      <div className="w-full flex flex-col gap-[3rem]">
        {postList.map((item, index: number) => (
          <PostBoxHomePage
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            index={index}
            publishDate={timestampToGre(item.updated_at)}
          />
        ))}
      </div>
    </>
  );
}