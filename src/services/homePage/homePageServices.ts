export async function getPosts() {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_API_URL}/posts`);
  
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    
    return res.json();
  }