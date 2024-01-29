# js-genai-stack

Start the stack:
```bash
docker compose --env-file arm64.env up
# if you are not on an arm workstation: 
# docker compose --env-file amd64.env up
```
Then open http://0.0.0.0:4999


Open a terminal on the host and run the following command:
```bash
ollama run llama2
```