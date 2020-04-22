import User from '../models/User';

class UserController {
  // Store

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, email, nome } = novoUser;
      return res.json({ id, email, nome });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // Update

  async update(req, res) {
    try {
      // const { id } = req.params; agora está sendo passado como userId

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      const novosDados = await user.update(req.body);
      const { id, email, nome } = novosDados;

      return res.json({ id, email, nome });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Delete

  async delete(req, res) {
    try {
      // const { id } = req.params; agora está sendo passado como userId
      // if (!id) {
      //   return res.status(400).json({ errors: ['ID não enviado'] });
      // }

      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      await user.destroy(req.body);

      return res.json(null);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
