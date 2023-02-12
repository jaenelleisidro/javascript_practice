module.exports = (str)=>{
    if(typeof str!='string'){throw Error("parameter must be a string")}
    
    let chars=str.split("");
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        let isNonRepeating=chars.every((c,i2)=>{
            return c!=char || i==i2;
        });

        
        if(isNonRepeating){return char}
    }

    return null;
}