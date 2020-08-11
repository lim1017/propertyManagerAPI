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
      response.json(results);
    });
  });

  router.get("/company/:ids", (request, response) => {
    ids = request.params.ids.split('&')
    console.log(request.params, 'asdf')
    console.log(ids)
    db.query(
      `
      SELECT *
      FROM companies
      WHERE userID =$1
      and company_id = $2
    `,
      [ids[0],ids[1]]
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });

  router.post("/company/create", (request, response)=>{

    console.log(request.body)

    const { name, email, address, contact, notes, userId  } = request.body
    let issues = {}


    db.query(
    `
    INSERT INTO companies
    (name, email, address, contact, notes, issues, userID)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    [name, email, address, contact, notes, issues, userId]
    ).then((res) => {
      console.log(res, 'res!!!!!!!!!!!!!!!!!!')
      response.json(res.rows.results);
    });

  })

  return router;
};
