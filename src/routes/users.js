const router = require("express").Router();

module.exports = db => {
  
  router.get("/users", (request, response) => {

    db.query(
      `
      SELECT *
      FROM users
    `,
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });
  
  router.patch("/users/:userID", (request, response) => {

    const userID = request.params.userID

    const {first_name, last_name, email, phone, profile_img, about} = request.body

    console.log(userID)
    console.log(request.body)

    db.query(
      `
      UPDATE users
      SET
      first_name = $1,
      last_name = $2,
      email = $3,
      phone = $4,
      profile_img = $5,
      about= $6

      WHERE user_id= $7
    `, [first_name, last_name, email, phone, profile_img, about, userID]
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });
  

  return router;
};

