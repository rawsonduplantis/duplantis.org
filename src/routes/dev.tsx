import PostLink from "../components/dev/PostLink"

export default function Dev() {

    return (
        <body className="flex flex-col bg-orange-100/75 w-full h-full">
            <div className="m-auto">
                <PostLink postID={1} title='What could a post look like?' />
                {/*<PostLink postID={2} title='How could one write a post?' />
                <PostLink postID={3} title='When could a post be published?' />*/}
            </div>
        </body>
    )
}