const array = [1,1,2,2,3,4,4,5];
//第一种：Map记录
function quchong1(array){
    const newarray = []
    array.reduce((previous, current) => {
        console.log(previous+"-----"+current);
        //第一次 pre是空Map（） cur是1   has（）结果为false  ！false=ture
        if(!previous.has(current)){
            previous.set(current,1)
            console.log('哈哈'+previous);
            newarray.push(current);
        }
        return previous
    }, new Map());
    return newarray
}
(quchong1(array))