import { connect, set, connection } from "mongoose";

export class MongoConnection {
  public connect(): void {
    const mongoDB =
      process.env.EXPRESS_APP_DB_URL || "mongodb://localhost:27017/";

    connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

    set("useCreateIndex", true);
    set("useFindAndModify", false);

    // bind connection to error event to get notification of connection errors
    connection.on(
      "error",
      console.error.bind(console, "MongoDB connection error:")
    );
  }
}
