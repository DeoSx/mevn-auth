import User from '../../models/user'

const login = (req, res) => {};

const register = async (req, res) => {
  const { name, password, email } = req.body

  const user = await User.create({
    name, password, email
  })

  return res.status(201).json({ user })
};

export {login, register};
