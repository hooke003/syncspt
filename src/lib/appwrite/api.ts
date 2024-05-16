import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account } from "./config";

export async function createUserAccount(user: INewUser): Promise<any> {
  try {
    const newAccount = await account.create(
        ID.unique(),
        user.email,
        user.password,
        user.name
    );
    return newAccount;
  } catch (error) {
    console.error("Error creating user account:", JSON.stringify(error, null, 2));
    return { success: false, error: error };
  }
}
