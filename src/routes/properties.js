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

  router.post("/property/create", (request, response) => {
    console.log(request.body)
    const {
      name,
      address,
      manager,
      description,
      activeCompanyId,
      image,
      units,
      type,
    } = request.body;
    let issues = {};

    db.query(
      `
    INSERT INTO properties
    (name, description, address, manager, issues, image, units, type, companyID)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    `,
      [name, description, address, manager, issues, image, units, type, activeCompanyId]
    ).then((res) => {
      response.json(res.rows.results);
    });
  });

  router.get("/property/:ids", (request, response) => {
    ids = request.params.ids.split("&");
    db.query(
      `
      SELECT *
      FROM properties
      WHERE companyID =$1
      AND property_id =$2
    `,
      [ids[0], ids[1]]
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
