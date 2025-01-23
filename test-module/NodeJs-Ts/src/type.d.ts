type Handle = () => Promise<string>
const fullName = 'Nguyen Viet'

const handle: Handle = () => Promise.resolve(fullName)

handle.then(console.log)
