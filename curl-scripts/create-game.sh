curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-type: application/json"
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{}'

echo
