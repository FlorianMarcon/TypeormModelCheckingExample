import { createConnection, Connection } from "typeorm";
import { BankSchema } from "../Schema/bank.schema";


export async function connection(): Promise<Connection> {
	const connection: Connection = await createConnection({
		type: "mysql",
		host: process.env.DB_ADDRESS,
		port: parseInt(process.env.DB_PORT),
		database: process.env.DB_DATABASE,
		synchronize: false,
		// logging: true,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		// useUnifiedTopology: true,
		entities: [
			BankSchema,
		]
	});

	return (connection);
}

export async function connectionTest(): Promise<Connection> {

	console.log({
		host: process.env.DB_ADDRESS,
		port: parseInt(process.env.DB_PORT),
		database: process.env.DB_DATABASE_TEST,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
	})
	try {
		const connection: Connection = await createConnection({
			type: "mysql",
			host: process.env.DB_ADDRESS,
			port: parseInt(process.env.DB_PORT),
			database: process.env.DB_DATABASE_TEST,
			// synchronize: false,
			// logging: true,y
			username: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			// useUnifiedTopology: true,
			entities: [
				// BankSchema,
			]
		});
	
		return (connection);
	} catch (error) {
		console.error(error)
	}

	return (null);

}