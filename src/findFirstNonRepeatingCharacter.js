module.exports = (str)=>{

    if(typeof str!='string'){throw Error("parameter must be a string")}
        
    let chars=str.split("");

    return chars.find((char,i)=>{
        let index=chars.findIndex((c,i2)=>{
            return c==char && i!=i2;
        });
        
        if(index==-1){return char}
    })||null;
}