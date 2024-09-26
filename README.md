# clone-tabnews

Práticas do curso.dev

git add -A <br>
git commit -m 'add `/api/v1/status` endpoint' <br>
git push <br>
<br>
<br>
docker-compose -f infra/compose.yaml up -d
<br>
docker-compose -f infra/compose.yaml down
<br>
docker-compose -f infra/compose.yaml up -d --force-recreate
<br>
docker logs --follow <nome-do-container>

<br><br>
docker system prune -a
<br>
git add -A && git commit -m --amend --no-edit && git push -f
