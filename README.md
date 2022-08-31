# JWT & Bcypt Practice

- **JWT or JSON Web Token**, is used for **authorization** in a **CRUD/REST App**. More information about JWT can be found on [jwt.io](https://jwt.io/)
- **Bcrypt or BcryptJS**, is used for hashing sensitive credentials such as passwords when we want to store them. More information on Bcrypt can be found on [bcryptjs](https://www.npmjs.com/package/bcryptjs)

## JWT Structure

JWT is structured in 3 parts.

### Header

**Header** is where we declare the hashing algorithm and the token type, in this case **JWT**

```javascript
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload

**Payload** is where we pass in the data that we want to be protected.

```javascript
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

### Signature

**Signature** is the way to verify that **JWT token is not tempered with**. It also contains the **JWT Secret**, which will be given by the developer. JWt uses the hashing algorithm and JWT Secret to create the token

```javascript
HMACSHA256(
  base64UrlEncode(header) + '.' + base64UrlEncode(payload),
  jwt_secret
);
```

This 3 part combined, returns a string similar to this `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

## JWT Methods

### .sign(payload, secretOrPrivateKey, [options, callback])

**.sign()** method is used for the creation of a token.
It takes two main arguments, options(optional) and a callback(optional). **payload** that we want to encrypt and **secretOrPrivateKey** which will be provided by the developer.

There are also options that can be passed in such as `expiresIn` to set an expiration date for the token.

More information can be found in [auth0's Github Repo](https://github.com/auth0/node-jsonwebtoken#usage)

### .verify(token, secretOrPublicKey, [options, callback])

**.verify()** method is used for verification of the user/client that made the request. **token** will be the token that is assigned to the user/client and **secretOrPublicKey** will be they JWT Scret provided by the developer.

There are also options that can be passed in such `maxAge` which indicates the maximum allowed age for the token before it expires

More information can be found in [auth0's Github Repo](https://github.com/auth0/node-jsonwebtoken#usage)

## Bcrypt Structure

**Bcrypt** simply creates an encoded string from a given string to make original string safe and secure

## Bcrypt Methods

### .genSaltSync(int) or .genSalt(int, callback)

**.genSaltSync(int) or .genSalt(int, callback)** methods are used to create a salt for the hashing of the given data.
**salt** basically can be described as a random string that ensures the hashing is going to be unique. Simply put, a random string that will be scrumbled with the data in order to create a hashed string

More information can be found [Bcrypt Docs - Usage](https://www.npmjs.com/package/bcryptjs#usage)

### .hashSync(data, salt) or .hash(data, salt)

**.hashSync(data, salt) or .hash(data, salt)** methods are used for hashing the **data** given using the **salt** that is created. These methods are responsible of hashing the given data

More information can be found [Bcrypt Docs - Usage](https://www.npmjs.com/package/bcryptjs#usage)
