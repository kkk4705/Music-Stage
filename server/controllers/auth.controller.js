/* eslint-disable camelcase */
const sha256 = require('sha256');
const { Artist, Owner } = require('../db/models');

const signUp = async (req, res) => {
  const {
    name,
    mail,
    pass,
    photo,
    instagram,
    phone,
    info,
    vk,
    genre,
    genre_id_fs,
    telegram,
  } = req.body;

  // signUp artist
  if (name && mail && pass && photo && instagram && phone && info && vk && genre && genre_id_fs) {
    try {
      const newUser = await Artist.create({
        name,
        mail,
        pass: sha256(pass),
        photo,
        instagram,
        phone,
        info,
        vk,
        genre,
        genre_id_fs,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        type: 'artist',
      };

      return res.json({ id: newUser.id, name: newUser.name, type: 'artist' });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  // signUp owner
  if (name && mail && pass && photo && instagram && phone && info && telegram) {
    try {
      const newUser = await Owner.create({
        name,
        mail,
        pass: sha256(pass),
        photo,
        instagram,
        phone,
        info,
        telegram,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,
        type: 'owner',
      };

      return res.json({ id: newUser.id, name: newUser.name, type: 'owner' });
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(4);
};

const signIn = async (req, res) => {
  const { pass, mail, typeUser } = req.body;

  // signIn artist
  if (pass && mail && typeUser === 'authartist') {
    try {
      const currentUser = await Artist.findOne({ where: { mail } });
      if (currentUser && currentUser.pass === sha256(pass)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };

        return res.json({ id: currentUser.id, name: currentUser.name, type: 'artist' });
      }
      return res.sendStatus(401);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  // signIn owner
  if (pass && mail && typeUser === 'authowner') {
    try {
      const currentUser = await Owner.findOne({ where: { mail } });
      if (currentUser && currentUser.pass === sha256(pass)) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };

        return res.json({ id: currentUser.id, name: currentUser.name, type: 'owner' });
      }
      return res.sendStatus(401);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    let user = await Artist.findByPk(req.session.user.id);
    if (!user) {
      user = await Owner.findByPk(req.session.user.id);
      return res.json({ id: user.id, userName: user.userName, type: 'owner' });
    }
    return res.json({ id: user.id, userName: user.userName, type: 'artist' });
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
