# Find all users
```
curl --location --request GET 'localhost:3000/v1/users/all'
```
# Find user by id
```
curl --location --request GET 'localhost:3000/v1/users/62b4a708db7b1be9b5665ce2'
```
# Create user
```
curl --location --request POST 'localhost:3000/v1/users/' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=new999@gmail.com' \
--data-urlencode 'nickName=new999'
```
# Update User
```
curl --location --request PATCH 'localhost:3000/v1/users/' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id=62b46b8d8a79f06d820a1e6c' \
--data-urlencode 'newNickName=newTestUser'
```
# Delete User
```
curl --location --request DELETE 'localhost:3000/v1/users/' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'id=62b46b8d8a79f06d820a1e6c'
```
