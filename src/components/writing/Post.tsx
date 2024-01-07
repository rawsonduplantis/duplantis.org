/* export default function Post({date, post_title, content}: {date: Date, post_title:string, content:string}) {
    return (
        <div className="w-3/4 md:w-1/2 m-auto mb-4">
            <div id='header' className="flex flex-row justify-between">
                <h1 className="text-orange-950/75 text-2xl font-semibold">{post_title}</h1>
                <p className="text-orange-950/75 text-2xl">{date.toDateString()}</p>
            </div>
            <p className="text-orange-900/75">{content}</p>
        </div>
    )
} */

import Markdown from "react-markdown"
import { useParams } from "react-router-dom"
const posts: Array<string> = [
    '# This is an example post \n ## Lorem Ipsum... \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices dolor ut felis pharetra, sit amet faucibus mi sollicitudin. Quisque eget nulla ut felis facilisis ultrices. Mauris cursus ligula mauris, nec finibus metus convallis id. Pellentesque nec aliquam tortor. Nulla facilisi. Proin pharetra id est sit amet blandit. Sed bibendum tellus ac lacus viverra, vitae scelerisque ligula interdum. Quisque vitae semper libero. Curabitur pharetra, velit at vestibulum pulvinar, nulla massa euismod libero, non auctor lacus metus id est. Sed ullamcorper lacus eget nulla rhoncus auctor. Praesent sed arcu et dolor lacinia luctus in tempor nibh. \n ### Donec fringilla... \n Donec fringilla eu turpis sit amet malesuada. Donec eget nibh ornare, interdum orci vel, dictum urna. Mauris vel felis nec felis egestas ultricies vel eget sem. Sed gravida sem posuere purus vehicula luctus. Fusce sit amet dolor dapibus, tempor lectus sed, egestas magna. Vivamus aliquam ante vitae nulla mollis sagittis. In vel fringilla enim. \n ### Quisque sollicitudin... \n  Quisque sollicitudin enim ac sapien aliquet convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis a nisi libero. Morbi ac venenatis augue. Sed at laoreet arcu. Curabitur vulputate placerat massa ac dictum. Nunc ac ultrices velit. Sed imperdiet metus in ipsum suscipit finibus. Pellentesque sem nulla, bibendum at nibh ac, aliquam fringilla enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n ### Sed ullamcorper... \n  Sed ullamcorper venenatis sodales. Curabitur in consectetur purus. Vestibulum a vestibulum est, vitae sodales libero. Nullam posuere ligula in ligula porta placerat. Nam ornare convallis mi, vitae lacinia magna facilisis sit amet. Donec tristique lobortis convallis. Vivamus commodo enim vel urna lobortis dapibus. Donec neque mi, convallis eu eros molestie, mollis pulvinar risus. Donec cursus, urna vitae pulvinar consectetur, metus felis varius erat, ut gravida arcu augue id urna. Curabitur venenatis varius venenatis. Aenean nec diam non tortor dictum rutrum et et augue. Nulla efficitur accumsan finibus. Etiam nunc ante, consectetur ultrices varius vel, ornare non lacus. In pellentesque vulputate tortor sit amet eleifend. Sed vitae rutrum nisl. \n ### Quisque quis... \n  Quisque quis nulla nunc. Curabitur rutrum orci a bibendum accumsan. Cras tincidunt viverra arcu eu varius. Vestibulum non lobortis nunc. Integer viverra nisl nibh, et tincidunt tellus aliquam congue. Sed sit amet laoreet lectus. Nulla a consectetur tortor, quis viverra enim. Quisque porttitor lobortis nunc nec interdum. Nam turpis arcu, imperdiet at ultrices quis, eleifend a felis. Donec commodo vitae elit nec vehicula. '
]

export default function Post() {
    const { postID } = useParams()
    let content = posts[+postID! - 1] 

    return(
        
        <div>
            <body className="flex flex-col w-screen h-full">
            <div className="flex-1">
                <Markdown className= "m-auto prose mt-10 overflow-y-scroll mb-10">{content}</Markdown>
            </div>
            </body>
        </div>
    )
}