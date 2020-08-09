const router = require("express").Router();

module.exports = db => {
  
  router.get("/tenants", (request, response) => {

    db.query(
      `
      SELECT *
      FROM tenants
    `,
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });
  
  

  return router;
};
