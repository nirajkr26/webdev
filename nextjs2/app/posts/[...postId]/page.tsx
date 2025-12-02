export default async function PostsPage({params}:any){
    const {postId} = await params;

    return (
        <div>
            catch all routes {JSON.stringify(postId)}
        </div>
    )
}