export default async function BlogPage({params}:any){
    const {postId} = await params;

    return (
        <div>
            dynamic routes {postId}
        </div>
    )
}