function concanStrs(str, ...args) {
    var res = "";
    for (let i = 0; i < args.length -1; i++) {
         res=res+ args[i]+str;
    }
    res+=args[args.length-1]
    return res;
}

console.log(concanStrs("#","mohamed", "ali" , "kohla" ));