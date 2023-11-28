import { Router } from "express"
import { userCreate } from "../controllers/user.controller";
import { FranchisesAll, FranchisesCreate, franchisesDelete, franchisesEdit } from "../controllers/franchises.controller";
import { createToken }from "../../infrastructure/jwt";
import getCookie from "../../shared/regex.shared";
import { LoginController } from "../controllers/auth/login.controller";
import { RegisterController } from "../controllers/auth/register.controller";
import { VerifyEmailMiddeleware } from "../http/middlewares/auth.middlewares";
import { JWTVerifyMiddleware } from "../http/middlewares/jwt.middlewares";

export const router = Router();


/**
 * 
 * @POSTAMN
 * @URL http://localhost:4000/v1/auth/login
 * @EXAMPLE http://YOU-DOMAIN:YOU-PORT/v1/auth/login
 */

router.post('/v1/auth/login', LoginController);

/**
 * 
 * @POSTAMN
 * @URL http://localhost:4000/v1/auth/login
 * @EXAMPLE http://YOU-DOMAIN:YOU-PORT/v1/auth/register
 */

router.post('/v1/auth/register', VerifyEmailMiddeleware, RegisterController)

/**
 * 
 * @POSTAMN
 * @URL http://localhost:4000/v1/auth/franchises
 * @EXAMPLE http://YOU-DOMAIN:YOU-PORT/v1/auth/franchises
 */
router.route('/v1/auth/franchises')
        .get(JWTVerifyMiddleware,FranchisesAll)
            .post(JWTVerifyMiddleware,FranchisesCreate)
                .put(JWTVerifyMiddleware,franchisesEdit)
                    .delete(JWTVerifyMiddleware,franchisesDelete);