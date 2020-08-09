const router = require("express").Router();

module.exports = db => {
  
  router.get("/units", (request, response) => {

    db.query(
      `
      SELECT *
      FROM units
    `,
    ).then(({ rows: results }) => {
      // console.log(user);
      response.json(results);
    });
  });
  
  

  return router;
};
