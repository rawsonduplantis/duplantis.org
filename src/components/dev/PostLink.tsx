import { Link } from "react-router-dom"

export default function PostLink({postID, title}: {postID: number, title: string}) {
    return (
    <div className="text-orange-950/75">
        <Link className="" to={`post/${postID}`} >{title}</Link>
    </div>
    )
}