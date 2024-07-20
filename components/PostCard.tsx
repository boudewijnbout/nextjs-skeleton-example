async function PostCard({ title, body }: PostCard) {
    return (
        <div className="bg-white p-6 shadow-sm border rounded-md">
            <h1 className="font-medium text-xl mb-4">{title}</h1>
            <p className="text-gray-500">{body}</p>
        </div>
    )
}

export default PostCard;