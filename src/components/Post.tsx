export default function Post({date, post_title, content}: {date: Date, post_title:string, content:string}) {
    return (
        <div className="w-3/4 md:w-1/2 m-auto mb-4">
            <div id='header' className="flex flex-row justify-between">
                <h1 className="text-orange-950/75 text-2xl font-semibold">{post_title}</h1>
                <p className="text-orange-950/75 text-2xl">{date.toDateString()}</p>
            </div>
            <p className="text-orange-900/75">{content}</p>
        </div>
    )
}