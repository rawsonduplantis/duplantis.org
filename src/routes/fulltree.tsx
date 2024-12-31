import { ReactComponent as FamilyTreeGen3 } from '../unused components/tree/trees/familytreegen3.svg';
import { useEffect, useRef } from 'react';

export default function FullTree() {
    const svgRef = useRef<SVGSVGElement | null>(null)
    
    useEffect(() => {
        const svg = svgRef.current
        if (svg) {
            const bbox = svg.getBBox()
            svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`)
        }
    }, [])

    return(<>
        <FamilyTreeGen3 />  
    </>)
}