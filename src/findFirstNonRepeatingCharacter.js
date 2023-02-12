module.exports = (str)=>{

    //add logic here
    if(typeof str!='string'){throw Error("parameter must be a string")}

    let chars=str.split("");
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        let isRepeating=chars.some((c,i2)=>{
            return c==char && i!=i2;
        });
        
        if(!isRepeating){return char}
    }

    return null;
}