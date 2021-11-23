const shuffle=()=>
{
    const value=document.getElementById('arrVal').value;
    const arr=value.split(',');
    let n = arr.length;
    random (arr, n);
    const ans=printArray(arr, n);
    document.getElementById('answer').innerHTML=`[${ans}]`
}
let printArray = (arr, n)=>
{
    let ans = '';
    for (let i = 0; i < n; i++)
    {
        ans += arr[i] + " ";
    }
    return ans;
}
let random = (arr, n) =>
{
    for (let i = n - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));
         [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}