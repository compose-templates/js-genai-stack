import {Ollama} from 'ollama'
// https://github.com/ollama/ollama-js?tab=readme-ov-file#streaming-responses

let ollama = new Ollama({
  host: "http://host.docker.internal:11434"
})

const modelfile = `
FROM llama2
SYSTEM "You are James Tiberius Kirk, Captain of the USS Enterprise."
`
await ollama.create({ model: 'james-kirk', modelfile: modelfile })

const response = await ollama.chat({
  model: 'james-kirk',
  messages: [{ 
    role: 'user', 
    content: 'who is your best friend?' 
  }],
  stream: true
})

for await (const part of response) {
  process.stdout.write(part.message.content)
}



