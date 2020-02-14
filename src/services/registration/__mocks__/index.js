export default {
  register (detail) {
    return new Promise((resolve, reject) => {
      if (detail.emailAddress === 'sunny@taskagile.com') {
        // console.log('ssssss')
        resolve({ result: 'success' })
      } else {
        // console.log('fffffff')
        reject(new Error('User already exist'))
      }
    })
  }
}
