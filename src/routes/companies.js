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
      console.log(results)
      response.json(results);
    });
  });

  router.post("/company/create", (request, response)=>{

    console.log(request.body)

    const { companyName, email, address, city, country, postal, firstName, lastName, title, phone1, phone2, about, activeUser  } = request.body

    let completeAddress={ address, city, country, postal}
    let completeContact={ firstName, lastName, title, phone1, phone2}
    let issues = {}


    db.query(
    `
    INSERT INTO companies
    (name, email, address, contact, notes, issues, userID)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
    [companyName, email, completeAddress, completeContact, about, issues, activeUser]
    ).then(({ rows: results }) => {
      response.json(results);
    });

  })

  return router;
};
