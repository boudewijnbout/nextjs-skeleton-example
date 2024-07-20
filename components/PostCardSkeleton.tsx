function PostCardSkeleton() {
    return (
        <div className="animate-pulse flex flex-col space-y-4 bg-white p-6 shadow-sm border rounded-md">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    );
};

export default PostCardSkeleton;