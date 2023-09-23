import { hello } from './hello.telefunc'
const { message } = await hello({ name: 'Evvva' })
document.querySelector('#view')!.textContent = message
