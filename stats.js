const os = require('os')

setInterval(() => {

const {freemem, totalmem} = os

const t = parseInt(totalmem() / 1024 / 1024)
const f = parseInt(freemem() / 1024 / 1024)
const u = t - f;
const p = parseInt((u / t) * 100);

const stats = {
    total: `${t} MB`,
    free: `${f} MB`,
    used: `${u} MB`,
    percent: `${p}%`
}

console.clear();
console.log('======= PC STATS =======')
console.table(stats)

}, 1000);