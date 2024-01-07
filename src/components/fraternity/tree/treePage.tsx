import react, { ReactComponentElement } from "react"

import { ReactComponent as FamilyTreeGen1 } from './trees/familytreegen1.svg'
import { ReactComponent as FamilyTreeGen2 } from './trees/familytreegen2.svg'
import { ReactComponent as FamilyTreeGen3 } from './trees/familytreegen3.svg'


export default function TreePage() {
    
    return (
        <div className="bg-orange-100/75 flex w-screen h-full flex-col">
            {Tree(1)}
            {Tree(2)}
            {Tree(3)}
        </div>
    )
}

function Tree(tree_gen: number) {
    var tree
    var tree_width:number
    var tree_height:number
    var tree_title:string
    if (tree_gen === 1) {
        tree_width = 635
        tree_height = 539
        tree_title = "First Generation (Spring '76 - Fall '79)"
        tree = <FamilyTreeGen1 />
    } else if (tree_gen === 2) {
        tree_width = 5592
        tree_height = 971
        tree_title = "Second Generation (Fall '81 - Spring '91)"
        tree = <FamilyTreeGen2 />
    } else if (tree_gen === 3) {
        tree_width = 11790
        tree_height = 3851
        tree_title = "Third Generation (Fall '91 - Present)"
        tree = <FamilyTreeGen3 />
    }

    return (
        <>
            <h1 className="flex w-full justify-center p-2 font-bold italic">{tree_title!}</h1>
            <div className="m-auto mb-5">
                <svg width={`${tree_width! * .1}`} viewBox={`0 0 ${tree_width!} ${tree_height!}`} xmlns="http://www.w3.org/2000/svg">
                    {tree}
                </svg>
            </div>
        </>
    )
}