import PostBoxHomePage from "@/components/homePage/postBox";

async function getPosts() {
  const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`);

  if (!res.ok) {
    throw new Error(res.statusText)
  }
  
  return res.json();
}

export default async function HomePage() {
  let postList = []

  try{
    postList = await getPosts()
  }catch(err){
    alert(err)
  }

  return (
    <>
    <div className="w-full flex flex-col gap-[3rem]">
    {postList.map((item:any,index:number) => (
      <PostBoxHomePage 
        key={item.id}
        id={item.id}
        title={item.title}
        body={item.body}
        index={index}
        publishDate={item.title}
      />
    ))}
    </div>
    </>
  );
}