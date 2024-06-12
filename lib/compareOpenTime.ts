interface Input {
    "subject": string
    "room": string,
    "season": string,
    "open_time": string,
}

const days = ['月', '火', '水', '木', '金', '土', '日']

export function compareOpenTime(a: Input, b: Input) {
    const temp = days.indexOf(a.open_time[0]) - days.indexOf(b.open_time[0])
    if (temp === 0) {
        return a.open_time[1].localeCompare(b.open_time[1])
    } else {
        return temp
    }
}