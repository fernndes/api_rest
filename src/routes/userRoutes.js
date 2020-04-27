import { Router } from 'express';
import UserController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveriam existir, falha de segurança
// router.get('/', loginRequired, UserController.index); // Lista usuários
// router.get('/:id', UserController.show); // Lista usuário

// router.post('/', UserController.store); Fechando temporariamente para que ninguem possa se cadastrar sem ter acesso
router.put('/', loginRequired, UserController.update); // '/:id' não é correto pois permite que um usuário edite dados de outro, portanto o correto é somente '/'
router.delete('/', loginRequired, UserController.delete); // '/:id' não é correto pois permite que um usuário delete outros, portanto o correto é somente '/'

export default router;

/*
    index -> lista todos os usuários -> GET
    store/create -> cria um novo usuário -> POST
    delete -> apaga um usuário -> DELETE
    show -> mostra um usuário -> GET
    update -> atualiza um usuário -> PATCH ou PUT
*/
