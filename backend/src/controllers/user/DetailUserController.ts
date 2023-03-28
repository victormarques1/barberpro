import { Request, Response } from "express";
import { UserDetailService } from "../../services/user/DetailUserService";

class DetailUserController { 
    async handle(req: Request, response: Response) {

        const user_id = req.user_id;

        const userDetailService = new UserDetailService();

        const detailUser = await userDetailService.execute(user_id);

        return response.json(detailUser)
    }
}

export { DetailUserController }