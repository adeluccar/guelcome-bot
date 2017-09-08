module['exports'] = function guelcomeBot (hook) {
  const request = require('request')
  const user = hook.params.message.new_chat_participant

  const questions = [
    '¿Toddy o Taco?',
    '¿Personaje favorito de GOT?',
    '¿Espacios o tabs?',
    '¿Qué editor de texto usas?'
  ]

  let randomQuestion = questions[Math.floor(Math.random() * questions.length)]

  const botMessage = `
¡Bienvenid@ ${user.first_name} a la comunidad FCC Caracas!
Winter is here!

¿Cuáles son tus expectativas respecto a FCC?
¿Cuáles son tus intereses?
${randomQuestion}
`
  if (user) {
    request
      .post('https://api.telegram.org/bot' + hook.env.bot_token + '/sendMessage')
      .form({
        'chat_id': hook.params.message.chat.id,
        'text': botMessage
      })
  }
}
