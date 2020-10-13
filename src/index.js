function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

module.exports = function check(str, bracketsConfig) {
    const regStr = bracketsConfig.reduce(
        (res, configItem) => {
            res.push(escapeRegExp(configItem.join('')));
            return res;
        },
        []
    ).join('|');
    const reg = new RegExp(regStr, 'g');
    let val = str;
    while (reg.test(val)) {
        val = val.replace(reg, '');
    }
    return !val.length
};
