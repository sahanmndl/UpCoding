export const formatDurationTime = (s) => {
    let years = Math.floor(s / 31536000);
    let months = Math.floor((s % 31536000) / 2592000);
    let days = Math.floor(((s % 31536000) % 2592000) / 86400);
    let hours = Math.floor((s % (3600 * 24)) / 3600);
    let minutes = Math.floor((s % 3600) / 60);
    let seconds = Math.floor(s % 60);

    let ans = "";
    if (years >= 1) {
        if (years > 1)
            ans += years + " yrs ";
        else if (years === 1)
            ans += years + " yr ";
        if (months > 1)
            ans += months + " mos";
        else if (months === 1)
            ans += months + " mo";
    } else if (months >= 1) {
        if (months > 1)
            ans += months + " mos ";
        else if (months === 1)
            ans += months + " mo ";
        if (days > 1)
            ans += days + " days";
        else if (days === 1)
            ans += days + " day";
    } else if (days >= 1) {
        if (days > 1)
            ans += days + " days ";
        else if (days === 1)
            ans += days + " day ";
        if (hours > 1)
            ans += hours + " hrs";
        else if (hours === 1)
            ans += hours + " hr";
    } else {
        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);
        ans = hours + ":" + minutes + ":" + seconds;
    }

    return ans;
}