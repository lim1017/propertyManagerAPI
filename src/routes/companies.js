const router = require("express").Router();

module.exports = (db) => {
  router.get("/companies", (request, response) => {
    db.query(
      `
      SELECT *
      FROM companies
    `
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });

  router.get("/companies/:userid", (request, response) => {
    userid = request.params.userid;
    db.query(
      `
      SELECT *
      FROM companies
      WHERE userID =$1
    `,
      [userid]
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });

  // router.post("/companies", (request, response)=>{

  //   db.query(
  //               `
  //               INSERT INTO users (user_id, categories, favorites, name, email, age, gender, nickname)
  //                 VALUES ($1::text, $2::json, $3::json, $4::text, $5::text, $6::integer, $7::text, $8::text)
  //               `,
  //               [user_id, categories, favorites, name, email, age, gender, nickname]
  //             )

  // })

  return router;
};
