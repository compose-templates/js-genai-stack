# js-genai-stack

Start the stack:
```bash
docker compose --env-file arm64.env up
# or docker compose --env-file amd64.env up
http://0.0.0.0:4999/?folder=/workspace
```


Open a terminal on the host and run the following command:
```bash
ollama run llama2
```