import { connectionTest } from "../../Connections";
import cleanDatabase from "../../../tests-utils/cleanDatabase";

describe('Bank Service', () => {

	beforeAll(async ()=> {
		
		const co = await connectionTest();
		console.log(co)
		await cleanDatabase()

	}, 10000)

	afterAll(async () => {
		await cleanDatabase()
	
	})

	/**
	 * Create
	 */

	it('should create a bank', async () => {
		
	})
})