# Backend

For steps I used to create backend [`docs` Folder](/backend/docs/)



```sql
project-root/
│── src/
│   │── server.js              # Entry point (starts Express + Apollo server)
│   │
│   ├── database/
│   │   └── connect.js        # MongoDB connection setup (mongoose.connect)
│   │
│   ├── models/               # MongoDB models (Mongoose)
│   │   └── user.model.js           # Example: User schema/model
│   │   
│   │
│   ├── graphql/
│   │   ├── schema.js         # GraphQL type definitions (typeDefs)
│   │   ├── resolvers.js      # GraphQL resolvers
│   │   └── index.js          # Optional: Combine schema + resolvers
│   │
│── package.json
```