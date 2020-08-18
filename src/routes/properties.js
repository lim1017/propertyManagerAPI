const router = require("express").Router();

module.exports = (db) => {
  router.get("/properties", (request, response) => {
    db.query(
      `
      SELECT *
      FROM properties
    `
    ).then(({ rows: results }) => {
      response.json(results);
    });
  });

  router.post("/property/create", (request, response) => {
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

  router.patch("/property/edit/:propertyid", (request, response)=>{

    const propertyid = request.params.propertyid

    const {
      name,
      address,
      manager,
      description,
      companyId,
      image,
      units,
      type,
      property_id
    } = request.body;
    let issues = {};    
    console.log(request.body, "editing tentant")

    db.query(
    `
      UPDATE properties
      SET
      name = $1,
      description = $2,
      address = $3,
      manager = $4,
      image = $5,
      units = $6,
      type = $7

      WHERE property_id = $8
    `,
    [name, description, address, manager, image, units, type, property_id]
    ).then((res) => {
      response.json(res.rows.results);
    }).catch((err)=> console.log(err, 'eeeeeeeeeeeerrrrrrrrrrrrr'))

  })


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
