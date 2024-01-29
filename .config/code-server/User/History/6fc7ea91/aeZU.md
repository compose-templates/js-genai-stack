# js-genai-stack

## Start the stack

Open a terminal on the **host** and run the following command:
```bash
ollama run llama2
```

Start the stack:
```bash
docker compose --env-file arm64.env up
# if you are not on an arm workstation: 
# docker compose --env-file amd64.env up
```
Then open http://0.0.0.0:4999

From a terminal into the Web IDE, run the following command:
```bash
npm install
```

## Use the demos

> Talk to Yoda
```bash
cd starwars
node generate.mjs
```

