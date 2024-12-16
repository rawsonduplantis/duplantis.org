// @ts-ignore
import { render } from '@testing-library/react';
//@ts-ignore
import { graphviz } from 'd3-graphviz';
import { useRef, useEffect, useState} from 'react';
const scrollName = 'family-treescroll'

const Graph = ({targetScroll} : {targetScroll : string}) => {
    const svgRef = useRef(null);
    const [graphData, setGraphData] = useState<string | null>(null)

    useEffect(() => {
        const fetchGraph = async () => {
            try {
                // change to server GET later
                const response = await fetch(`${process.env.PUBLIC_URL}/${scrollName}.gv`)
                const text = await response.text()
                setGraphData(text)
            } catch(e) {console.error(e)}
            
        }
        fetchGraph()
    }, []);

    useEffect(() => {
        const renderGraph = async () => {
            if (graphData && svgRef.current) {
                try {
                    const graph = await filterGraph(graphData, targetScroll)
                    console.log(graph)
                    graphviz(svgRef.current).renderDot(graph)
                } catch(e) {console.error("ERROR:" + e)}
            }
        }
        renderGraph()
    }, [graphData, targetScroll])

    
        
    return (<svg ref={svgRef} className='h-5/6 w-4/5 ml-auto mr-auto mt-16 border-4 border-black'></svg>)
};

export default function Fraternity () {
    const [targetScroll, setTargetScroll] = useState<string>('672'); // Default value

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Update targetScroll based on user input
        const formInput = (e.target as any).targetScroll.value;
        setTargetScroll(formInput);
        console.log(`Target scroll set: ${targetScroll}`)
    };

    return(<>
        <div className='bg-orange-100/75 w-screen h-full overflow-auto pt-16'>
        <div className="mb-8">
        <form onSubmit={handleSubmit} className="flex justify-center space-x-4">
          <label htmlFor="targetScroll" className="font-semibold">Target Scroll:</label>
          <input
            id="targetScroll"
            name="targetScroll"
            type="text"
            defaultValue={targetScroll}
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Update
          </button>
        </form>
      </div>
            <Graph targetScroll={targetScroll} />
        </div>
    </>)
}

function filterGraph(graph: any, targetScroll: string) {

    let graphRows = removeDuplicates(graph)
    // create array with targetScroll
    let upperLineageScrolls = [targetScroll]
    let lowerLineageScrolls = [targetScroll]
    let newGraphRows = [`digraph "${scrollName}" {`, `node [charset="UTF-16" fillcolor=white fixedsize=true fontname="Times New Roman" height=1 shape=box style="rounded, filled, solid" width=2]`]
    
    
    

    // Iterate through the cleaned dot file row by row downwards
    console.log(`--- starting with lower ${lowerLineageScrolls} ---`)
    for (let i = 0; i < graphRows.length; i++) {
        // for each row, check it against each recorded lineage scroll
        let newLineageScroll: string = ''
        let knownLineageScroll: string = ''
        let newLineageScrollFound: boolean = false
        for (let j = 0; j < lowerLineageScrolls.length; j++) {
            //console.log(lineageScrolls)
            if (graphRows[i].includes(lowerLineageScrolls[j])) {
                newLineageScrollFound = true
                console.log(`${graphRows[i].trim()} contains ${lowerLineageScrolls[j]}!`)
                knownLineageScroll = lowerLineageScrolls[j]
                // check if the row is a edge
                if (graphRows[i].includes('->')) {
                    console.log('its an edge!')
                    // Adding other scroll to lineage list
                    if (graphRows[i].trim().startsWith(knownLineageScroll)) {
                        console.log(`"${graphRows[i].trim()} starts with ${knownLineageScroll}"`)
                        newLineageScroll = graphRows[i].slice(knownLineageScroll.length + 5, -1)
                    } else if (graphRows[i].trim().endsWith(knownLineageScroll)) { 
                        newLineageScroll = graphRows[i].slice(1, graphRows[i].length - (knownLineageScroll.length + 5))
                        console.log(`"${graphRows[i].trim()} ends with ${knownLineageScroll}"`)
                    }
                }
            }
        }
        if (newLineageScrollFound && newLineageScroll !== '' && Number(targetScroll) < Number(newLineageScroll)) {lowerLineageScrolls.push(newLineageScroll) }
    }

    // Moving upwards
    console.log(`--- starting with upper ${upperLineageScrolls} ---`)
    for (let i = graphRows.length - 1; i > 0; i--) {
        // for each row, check it against each recorded lineage scroll
        let newLineageScroll: string = ''
        let knownLineageScroll: string = ''
        let newLineageScrollFound: boolean = false
        for (let j = 0; j < upperLineageScrolls.length; j++) {
            //console.log(lineageScrolls)
            if (graphRows[i].includes(upperLineageScrolls[j])) {
                newLineageScrollFound = true
                console.log(`${graphRows[i].trim()} contains ${upperLineageScrolls[j]}!`)
                knownLineageScroll = upperLineageScrolls[j]
                // check if the row is a edge
                if (graphRows[i].includes('->')) {
                    console.log('its an edge!')
                    // Adding other scroll to lineage list
                    if (graphRows[i].trim().startsWith(knownLineageScroll)) {
                        //console.log(`"${graphRows[i].trim()} starts with ${knownLineageScroll}"`)
                        //newLineageScroll = graphRows[i].slice(knownLineageScroll.length + 5, -1)
                        break
                    } else if (graphRows[i].trim().endsWith(knownLineageScroll)) { 
                        newLineageScroll = graphRows[i].slice(1, graphRows[i].length - (knownLineageScroll.length + 5))
                        console.log(`"${graphRows[i].trim()} ends with ${knownLineageScroll}"`)
                    }
                }
            }
        }
        if (newLineageScrollFound && newLineageScroll !== '') {upperLineageScrolls.push(newLineageScroll) }
    }
    

    console.log('lower: ' + lowerLineageScrolls)
    console.log('upper: ' + upperLineageScrolls)
    const lineageScrolls = lowerLineageScrolls.concat(upperLineageScrolls.slice(1))
    console.log(lineageScrolls)

    // for each row
    for (let i = 0; i < graphRows.length; i++) {
        let trimmedRow = graphRows[i].trim()
        for (let j = 0; j < lineageScrolls.length; j++) {
            if (graphRows[i].includes(' ' + lineageScrolls[j]) || graphRows[i].includes(lineageScrolls[j] + ' ')) {
                let foundLineageScroll = lineageScrolls[j]
                console.log(`relevant row found!: ${trimmedRow}, found scroll: ${lineageScrolls[j]}`)
                if (graphRows[i].includes('->')) {
                    // get other scroll
                    let otherScroll
                    if (graphRows[i].trim().startsWith(foundLineageScroll)) {
                        otherScroll = graphRows[i].slice(foundLineageScroll.length + 5, -1)
                    } else if (graphRows[i].trim().endsWith(foundLineageScroll)) { 
                        otherScroll = graphRows[i].slice(1, graphRows[i].length - (foundLineageScroll.length + 5))
                    }
                    console.log(`edge found! checking against ${otherScroll}`)
                    if (lineageScrolls.includes(otherScroll)){
                        console.log('edge is lineage only')
                        console.log(graphRows[i])
                        newGraphRows.push(graphRows[i])
                    } else { break }
                }  else {
                    newGraphRows.push(graphRows[i])
                }
                
            }
            
        }
    }

        // if edge (contains "->") contains target scroll: add edge to new dot
        // add new number to target array, iterate through array
        // add all labels of numbers in array, sort by scroll ascending

    // join together
    newGraphRows.push(`}`)
    let newGraph = newGraphRows.join('\n')
    
    //console.log(newGraph)
    return removeDuplicates(newGraph).join('\n')
    
}

// removing duplicates
function removeDuplicates(graph: any) {
    let graphRows = graph.split('\n')
    for (let i = 0; i < graphRows.length; i++) {
        if (graphRows[i+1] == graphRows[i]) {
            graphRows[i] = ''
        }
    }
    return graphRows.filter((row: string) => row !== '')
}