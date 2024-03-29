import { UserProfileRepository } from "../db/repositories"

const makeRegisterUser = 
    (createUserProfile: Function, createUserLocalCredentials: Function) => 
        async (registerRequest: { fullname: string }): Promise<{ id: number }|null> => {
            const { id: profileId } = await createUserProfile(registerRequest)
            const createdCredentials = await createUserLocalCredentials(registerRequest, { id: profileId })
                
            if(createdCredentials) {
                return { id: profileId }
            }
            return null
        } 

export { makeRegisterUser }