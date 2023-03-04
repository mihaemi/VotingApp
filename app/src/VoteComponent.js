const VoteComponent = ({question, options}) => {
    let votes = new Array(options.length).fill(0)
    let buttons = options.map(
        option => <button onClick={(e)=>{console.log(e)}}>{option}, {votes}</button>
    )
    
        
    // HW1: create and fill the array using at least 2 other variants
    //      hint: use map

    // let votes = new Array(options.length).map(()=>0)
    // console.log(votes)

    // let votes = new Array(options.length)
    // for (let i=0; i<options.length; i++) {
    //     votes[i]= 0
    // }
    // console.log(votes)

    // HW2: using the .map() and votes array - show the votes in brackets
    
    return (
        <div>
            <h2>{question}</h2>
            {buttons}
        </div>
    )
}

export default VoteComponent

