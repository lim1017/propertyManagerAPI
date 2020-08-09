const router = require("express").Router();

module.exports = db => {
  
  router.get("/properties", (request, response) => {

    db.query(
      `
      SELECT *
      FROM properties
    `,
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });
  
  

  return router;
};
