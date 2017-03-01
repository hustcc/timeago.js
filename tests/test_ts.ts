// just test typescript can be compiled and ran.
// TODO: if trace or error, travis-ci will error

console.log('run typescript.')
import timeago from '..'
const timeagoInstance = timeago()
console.log(timeagoInstance.format('01-01-2017'))