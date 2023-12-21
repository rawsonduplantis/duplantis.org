import Markdown from "react-markdown"
import Post from "../components/dev/Post"
import { render } from "react-dom"
import { Outlet } from "react-router-dom"
import PostLink from "../components/dev/PostLink"

{/* <body className="bg-orange-100 h-full w-screen">
            <div className="flex flex-col">
                <div className="m-auto w-1/2">
                    <div className="m-4">
                        <p className="text-1xl text-orange-950/75 text-center">DevBlog</p>
                        <p className="text-1xl text-orange-950/75 text-center">More to come...</p>
                    </div>
                    
                    <div className="bg-white p-4">
                        <Markdown className={"prose"}>
                            {markdown}
                        </Markdown>
                    </div>
                </div>
            </div>
        </body> */}

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