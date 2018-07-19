

function hexToRGB(hex, toFixed = 1) {
    const h = hex.replace(/^\#/, '')
    const h1 = h.length === 3 ? [...h].map(item => item + item).join('') : h
    const alpha = h1.length === 8
    const h2 = parseInt(h1, 16)
    const r = (h2 >>> (alpha ? 24 : 16))
    const g = (h2 & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)
    const b = (h2 & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)
    const a = alpha ? ((h2 & 0x000000ff) / 255).toFixed(toFixed) : ''
    const rgba = (alpha ? [r, g, b, a] : [r, g, b]).join(', ')
    const str = `rgb${alpha ? 'a' : ''}(${rgba})`
    return str
}


console.log(hexToRGB('#abcdef80', 2))

const hexToRGB2 = hex => {
    let alpha = false,
        h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
        'rgb' +
        (alpha ? 'a' : '') +
        '(' +
        (h >>> (alpha ? 24 : 16)) +
        ', ' +
        ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
        ', ' +
        ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
        (alpha ? `, ${h & 0x000000ff}` : '') +
        ')'
    );
};

console.log(hexToRGB2('#abcdef80', 1))