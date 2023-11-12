import { Router } from "express"
import { userCreate } from "../controllers/user.controller";
import { FranchisesAll, FranchisesCreate, franchisesDelete, franchisesEdit } from "../controllers/franchises.controller";
import {createToken , decodeToken }from "../../infrastructure/jwt";
import getCookie from "../../shared/regex.shared";
import { LoginController } from "../controllers/auth/login.controller";
import { RegisterController } from "../controllers/auth/register.controller";
import app from "./app";


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
router.post('/v1/auth/register', RegisterController)

/**
 * TODO
 */

app.route('/v1/auth/franchises')
    .get(FranchisesAll)
        .post(FranchisesCreate)
            .put()
                .delete()
/**
 * TODO
 */
router.post('/v1/auth/franchises/edit', function(req, res) {
    franchisesEdit(req)
        .then(response => res.json({response}))
            .catch(err => res.json({err}))
})
/**
 * TODO
 */
router.delete('/v1/auth/franchises/delete', function(req, res) {
    franchisesDelete(req)
        .then(response => res.json({response}))
            .catch(err => res.json({err}))
})

/**
 * TODO
 */
router.get('/v1/auth/jwt', (req, res) => {
    res.cookie('token',createToken(req.body))
    res.json(req.body)
});
/**
 * TODO
 */
router.get('/v1/auth/get-jwt', (req, res) => {
    const token = getCookie(req.headers.cookie as string)
    
    res.json(decodeToken(token))
});
