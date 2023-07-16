const vetor = [1,2,3,4,5,6,10,20,30,40,50,60, 31,32,33]


let itens = []
vetor.reduce((acc,item,  index)=>{
    if(item === vetor.at(-1)) itens.push([...acc, item])
    if(index % 6 === 0 && index > 0){
        itens.push(acc)
        return []
    }
    return [...acc, item]
}, [])


const valores = vetor.map((item, index)=>{
    return index % 6 === 0 ? vetor.slice(index, index + 6) : ''
}).filter((item)=> item !== '')

