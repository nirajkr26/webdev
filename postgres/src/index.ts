import { Client } from "pg";
import express from "express";
// const pgClient = new Client("can enter direct conn string here");
const app = express();
app.use(express.json())

const pgClient2 = new Client({
    user: "neondb_owner",
    password: "",
    port: 5432,
    host: "ep-empty-union-adym5ek5-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true
})

app.post("/todo", async (req, res) => {
    const { title, description, done } = req.body
    try {
        const insertQuery = "Insert into Todo (title, description, done) values ($1, $2, $3);"

        const response = await pgClient2.query(insertQuery, [title, description, done]);

        res.json({
            message: "todo added"
        })
    } catch (e: any) {
        res.json({
            message: e.message
        })
    }
})

const main = async () => {
    await pgClient2.connect();

    const response = await pgClient2.query("Select * from playing_with_neon")

    console.log(response);
}

main();

app.listen(3000)

