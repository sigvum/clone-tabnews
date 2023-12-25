import database from "infra/database"

async function status(request, response) {
    const result = await database.query('SELECT 2 - 1 as sum;');
    console.log(result.rows);
    response.status(200).json({ chave : "tésté33333wwwww" });
}

export default status;
