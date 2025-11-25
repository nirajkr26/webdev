import { Client } from "pg";

// const pgClient = new Client("can enter direct conn string here");

const pgClient2 = new Client({
    user: "neondb_owner",
    password:"",
    port: 5432,
    host: "ep-empty-union-adym5ek5-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true
})

const main = async () => {
    await pgClient2.connect();

    const response = await pgClient2.query("Select * from playing_with_neon")

    console.log(response);
}

main();


