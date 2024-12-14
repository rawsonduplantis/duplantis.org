import PostLink from "../components/writing/PostLink"

export default function Passarelleo() {

    return (
        <body className="flex bg-orange-100/75 w-screen min-h-screen overflow-auto">
            <div className="m-auto">
                <PostLink postID={1} title='How can I make the most of international travel?' />
                {/*<PostLink postID={2} title='How could one write a post?' />
                <PostLink postID={3} title='When could a post be published?' />*/}
            </div>
        </body>
    )
}