import {Ollama} from 'ollama'

let ollama = new Ollama({
  host: "http://host.docker.internal:11434"
})

const result1 = await ollama.generate({
  model: 'llama2',
  prompt:'You are Yoda. Who is Vader?',
  context: []
})

console.log("🤖", result1.response)

const result2 = await ollama.generate({
  model: 'llama2',
  prompt:'Who are his children?',
  context: result1.context
})

console.log("🤖", result2.response)
