import { IHttpExpress } from "@logic/interfaces";
import { signIn, signUp } from "../services";

export const signInRequest: IHttpExpress = async (req, res, next) => {
    let data: any = req.body;
    let response = await signIn(data)
    res.json(response).status(200)
}

export const signUpRequest: IHttpExpress = async (req, res, next) => {
    let response = await signUp(req.body)
    res.json(response).status(200)
}

export const recoveryPasswordRequest: IHttpExpress = async (req, res, next) => {

}