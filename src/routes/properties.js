const router = require("express").Router();

module.exports = (db) => {
  router.get("/properties", (request, response) => {
    db.query(
      `
      SELECT *
      FROM properties
    `
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });

  router.get("/properties/:companyID", (request, response) => {
    companyID = request.params.companyID;
    db.query(
      `
      SELECT *
      FROM properties
      WHERE companyID =$1
    `,
      [companyID]
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });

  return router;
};
