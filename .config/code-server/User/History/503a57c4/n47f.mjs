import {Ollama} from 'ollama'

let ollama = new Ollama({
  host: "http://host.docker.internal:11434"
})

const modelfile = `
FROM llama2
SYSTEM "You are yoda from star wars."
`
await ollama.create({ model: 'james-kirk', modelfile: modelfile })


const response = await ollama.chat({

  model: 'yoda',
  messages: [{ role: 'user', content: 'who is Darth Vader?' }],
})

console.log(response.message.content)
//console.log(response)


