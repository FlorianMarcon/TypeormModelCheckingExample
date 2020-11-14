import { BankSchema } from "../database/Schema/bank.schema";


export default async function cleanDatabase() {
	try {
		await BankSchema.clear();
	} catch {}
}