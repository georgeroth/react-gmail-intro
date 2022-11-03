import './styles/email.css'

import EmailToolbar from './emailToolbar.js'
import EmailContent from './emailContent.js'

function MainEmailView() {
    return (
        <main className="email-view">
        <EmailToolbar />
        <EmailContent />
      </main>
    )
}

export default MainEmailView