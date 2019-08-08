const getJobs = () => {
    return fetch('http://api.dataatwork.org/v1/jobs');
}

const searchJobs = (uuid) => {
    return fetch('http://api.dataatwork.org/v1/jobs/' + uuid + '/related_jobs') //using fetch as its esc default
}
module.exports.getJobs = getJobs;
module.exports.searchJobs = searchJobs;