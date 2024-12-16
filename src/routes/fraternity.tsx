// @ts-ignore
import { graphviz } from 'd3-graphviz';
import React, { useRef, useEffect, useState} from 'react';
// @ts-ignore

const Graph = () => {
  const svgRef = useRef(null);
  const [graphData, setGraphData] = useState('')

  useEffect(() => {
    const fetchGraph = async () => {
        try {
            // change to server GET later
            const response = await fetch(`${process.env.PUBLIC_URL}/family-treescrollgen2.gv`)
            const text = await response.text()
            setGraphData(text)
        } catch(e) {console.error(e)}
        
    }
    fetchGraph()
    }, []);

    useEffect(() => {
        if (graphData && svgRef.current) {
            try {
                graphviz(svgRef.current).renderDot(graphData)
            } catch(e) {console.error(e)}
        }
    }, [graphData])

    function filterGraph(graph: any) {
        // removing duplicates
        let graphRows = graph.split('\n')
        for (let i = 0; i < graphRows.length; i++) {
            if (graphRows[i+1] == graphRows[i]) {
                graphRows[i] = ''
            }
        }
        const result = graphRows.filter((row: string) => row !== '')
        return result
    }
    filterGraph(graphData)
    console.log(filterGraph(graphData))
    return (<svg ref={svgRef} className='min-h-screen w-full overflow-y-auto m-10'></svg>)
};

export default function Fraternity () {
    return(<>
        <div className='bg-orange-100/75 w-screen min-h-screen overflow-auto pt-16'>
            <Graph />
        </div>
    </>)
}