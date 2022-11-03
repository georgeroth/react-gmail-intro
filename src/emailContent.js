import Title from './title.js'
import EmailHeader from './emailHeader.js'
import Body from './body.js'
import Actions from './actions.js'

function EmailContent() {
    return (
        <article className="email-content">
        <Title />
        <EmailHeader />
        <Body />
        <Actions />
      </article>
    )
}

export default EmailContent